var S=Object.defineProperty;var k=(l,e,t)=>e in l?S(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var a=(l,e,t)=>k(l,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const w="clinic_ai_companion_db",q=1,m="data",v="clinic_ai_companion_settings",p="clinic_ai_companion_login_session",g="clinic_ai_companion_admin_session",u={adminKey:"marti2025",loginKey:"marti2025",openApiKey:"",timeout:30,systemPrompt:"You are a helpful medical assistant that generates clinical notes.",prompt:`Generate a comprehensive clinical note based on the following patient information:

{formData}`,model:"gpt-5.1"};class c{static async getDB(){return this.db?this.db:new Promise((e,t)=>{const i=indexedDB.open(w,q);i.onerror=()=>t(i.error),i.onsuccess=()=>{this.db=i.result,e(this.db)},i.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(m)||s.createObjectStore(m)}})}static async getItem(e){try{const t=await this.getDB();return new Promise((i,n)=>{const o=t.transaction([m],"readonly").objectStore(m).get(e);o.onerror=()=>n(o.error),o.onsuccess=()=>i(o.result||null)})}catch(t){return console.error("Error getting item from IndexedDB:",t),null}}static async setItem(e,t){try{const i=await this.getDB();return new Promise((n,s)=>{const d=i.transaction([m],"readwrite").objectStore(m).put(t,e);d.onerror=()=>s(d.error),d.onsuccess=()=>n()})}catch(i){throw console.error("Error setting item in IndexedDB:",i),i}}static async removeItem(e){try{const t=await this.getDB();return new Promise((i,n)=>{const o=t.transaction([m],"readwrite").objectStore(m).delete(e);o.onerror=()=>n(o.error),o.onsuccess=()=>i()})}catch(t){throw console.error("Error removing item from IndexedDB:",t),t}}static async getSettings(){const e=await this.getItem(v);if(e)try{const t={...u,...e};return(!t.adminKey||t.adminKey.trim()==="")&&(t.adminKey=u.adminKey),t}catch{return u}return u}static async saveSettings(e){const i={...await this.getSettings(),...e};await this.setItem(v,i)}static async validateAdminKey(e){const t=await this.getSettings();return e.trim()===t.adminKey.trim()}static async validateLoginKey(e){const t=await this.getSettings();return e===t.loginKey}static async setLoginSession(e){await this.setItem(p,e)}static async getLoginSession(){return await this.getItem(p)}static async removeLoginSession(){await this.removeItem(p)}static async setAdminSession(e){await this.setItem(g,e)}static async getAdminSession(){return await this.getItem(g)}static async removeAdminSession(){await this.removeItem(g)}}a(c,"db",null);class y{static async login(e){if(await c.validateLoginKey(e)){const i={timestamp:Date.now()};return await c.setLoginSession(i),!0}return!1}static async isLoggedIn(){const e=await c.getLoginSession();if(!e)return!1;try{const i=(await c.getSettings()).timeout*60*1e3;return Date.now()-e.timestamp>i?(await this.logout(),!1):!0}catch{return!1}}static async logout(){await c.removeLoginSession()}static async adminLogin(e){if(await c.validateAdminKey(e)){const i={timestamp:Date.now()};return await c.setAdminSession(i),!0}return!1}static async isAdminLoggedIn(){if(!await c.getAdminSession())return!1;try{return!0}catch{return!1}}static async adminLogout(){await c.removeAdminSession()}}class L{static async generateSummary(e){var s;const t=await c.getSettings();if(!t.openApiKey)throw new Error("OpenAI API key is not configured. Please set it in the admin settings.");const i=t.systemPrompt||"You are a helpful medical assistant that generates clinical notes.";let n=t.prompt||`Generate a comprehensive clinical note based on the following patient information:

{formData}`;if(n.includes("{formData}")){const r=this.formatFormData(e);n=n.replace("{formData}",r)}try{const o=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${t.openApiKey}`,"Content-Type":"application/json"},body:JSON.stringify({model:t.model||"gpt-4o-mini",messages:[{role:"system",content:i},{role:"user",content:n}],temperature:.7,max_completion_tokens:2e3})});if(!o.ok){const h=await o.json().catch(()=>({}));throw new Error(((s=h.error)==null?void 0:s.message)||`API error: ${o.statusText}`)}const d=await o.json();if(d.choices&&d.choices.length>0)return d.choices[0].message.content;throw new Error("No response from OpenAI")}catch(r){throw r instanceof Error?r:new Error("Failed to generate summary")}}static formatFormData(e){const t=[];return t.push("Patient Information:"),e.patientNameOrId&&t.push(`  Name/ID: ${e.patientNameOrId}`),t.push(`  Age: ${e.age||"N/A"}`),t.push(`  Sex/Gender: ${e.sexGender||"N/A"}`),t.push(""),t.push("Visit Information:"),e.chiefComplaint&&t.push(`  Chief Complaint: ${e.chiefComplaint}`),e.historyOfPresentIllness&&t.push(`  History of Present Illness: ${e.historyOfPresentIllness}`),e.pastMedicalHistory&&t.push(`  Past Medical History: ${e.pastMedicalHistory}`),e.pastSurgicalHistory&&t.push(`  Past Surgical History: ${e.pastSurgicalHistory}`),e.medications&&t.push(`  Medications: ${e.medications}`),e.allergies&&t.push(`  Allergies: ${e.allergies}`),e.familyHistory&&t.push(`  Family History: ${e.familyHistory}`),e.socialHistory&&t.push(`  Social History: ${e.socialHistory}`),e.reviewOfSystems&&t.push(`  Review of Systems: ${e.reviewOfSystems}`),e.vitals&&t.push(`  Vitals: ${e.vitals}`),e.labs&&t.push(`  Labs: ${e.labs}`),e.imaging&&t.push(`  Imaging: ${e.imaging}`),e.additionalCommentsFromMA&&t.push(`  Additional Comments from MA: ${e.additionalCommentsFromMA}`),e.additionalCommentsFromDoctor&&t.push(`  Additional Comments from Doctor: ${e.additionalCommentsFromDoctor}`),t.join(`
`)}}class A{constructor(e,t){a(this,"container");a(this,"onLoginSuccess");this.container=e,this.onLoginSuccess=t}render(){this.container.innerHTML=`
      <div class="login-container">
        <div class="login-box">
          <h1>Clinic AI Companion</h1>
          <form id="login-form">
            <div class="form-group">
              <label for="login-key">Login Key</label>
              <input type="password" id="login-key" required autocomplete="off">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <div id="login-error" class="error-message" style="display: none;"></div>
          </form>
        </div>
      </div>
    `,this.container.querySelector("#login-form").addEventListener("submit",t=>{t.preventDefault(),this.handleLogin()})}async handleLogin(){const e=this.container.querySelector("#login-key"),t=this.container.querySelector("#login-error"),i=e.value.trim();if(!i){this.showError("Please enter a login key");return}await y.login(i)?(t.style.display="none",this.onLoginSuccess()):this.showError("Invalid login key")}showError(e){const t=this.container.querySelector("#login-error");t.textContent=e,t.style.display="block"}}class x{constructor(e,t,i){a(this,"container");a(this,"onGenerate");a(this,"onShowSettings");a(this,"currentStep","patient");this.container=e,this.onGenerate=t,this.onShowSettings=i}render(){this.currentStep="patient",this.renderForm()}renderForm(){this.container.innerHTML=`
      <div class="form-page">
        <div class="page-header">
          <h1>Clinic AI Companion</h1>
          <button id="settings-btn" class="btn btn-secondary">Admin Settings</button>
        </div>
        <form id="patient-form">
          <div id="patient-info-section" class="form-section ${this.currentStep==="patient"?"":"hidden"}">
            <h2>Patient Information</h2>
            <div class="form-row">
              <div class="form-group">
                <label for="age">Age *</label>
                <input type="number" id="age" min="0" max="150" required>
                <small class="form-hint">Enter a valid age (0-150)</small>
              </div>
              <div class="form-group">
                <label>Sex / Gender *</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="sex-gender" value="male" required>
                    <span>Male</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="sex-gender" value="female" required>
                    <span>Female</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="sex-gender" value="other" required>
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="patient-name-id">Patient Name or ID (Optional)</label>
              <input type="text" id="patient-name-id">
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-primary" id="next-btn">Next</button>
              <button type="button" class="btn btn-secondary" id="clear-btn">Clear Form</button>
            </div>
            <div id="patient-error" class="error-message" style="display: none;"></div>
          </div>

          <div id="visit-info-section" class="form-section ${this.currentStep==="visit"?"":"hidden"}">
            <h2>Visit Information (All Optional)</h2>
            <div class="form-group">
              <label for="chief-complaint">Chief Complaint</label>
              <textarea id="chief-complaint" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="history-present-illness">History of Present Illness</label>
              <textarea id="history-present-illness" rows="4"></textarea>
            </div>
            <div class="form-group">
              <label for="past-medical-history">Past Medical History</label>
              <textarea id="past-medical-history" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="past-surgical-history">Past Surgical History</label>
              <textarea id="past-surgical-history" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="medications">Medications (with doses)</label>
              <textarea id="medications" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="allergies">Allergies</label>
              <textarea id="allergies" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="family-history">Family History</label>
              <textarea id="family-history" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="social-history">Social History</label>
              <textarea id="social-history" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="review-systems">Review of Systems</label>
              <textarea id="review-systems" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="vitals">Vitals</label>
              <textarea id="vitals" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="labs">Labs</label>
              <textarea id="labs" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="imaging">Imaging</label>
              <textarea id="imaging" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="comments-ma">Additional Comments from MA</label>
              <textarea id="comments-ma" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="comments-doctor">Additional Comments from Doctor</label>
              <textarea id="comments-doctor" rows="3"></textarea>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" id="back-btn">Back</button>
              <button type="submit" class="btn btn-primary" id="generate-btn">Generate Summary</button>
            </div>
            <div id="form-error" class="error-message" style="display: none;"></div>
          </div>
        </form>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){this.container.querySelector("#patient-form").addEventListener("submit",r=>{r.preventDefault(),this.handleSubmit()}),this.container.querySelector("#next-btn").addEventListener("click",()=>this.handleNext()),this.container.querySelector("#back-btn").addEventListener("click",()=>this.handleBack()),this.container.querySelector("#clear-btn").addEventListener("click",()=>this.clearForm()),this.container.querySelector("#settings-btn").addEventListener("click",()=>this.onShowSettings())}handleNext(){const e=this.container.querySelector("#patient-error");e.style.display="none";const i=this.container.querySelector("#age").value.trim();if(!i){this.showPatientError("Age is required");return}const n=parseInt(i,10);if(isNaN(n)||n<0||n>150){this.showPatientError("Please enter a valid age between 0 and 150");return}if(!this.container.querySelector('input[name="sex-gender"]:checked')){this.showPatientError("Please select a gender");return}this.currentStep="visit";const r=this.container.querySelector("#patient-info-section"),o=this.container.querySelector("#visit-info-section");r.classList.add("hidden"),o.classList.remove("hidden")}handleBack(){this.currentStep="patient";const e=this.container.querySelector("#patient-info-section"),t=this.container.querySelector("#visit-info-section");e.classList.remove("hidden"),t.classList.add("hidden")}showPatientError(e){const t=this.container.querySelector("#patient-error");t.textContent=e,t.style.display="block"}async handleSubmit(){const e=this.container.querySelector("#generate-btn"),t=this.container.querySelector("#form-error");t.style.display="none";const n=this.container.querySelector("#age").value.trim();if(!n){t.textContent="Age is required",t.style.display="block";return}const s=parseInt(n,10);if(isNaN(s)||s<0||s>150){t.textContent="Please enter a valid age between 0 and 150",t.style.display="block";return}if(!this.container.querySelector('input[name="sex-gender"]:checked')){t.textContent="Please select a gender",t.style.display="block";return}e.disabled=!0,e.textContent="Generating...";try{const o=this.getFormData();await this.onGenerate(o)}catch(o){t.textContent=o instanceof Error?o.message:"Failed to generate summary",t.style.display="block"}finally{e.disabled=!1,e.textContent="Generate Summary"}}getFormData(){const e=this.container.querySelector('input[name="sex-gender"]:checked'),t=e?e.value:"";return{age:this.container.querySelector("#age").value.trim(),sexGender:t,patientNameOrId:this.container.querySelector("#patient-name-id").value.trim()||void 0,chiefComplaint:this.container.querySelector("#chief-complaint").value.trim(),historyOfPresentIllness:this.container.querySelector("#history-present-illness").value.trim(),pastMedicalHistory:this.container.querySelector("#past-medical-history").value.trim(),pastSurgicalHistory:this.container.querySelector("#past-surgical-history").value.trim(),medications:this.container.querySelector("#medications").value.trim(),allergies:this.container.querySelector("#allergies").value.trim(),familyHistory:this.container.querySelector("#family-history").value.trim(),socialHistory:this.container.querySelector("#social-history").value.trim(),reviewOfSystems:this.container.querySelector("#review-systems").value.trim(),vitals:this.container.querySelector("#vitals").value.trim(),labs:this.container.querySelector("#labs").value.trim(),imaging:this.container.querySelector("#imaging").value.trim(),additionalCommentsFromMA:this.container.querySelector("#comments-ma").value.trim(),additionalCommentsFromDoctor:this.container.querySelector("#comments-doctor").value.trim()}}clearForm(){this.container.querySelector("#patient-form").reset()}}class I{constructor(e,t){a(this,"container");a(this,"onBack");this.container=e,this.onBack=t}render(e){this.container.innerHTML=`
      <div class="results-page">
        <div class="page-header">
          <h1>Generated Summary</h1>
          <button id="back-btn" class="btn btn-secondary">Back to Form</button>
        </div>
        <div class="results-content">
          <div class="result-section">
            <h2>Summary</h2>
            <div class="summary-box">
              <pre id="summary-text">${this.escapeHtml(e.summary)}</pre>
              <button id="copy-summary-btn" class="btn btn-primary">Copy Summary</button>
            </div>
          </div>
          <div class="result-section">
            <h2>Entered Data</h2>
            <div class="data-box">
              <pre id="data-text">${this.formatFormData(e.formData)}</pre>
              <button id="copy-data-btn" class="btn btn-secondary">Copy Data</button>
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelector("#back-btn").addEventListener("click",()=>this.onBack());const i=this.container.querySelector("#copy-summary-btn");i.addEventListener("click",()=>this.copyToClipboard(e.summary,i));const n=this.container.querySelector("#copy-data-btn");n.addEventListener("click",()=>{const s=this.formatFormData(e.formData);this.copyToClipboard(s,n)})}formatFormData(e){const t=[];return t.push("Patient Information:"),e.patientNameOrId&&t.push(`  Name/ID: ${e.patientNameOrId}`),t.push(`  Age: ${e.age||"N/A"}`),t.push(`  Sex/Gender: ${e.sexGender||"N/A"}`),t.push(""),t.push("Visit Information:"),e.chiefComplaint&&t.push(`  Chief Complaint: ${e.chiefComplaint}`),e.historyOfPresentIllness&&t.push(`  History of Present Illness: ${e.historyOfPresentIllness}`),e.pastMedicalHistory&&t.push(`  Past Medical History: ${e.pastMedicalHistory}`),e.pastSurgicalHistory&&t.push(`  Past Surgical History: ${e.pastSurgicalHistory}`),e.medications&&t.push(`  Medications: ${e.medications}`),e.allergies&&t.push(`  Allergies: ${e.allergies}`),e.familyHistory&&t.push(`  Family History: ${e.familyHistory}`),e.socialHistory&&t.push(`  Social History: ${e.socialHistory}`),e.reviewOfSystems&&t.push(`  Review of Systems: ${e.reviewOfSystems}`),e.vitals&&t.push(`  Vitals: ${e.vitals}`),e.labs&&t.push(`  Labs: ${e.labs}`),e.imaging&&t.push(`  Imaging: ${e.imaging}`),e.additionalCommentsFromMA&&t.push(`  Additional Comments from MA: ${e.additionalCommentsFromMA}`),e.additionalCommentsFromDoctor&&t.push(`  Additional Comments from Doctor: ${e.additionalCommentsFromDoctor}`),t.join(`
`)}async copyToClipboard(e,t){try{await navigator.clipboard.writeText(e);const i=t.textContent;t.textContent="Copied!",setTimeout(()=>{t.textContent=i},2e3)}catch{alert("Failed to copy to clipboard")}}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}}class P{constructor(e,t,i){a(this,"container");a(this,"onLoginSuccess");a(this,"onCancel");this.container=e,this.onLoginSuccess=t,this.onCancel=i}render(){this.container.innerHTML=`
      <div class="login-container">
        <div class="login-box">
          <h1>Admin Login</h1>
          <form id="admin-login-form">
            <div class="form-group">
              <label for="admin-key">Admin Key</label>
              <input type="password" id="admin-key" required autocomplete="off">
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Login</button>
              <button type="button" class="btn btn-secondary" id="cancel-btn">Cancel</button>
            </div>
            <div id="admin-login-error" class="error-message" style="display: none;"></div>
          </form>
        </div>
      </div>
    `,this.container.querySelector("#admin-login-form").addEventListener("submit",i=>{i.preventDefault(),this.handleLogin()}),this.container.querySelector("#cancel-btn").addEventListener("click",()=>this.onCancel())}async handleLogin(){const e=this.container.querySelector("#admin-key"),t=this.container.querySelector("#admin-login-error"),i=e.value.trim();if(!i){this.showError("Please enter an admin key");return}await y.adminLogin(i)?(t.style.display="none",this.onLoginSuccess()):this.showError("Invalid admin key")}showError(e){const t=this.container.querySelector("#admin-login-error");t.textContent=e,t.style.display="block"}}class C{constructor(e,t){a(this,"container");a(this,"onBack");this.container=e,this.onBack=t}async render(){const e=await c.getSettings();this.container.innerHTML=`
      <div class="admin-settings">
        <div class="page-header">
          <h1>Admin Settings</h1>
          <button id="back-btn" class="btn btn-secondary">Back to Form</button>
        </div>
        <form id="admin-settings-form">
          <div class="form-group">
            <label>Admin Key</label>
            <button type="button" class="btn btn-secondary" id="update-admin-key-btn">Update Admin Key</button>
            <div id="admin-key-section" class="key-update-section" style="display: none;">
              <div class="form-group" style="margin-top: 10px;">
                <label for="admin-key">New Admin Key</label>
                <input type="text" id="admin-key" autocomplete="off">
              </div>
              <div class="form-group">
                <label for="admin-key-confirm">Confirm Admin Key</label>
                <input type="text" id="admin-key-confirm" autocomplete="off">
              </div>
              <div class="form-actions">
                <button type="button" class="btn btn-primary btn-small" id="save-admin-key-btn">Save</button>
                <button type="button" class="btn btn-secondary btn-small" id="cancel-admin-key-btn">Cancel</button>
              </div>
              <div id="admin-key-message" class="success-message" style="display: none;"></div>
              <div id="admin-key-error" class="error-message" style="display: none;"></div>
            </div>
          </div>
          <div class="form-group">
            <label>OpenAI API Key</label>
            <button type="button" class="btn btn-secondary" id="update-openapi-key-btn">Update OpenAI API Key</button>
            <div id="openapi-key-section" class="key-update-section" style="display: none;">
              <div class="form-group" style="margin-top: 10px;">
                <label for="open-api-key">New OpenAI API Key</label>
                <input type="password" id="open-api-key" autocomplete="new-password">
              </div>
              <div class="form-group">
                <label for="open-api-key-confirm">Confirm OpenAI API Key</label>
                <input type="password" id="open-api-key-confirm" autocomplete="new-password">
              </div>
              <div class="form-actions">
                <button type="button" class="btn btn-primary btn-small" id="save-openapi-key-btn">Save</button>
                <button type="button" class="btn btn-secondary btn-small" id="cancel-openapi-key-btn">Cancel</button>
              </div>
              <div id="openapi-key-message" class="success-message" style="display: none;"></div>
              <div id="openapi-key-error" class="error-message" style="display: none;"></div>
            </div>
          </div>
          <div class="form-group">
            <label>Login Key</label>
            <button type="button" class="btn btn-secondary" id="update-login-key-btn">Update Login Key</button>
            <div id="login-key-section" class="key-update-section" style="display: none;">
              <div class="form-group" style="margin-top: 10px;">
                <label for="login-key">New Login Key</label>
                <input type="password" id="login-key" autocomplete="new-password">
              </div>
              <div class="form-group">
                <label for="login-key-confirm">Confirm Login Key</label>
                <input type="password" id="login-key-confirm" autocomplete="new-password">
              </div>
              <div class="form-actions">
                <button type="button" class="btn btn-primary btn-small" id="save-login-key-btn">Save</button>
                <button type="button" class="btn btn-secondary btn-small" id="cancel-login-key-btn">Cancel</button>
              </div>
              <div id="login-key-message" class="success-message" style="display: none;"></div>
              <div id="login-key-error" class="error-message" style="display: none;"></div>
            </div>
          </div>
          <div class="form-group">
            <label for="timeout">Timeout (minutes)</label>
            <input type="number" id="timeout" value="${e.timeout}" min="1" required>
          </div>
          <div class="form-group">
            <label for="system-prompt">System Prompt</label>
            <textarea id="system-prompt" rows="6" required>${this.escapeHtml(e.systemPrompt)}</textarea>
          </div>
          <div class="form-group">
            <label for="prompt">Prompt (use {formData} as placeholder)</label>
            <textarea id="prompt" rows="8" required>${this.escapeHtml(e.prompt)}</textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save Settings</button>
            <div id="save-message" class="success-message" style="display: none;"></div>
          </div>
        </form>
      </div>
    `,this.container.querySelector("#admin-settings-form").addEventListener("submit",f=>{f.preventDefault(),this.handleSave()}),this.container.querySelector("#update-admin-key-btn").addEventListener("click",()=>this.toggleKeySection("admin-key")),this.container.querySelector("#save-admin-key-btn").addEventListener("click",()=>this.handleUpdateAdminKey()),this.container.querySelector("#cancel-admin-key-btn").addEventListener("click",()=>this.toggleKeySection("admin-key",!1)),this.container.querySelector("#update-openapi-key-btn").addEventListener("click",()=>this.toggleKeySection("openapi-key")),this.container.querySelector("#save-openapi-key-btn").addEventListener("click",()=>this.handleUpdateOpenApiKey()),this.container.querySelector("#cancel-openapi-key-btn").addEventListener("click",()=>this.toggleKeySection("openapi-key",!1)),this.container.querySelector("#update-login-key-btn").addEventListener("click",()=>this.toggleKeySection("login-key")),this.container.querySelector("#save-login-key-btn").addEventListener("click",()=>this.handleUpdateLoginKey()),this.container.querySelector("#cancel-login-key-btn").addEventListener("click",()=>this.toggleKeySection("login-key",!1)),this.container.querySelector("#back-btn").addEventListener("click",async()=>{await y.adminLogout(),this.onBack()})}toggleKeySection(e,t){const i=this.container.querySelector(`#${e}-section`);if(t===void 0&&(t=i.style.display==="none"),i.style.display=t?"block":"none",!t){const n=this.container.querySelector(`#${e==="admin-key"?"admin-key":e==="openapi-key"?"open-api-key":"login-key"}`),s=this.container.querySelector(`#${e==="admin-key"?"admin-key-confirm":e==="openapi-key"?"open-api-key-confirm":"login-key-confirm"}`);n&&(n.value=""),s&&(s.value="");const r=this.container.querySelector(`#${e}-message`),o=this.container.querySelector(`#${e}-error`);r&&(r.style.display="none"),o&&(o.style.display="none")}}async handleUpdateAdminKey(){const e=this.container.querySelector("#admin-key").value.trim(),t=this.container.querySelector("#admin-key-confirm").value.trim(),i=this.container.querySelector("#admin-key-error"),n=this.container.querySelector("#admin-key-message");if(i.style.display="none",n.style.display="none",!e){i.textContent="Admin key is required",i.style.display="block";return}if(!t){i.textContent="Please confirm the admin key",i.style.display="block";return}if(e!==t){i.textContent="Admin keys do not match",i.style.display="block";return}await c.saveSettings({adminKey:e}),this.container.querySelector("#admin-key").value="",this.container.querySelector("#admin-key-confirm").value="",this.toggleKeySection("admin-key",!1),n.textContent="Admin key updated successfully!",n.style.display="block",setTimeout(()=>{n.style.display="none"},3e3)}async handleUpdateOpenApiKey(){const e=this.container.querySelector("#open-api-key").value.trim(),t=this.container.querySelector("#open-api-key-confirm").value.trim(),i=this.container.querySelector("#openapi-key-error"),n=this.container.querySelector("#openapi-key-message");if(i.style.display="none",n.style.display="none",!e){i.textContent="OpenAI API key is required",i.style.display="block";return}if(!t){i.textContent="Please confirm the API key",i.style.display="block";return}if(e!==t){i.textContent="API keys do not match",i.style.display="block";return}await c.saveSettings({openApiKey:e}),this.container.querySelector("#open-api-key").value="",this.container.querySelector("#open-api-key-confirm").value="",this.toggleKeySection("openapi-key",!1),n.textContent="OpenAI API key updated successfully!",n.style.display="block",setTimeout(()=>{n.style.display="none"},3e3)}async handleUpdateLoginKey(){const e=this.container.querySelector("#login-key").value.trim(),t=this.container.querySelector("#login-key-confirm").value.trim(),i=this.container.querySelector("#login-key-error"),n=this.container.querySelector("#login-key-message");if(i.style.display="none",n.style.display="none",!e){i.textContent="Login key is required",i.style.display="block";return}if(!t){i.textContent="Please confirm the login key",i.style.display="block";return}if(e!==t){i.textContent="Login keys do not match",i.style.display="block";return}await c.saveSettings({loginKey:e}),this.container.querySelector("#login-key").value="",this.container.querySelector("#login-key-confirm").value="",this.toggleKeySection("login-key",!1),n.textContent="Login key updated successfully!",n.style.display="block",setTimeout(()=>{n.style.display="none"},3e3)}async handleSave(){const e=parseInt(this.container.querySelector("#timeout").value,10),t=this.container.querySelector("#system-prompt").value.trim(),i=this.container.querySelector("#prompt").value.trim();if(!t||!i){alert("System prompt and prompt are required");return}if(isNaN(e)||e<1){alert("Timeout must be a positive number");return}await c.saveSettings({timeout:e,systemPrompt:t,prompt:i});const n=this.container.querySelector("#save-message");n.textContent="Settings saved successfully!",n.style.display="block",setTimeout(()=>{n.style.display="none"},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}}class b{constructor(){a(this,"container");a(this,"loginPage");a(this,"formPage");a(this,"resultsPage");a(this,"adminLoginPage");a(this,"adminSettingsPage");const e=document.getElementById("app");if(!e)throw new Error("App container not found");this.container=e,this.loginPage=new A(this.container,()=>this.showPage("form")),this.formPage=new x(this.container,t=>this.handleGenerate(t),()=>this.showPage("admin-login")),this.resultsPage=new I(this.container,()=>this.showPage("form")),this.adminLoginPage=new P(this.container,()=>this.showPage("admin-settings"),()=>this.showPage("form")),this.adminSettingsPage=new C(this.container,()=>this.showPage("form")),this.init()}async init(){await y.isLoggedIn()?this.showPage("form"):this.showPage("login")}async showPage(e){switch(e){case"login":this.loginPage.render();break;case"form":if(!await y.isLoggedIn()){this.showPage("login");return}this.formPage.render();break;case"results":break;case"admin-login":this.adminLoginPage.render();break;case"admin-settings":if(!await y.isAdminLoggedIn()){this.showPage("admin-login");return}await this.adminSettingsPage.render();break}}async handleGenerate(e){try{const i={summary:await L.generateSummary(e),formData:e};this.resultsPage.render(i)}catch(t){throw t}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>new b):new b;
