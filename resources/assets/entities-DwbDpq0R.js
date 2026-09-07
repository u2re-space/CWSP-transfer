import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./core-BjY-v-ub.js";import{n as r,t as i}from"./jsox-DadRONI8.js";import{a,o}from"./Settings-kVSqy0Nt.js";import{n as s,t as c}from"./Runtime-CwAYhNFF.js";var l,u,d,f,p,m,ee,te,ne;function h(){return(h=e((()=>{s(),l={math:`input_text`,url:`input_image`,text:`input_text`,input_text:`input_text`,output_text:`input_text`,image_url:`input_image`,image:`input_image`,input_image:`input_image`,input_url:`input_image`,json:`input_text`,markdown:`input_text`,code:`input_text`,entity:`input_text`,structured:`input_text`,unknown:`input_text`,svg:`input_text`,xml:`input_text`},u=e=>{if(!e)return`input_text`;let t=e.toLowerCase();return t.includes(`image`)?`input_image`:t.includes(`json`)?`json`:t.includes(`javascript`)||t.includes(`typescript`)?`code`:t.includes(`markdown`)||t.includes(`md`)?`markdown`:t.includes(`url`)?`input_url`:t.includes(`text/html`)?`markdown`:(t.includes(`text/plain`),`input_text`)},d=e=>{if(!e||typeof e!=`string`)return`input_text`;let t=e.trim();if(t.startsWith(`{`)&&t.endsWith(`}`)||t.startsWith(`[`)&&t.endsWith(`]`))try{return JSON.parse(t),`json`}catch{}if(c(t))return`url`;if(t.includes(`<svg`)&&t.includes(`</svg>`))return`xml`;if(t.startsWith(`data:image/`)&&t.includes(`;base64,`)&&!t.includes(`
`))try{let e=new URL(t);if(e.protocol===`data:`&&e.pathname.startsWith(`image/`))return`input_image`}catch{}return/\$\$[\s\S]+\$\$|\$[^$]+\$|\\begin\{equation\}/.test(t)?`math`:/```[\s\S]+```|^(function|const|let|var|class|import|export)\s/m.test(t)?`code`:/^#{1,6}\s|^\*\*|^-\s|\[.+\]\(.+\)|^>\s/m.test(t)?`markdown`:`input_text`},f=e=>{let t=e?.context,n=l?.[e?.dataKind||`input_text`],r=p(t);switch(n){case`input_image`:return`${r}

Recognize data from image, also preferred to orient by fonts in image.

After recognition, do not include or remember image itself.

---

In (\`recognized_data\` key), can be written phone numbers, emails, URLs, dates, times, codes, etc. Additional formatting rules:

In recognized from image data (what you seen in image), do:
- If textual content, format as Markdown string (multiline).
- If phone number, format as as correct phone number (in normalized format).
  - Also, if phone numbers (for example starts with +7, format as 8), replace to correct regional code.
  - Remove brackets, parentheses, spaces or other symbols from phone number.
  - Trim spaces from phone number.
- If email, format as as correct email (in normalized format), and trim spaces from email.
- If URL, format as as correct URL (in normalized format), and unicode codes to human readable, and trim spaces from URL.
- If date, format as as correct date (in normalized format).
- If time, format as as correct time (in normalized format).
- If math (expression, equation, formula), format as $KaTeX$
- If table (or looks alike table), format as | table |
- If image, format as [$image$]($image$)
- If code, format as \`\`\`$code$\`\`\` (multiline) or \`$code$\` (single-line)
- If JSON, format as correct JSON string, and trim spaces from JSON string.
- If other, format as $text$.
- If seen alike list, format as list (in markdown format).

---

Some additional actions:
- Collect some special data tags and keywords (if has any).
- Also, can you provide in markdown pre-formatted free-form analyzed or recognized verbose data (in \`verbose_data\` key).

---

CRITICAL OUTPUT FORMAT: Return ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { or [ and end with } or ].

Expected output structure:
{
    "keywords_and_tags": ["string array"],
    "recognized_data": ["any array"],
    "verbose_data": "markdown string",
    "using_ready": true,
    "confidence": 0.95,
    "suggested_type": "document_type"
}
`;case`input_text`:return`${r}

Analyze text and extract specific or special data from it, also normalize data by those rules...

---

In (\`recognized_data\` key), can be written phone numbers, emails, URLs, dates, times, codes, etc. Additional formatting rules:

Normalize phone numbers, emails, URLs, dates, times, codes, etc for best efforts and by those rules.
- If phone number, format as as correct phone number (in normalized format).
  - If phone numbers (for example starts with +7, format as 8), replace to correct regional code.
  - Trim spaces from phone numbers, emails, URLs, dates, times, codes, etc.
  - Remove brackets, parentheses, spaces or other symbols from phone numbers.
- If email, format as as correct email (in normalized format), and trim spaces from email.
- If URL, format as as correct URL (in normalized format), and unicode codes to human readable, and trim spaces from URL.
- If date, format as as correct date (in normalized format).
- If time, format as as correct time (in normalized format).
- If math, format as $KaTeX$
- If table, format as | table |
- If image, format as [$image$]($image$)
- If code, format as \`\`\`$code$\`\`\` (multiline) or \`$code$\` (single-line)
- If JSON, format as correct JSON string, and trim spaces from JSON string.
- If other, format as $text$.
- If seen alike list, format as list (in markdown format).

---

Some additional actions:
- Collect some special data tags and keywords (if has any).
- Also, can you provide in markdown pre-formatted free-form analyzed or recognized verbose data (in \`verbose_data\` key).
- Detect entity type if applicable (task, event, person, place, service, item, etc.)

---

CRITICAL OUTPUT FORMAT: Return ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { or [ and end with } or ].

Expected output structure:
{
    "keywords_and_tags": ["string array"],
    "recognized_data": ["any array"],
    "verbose_data": "markdown string",
    "using_ready": true,
    "confidence": 0.95,
    "suggested_type": "entity_type",
    "suggested_modifications": []
}
`}return r||``},p=e=>{if(!e)return``;let t=[];if(e.operation&&t.push(`Operation: ${{create:`Create new data entries based on provided information.`,modify:`Modify existing data with provided changes while preserving structure.`,merge:`Intelligently merge new data with existing data, avoiding duplicates.`,analyze:`Analyze and extract structured information from the data.`,extract:`Extract specific data points matching the criteria.`}[e.operation]||e.operation}`),e.entityType&&t.push(`Target entity type: ${e.entityType}`),e.existingData&&t.push(`Existing data context provided - consider for merge/update operations.`),e.filters?.length){let n=e.filters.map(e=>`${e.field} ${e.operator} ${JSON.stringify(e.value)}`).join(`, `);t.push(`Apply filters: ${n}`)}return e.searchTerms?.length&&t.push(`Search terms: ${e.searchTerms.join(`, `)}`),e.priority&&t.push(`Priority level: ${e.priority}`),t.length?`Context:\n${t.join(`
`)}\n\n---\n`:``},m=e=>{if(!e?.length)return``;let t=e.map((e,t)=>{let n=e.conditions?.length?` when ${e.conditions.map(e=>`${e.field} ${e.operator} ${JSON.stringify(e.value)}`).join(` AND `)}`:``;switch(e.action){case`update`:return`${t+1}. UPDATE field "${e.target}" to ${JSON.stringify(e.value)}${n}`;case`delete`:return`${t+1}. DELETE field "${e.target}"${n}`;case`merge`:return`${t+1}. MERGE into "${e.target}" with ${JSON.stringify(e.value)}${n}`;case`append`:return`${t+1}. APPEND ${JSON.stringify(e.value)} to "${e.target}"${n}`;case`replace`:return`${t+1}. REPLACE "${e.target}" with ${JSON.stringify(e.value)}${n}`;case`transform`:return`${t+1}. TRANSFORM "${e.target}" using: ${e.transformFn}${n}`;default:return``}}).filter(Boolean);return t.length?`\nModification instructions:\n${t.join(`
`)}\n`:``},ee=`
You are a data modification assistant. Your task is to modify existing data based on the provided instructions.

Rules for modification:
1. Preserve the original data structure unless explicitly asked to change it.
2. Apply modifications in order, one by one.
3. Validate data types match the schema.
4. Return the complete modified entity, not just the changes.
5. If a modification cannot be applied, include it in the "errors" array with explanation.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "modified_entity": { /* complete modified entity */ },
    "changes_made": [ /* list of applied changes */ ],
    "errors": [ /* list of failed modifications with reasons */ ],
    "warnings": [ /* non-critical issues */ ]
}
`,te=`
You are a data selection and filtering assistant. Your task is to find and select data matching the criteria.

Selection rules:
1. Apply all filters in order (AND logic by default).
2. Rank results by relevance to search terms.
3. Include confidence scores for fuzzy matches.
4. Group similar results to avoid duplicates.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "selected_items": [ /* items matching criteria */ ],
    "total_matches": number,
    "filter_stats": { /* breakdown by filter */ },
    "suggestions": [ /* related items that might be relevant */ ]
}
`,ne=`
You are an entity merging assistant. Your task is to intelligently merge multiple entities or data sources.

Merge rules:
1. Prefer newer/more complete data when conflicts arise.
2. Combine arrays without duplicates.
3. Merge nested objects recursively.
4. Preserve IDs and relationships.
5. Track the source of each merged field.

CRITICAL: Output ONLY valid JSON. No markdown code blocks, no explanations, no prose.
Your response must start with { and end with }.

Expected output structure:
{
    "merged_entity": { /* result of merge */ },
    "conflicts_resolved": [ /* list of conflicts and how they were resolved */ ],
    "sources_used": [ /* which source contributed what */ ],
    "merge_confidence": number
}
`})))()}var g,_,v,y,b,re;function x(){return(x=e((()=>{r(),g=[/```json\s*\n?([\s\S]*?)\n?```/i,/```toon\s*\n?([\s\S]*?)\n?```/i,/```\s*\n?([\s\S]*?)\n?```/,/(\{[\s\S]*\})/,/(\[[\s\S]*\])/],_=e=>!e||typeof e!=`string`?``:e.replace(/^\uFEFF/,``).replace(/[\u200B-\u200D\uFEFF]/g,``).replace(/\r\n/g,`
`).replace(/\r/g,`
`).trim(),v=e=>{let t=e;return t=t.replace(/,(\s*[}\]])/g,`$1`),t=t.replace(/:\s*"([^"]*)\n([^"]*)"/g,(e,t,n)=>`: "${t}\\n${n}"`),t=t.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,``),t},y=e=>{if(!e)return{ok:!1,error:`Empty input`};try{return{ok:!0,data:i.parse(e)}}catch{}try{return{ok:!0,data:JSON.parse(e)}}catch{}try{let t=v(e);return{ok:!0,data:i.parse(t)}}catch{}try{let t=e.match(/^[^{[]*([{\[][\s\S]*[}\]])[^}\]]*$/);if(t?.[1])return{ok:!0,data:i.parse(t[1])}}catch{}return{ok:!1,error:`Failed to parse JSON with all strategies`}},b=e=>{if(e==null)return{ok:!1,error:`Response is null or undefined`};if(typeof e!=`string`)return typeof e==`object`?{ok:!0,data:e,source:`direct`}:{ok:!1,error:`Expected string, got ${typeof e}`};let t=_(e);if(!t)return{ok:!1,error:`Response is empty after cleaning`,raw:e};let n=y(t);if(n.ok)return{ok:!0,data:n.data,raw:e,source:`direct`};for(let n of g){let r=t.match(n);if(r?.[1]){let t=_(r[1]),n=y(t);if(n.ok)return{ok:!0,data:n.data,raw:e,source:`markdown_block`}}}let r=t.match(/(\{[\s\S]+\}|\[[\s\S]+\])/);if(r?.[1]){let t=v(r[1]),n=y(t);if(n.ok)return{ok:!0,data:n.data,raw:e,source:`recovered`}}return{ok:!1,error:`Could not extract valid JSON from response`,raw:e}},re=`
CRITICAL OUTPUT FORMAT REQUIREMENTS:

1. Your response MUST be ONLY valid JSON - no markdown, no explanations, no prose.
2. Do NOT wrap the JSON in code blocks (\`\`\`json or \`\`\`).
3. Do NOT include any text before or after the JSON object.
4. The response must start with { or [ and end with } or ].
5. All strings must be properly escaped (newlines as \\n, quotes as \\").
6. Use null for missing/unknown values, not undefined or empty strings.
7. Numbers should be unquoted. Booleans should be true/false (lowercase).
8. Arrays should not have trailing commas.
9. The JSON must be parseable by JSON.parse() without modification.

If you cannot provide the requested data, return: {"error": "description of the issue", "ok": false}
`})))()}function ie(e){return e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\n/g,`\\n`).replace(/\r/g,`\\r`).replace(/\t/g,`\\t`).replace(/[\u0000-\u001F]/g,e=>`\\u${e.charCodeAt(0).toString(16).padStart(4,`0`)}`)}function ae(e){return e===`true`||e===`false`||e===`null`}function oe(e,t,n){if(t===`__proto__`){Object.defineProperty(e,t,{value:n,enumerable:!0,writable:!0,configurable:!0});return}e[t]=n}function S(e){return e instanceof Ie}function C(e){if(e===null)return null;if(S(e))return e;if(typeof e==`object`&&e&&`toJSON`in e&&typeof e.toJSON==`function`){let t=e.toJSON();if(t!==e)return C(t)}if(typeof e==`string`)return se(e,`string value`),e;if(typeof e==`boolean`)return e;if(typeof e==`number`)return Object.is(e,-0)?0:Number.isFinite(e)?e:null;if(typeof e==`bigint`)return e>=-(2**53-1)&&e<=2**53-1?Number(e):e.toString();if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(C);if(e instanceof Set)return Array.from(e).map(C);if(e instanceof Map)return Object.fromEntries(Array.from(e,([e,t])=>[String(e),C(t)]));if(le(e)){let t={};for(let n in e)Object.hasOwn(e,n)&&(se(n,`object key`),oe(t,n,C(e[n])));return t}return null}function se(e,t){if(Le.test(e))for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<55296||r>57343)continue;let i=r<=56319,a=e.charCodeAt(n+1);if(i&&a>=56320&&a<=57343){n++;continue}throw TypeError(`Cannot encode ${t} containing an unpaired surrogate U+${r.toString(16).toUpperCase()} at index ${n}`)}}function ce(e){return e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function w(e){return ce(e)||S(e)}function T(e){return Array.isArray(e)}function E(e){return typeof e==`object`&&!!e&&!Array.isArray(e)&&!S(e)}function D(e){return Object.keys(e).length===0}function le(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function O(e){return e.length===0||e.every(e=>w(e))}function ue(e){return e.length===0||e.every(e=>T(e))}function de(e){return e.length===0||e.every(e=>E(e))}function fe(e){if(!Object.values(G).includes(e))throw TypeError(`Invalid delimiter ${JSON.stringify(e)}. Valid delimiters are: comma (,), tab (\\t), pipe (|)`)}function pe(e){return/^[A-Z_][\w.]*$/i.test(e)}function me(e,t=K){return!(!e||/^[ \t]|[ \t]$/.test(e)||ae(e)||he(e)||e.includes(`:`)||e.includes(`"`)||e.includes(`\\`)||/[[\]{}]/.test(e)||/[\u0000-\u001F]/.test(e)||e.includes(t)||e.startsWith(`-`)||e.startsWith(`#`))}function he(e){return Re.test(e)}function k(e,t){return S(e)?e.value:e===null?Pe:typeof e==`boolean`||typeof e==`number`?String(e):ge(e,t)}function ge(e,t=K){return me(e,t)?e:`"${ie(e)}"`}function A(e){return pe(e)?e:`"${ie(e)}"`}function j(e,t=K){return e.map(e=>k(e,t)).join(t)}function M(e,t){let n=t?.key,r=t?.fields,i=t?.delimiter??`,`,a=``;return n!=null&&(a+=A(n)),a+=`[${e}${t?.keyed?`:`:``}${i===K?``:i}]`,r&&(a+=`{${_e(r,i)}}`),a+=`:`,a}function _e(e,t){return e.map(e=>A(e.name)+(e.children?`{${_e(e.children,t)}}`:``)).join(t)}function N(e){if(e.length===0)return;let t=Object.keys(e[0]);if(t.length===0)return;for(let n of e){if(Object.keys(n).length!==t.length)return;for(let e of t)if(!Object.hasOwn(n,e))return}let n=[];for(let r of t){let t=ve(r,e.map(e=>e[r]));if(!t)return;n.push(t)}return n}function P(e){let t=Object.values(e);if(!(t.length<2)&&t.every(e=>E(e)&&!D(e)))return N(t)}function F(e,t){let n=[];return I(e,t,n),n}function ve(e,t){if(t.every(e=>w(e)))return{name:e};if(!t.every(e=>E(e)&&!D(e)))return;let n=N(t);if(n)return{name:e,children:n}}function I(e,t,n){for(let r of t){let t=e[r.name];r.children?I(t,r.children,n):n.push(t)}}function*ye(e,t,n){if(w(e)){let n=k(e,t.delimiter);n!==``&&(yield n);return}if(T(e))yield*Ce(void 0,e,n,t);else if(E(e)){let r=P(e);if(r){yield*xe(void 0,e,r,n,t);return}yield*L(e,n,t)}}function*L(e,t,n){for(let[r,i]of Object.entries(e))yield*be(r,i,t,n)}function*be(e,t,n,r){let i=A(e);if(w(t))yield B(n,`${i}: ${k(t,r.delimiter)}`,r.indentSize);else if(T(t))yield*Ce(e,t,n,r);else if(E(t)){let a=P(t);if(a){yield*xe(e,t,a,n,r);return}yield B(n,`${i}:`,r.indentSize),D(t)||(yield*L(t,n+1,r))}}function*xe(e,t,n,r,i){let a=Object.entries(t);yield B(r,M(a.length,{key:e,fields:n,delimiter:i.delimiter,keyed:!0}),i.indentSize),yield*Se(a,n,r+1,i)}function*Se(e,t,n,r){for(let[i,a]of e){let e=F(a,t);yield B(n,`${A(i)}: ${j(e,r.delimiter)}`,r.indentSize)}}function*Ce(e,t,n,r){if(t.length===0){yield B(n,e==null?`[]`:`${A(e)}: []`,r.indentSize);return}if(O(t)){yield B(n,R(t,r.delimiter,e),r.indentSize);return}if(ue(t)&&t.every(e=>O(e))){yield*we(e,t,n,r);return}if(de(t)){let i=N(t);i?yield*Te(e,t,i,n,r):yield*De(e,t,n,r);return}yield*De(e,t,n,r)}function*we(e,t,n,r){yield B(n,M(t.length,{key:e,delimiter:r.delimiter}),r.indentSize);for(let e of t)if(O(e)){let t=R(e,r.delimiter);yield V(n+1,t,r.indentSize)}}function R(e,t,n){let r=M(e.length,{key:n,delimiter:t}),i=j(e,t);return e.length===0?r:`${r} ${i}`}function*Te(e,t,n,r,i){yield B(r,M(t.length,{key:e,fields:n,delimiter:i.delimiter}),i.indentSize),yield*Ee(t,n,r+1,i)}function*Ee(e,t,n,r){for(let i of e)yield B(n,j(F(i,t),r.delimiter),r.indentSize)}function*De(e,t,n,r){yield B(n,M(t.length,{key:e,delimiter:r.delimiter}),r.indentSize);for(let e of t)yield*z(e,n+1,r)}function*Oe(e,t,n){if(D(e)){yield B(t,`-`,n.indentSize);return}let r=Object.entries(e),[i,a]=r[0],o=r.slice(1);if(T(a)&&de(a)){let e=N(a);if(e){yield V(t,M(a.length,{key:i,fields:e,delimiter:n.delimiter}),n.indentSize),yield*Ee(a,e,t+2,n),o.length>0&&(yield*L(Object.fromEntries(o),t+1,n));return}}if(E(a)){let e=P(a);if(e){let r=Object.entries(a);yield V(t,M(r.length,{key:i,fields:e,delimiter:n.delimiter,keyed:!0}),n.indentSize),yield*Se(r,e,t+2,n),o.length>0&&(yield*L(Object.fromEntries(o),t+1,n));return}}let s=A(i);if(w(a))yield V(t,`${s}: ${k(a,n.delimiter)}`,n.indentSize);else if(T(a)){if(a.length===0)yield V(t,`${s}: []`,n.indentSize);else if(O(a))yield V(t,`${s}${R(a,n.delimiter)}`,n.indentSize);else{yield V(t,`${s}${M(a.length,{delimiter:n.delimiter})}`,n.indentSize);for(let e of a)yield*z(e,t+2,n)}}else E(a)&&(yield V(t,`${s}:`,n.indentSize),D(a)||(yield*L(a,t+2,n)));o.length>0&&(yield*L(Object.fromEntries(o),t+1,n))}function*z(e,t,n){if(w(e))yield V(t,k(e,n.delimiter),n.indentSize);else if(T(e)){if(O(e))yield V(t,R(e,n.delimiter),n.indentSize);else{yield V(t,M(e.length,{delimiter:n.delimiter}),n.indentSize);for(let r of e)yield*z(r,t+1,n)}}else E(e)&&(yield*Oe(e,t,n))}function B(e,t,n){return` `.repeat(n*e)+t}function V(e,t,n){return B(e,`- `+t,n)}function ke(e,t){let n=t(``,e,[]);return n===void 0?U(e,t,[]):H(e,n,t,[])}function H(e,t,n,r){return S(t)&&!w(e)?U(e,n,r):U(C(t),n,r)}function U(e,t,n){return E(e)?Ae(e,t,n):T(e)?je(e,t,n):e}function Ae(e,t,n){let r={};for(let[i,a]of Object.entries(e)){let e=[...n,i],o=t(i,a,e);o!==void 0&&oe(r,i,H(a,o,t,e))}return r}function je(e,t,n){let r=[];for(let i=0;i<e.length;i++){let a=e[i],o=[...n,i],s=t(String(i),a,o);s!==void 0&&r.push(H(a,s,t,o))}return r}function W(e,t){return Array.from(Me(e,t)).join(`
`)}function Me(e,t){let n=C(e),r=Ne(t);return ye(r.replacer?ke(n,r.replacer):n,r,0)}function Ne(e){let t=e?.delimiter??K;return fe(t),{indentSize:e?.indentSize??e?.indent??2,delimiter:t,replacer:e?.replacer}}var Pe,G,K,Fe,Ie,Le,Re;function ze(){return(ze=e((()=>{Pe=`null`,G={comma:`,`,tab:`	`,pipe:`|`},K=G.comma,Fe=RegExp(`(?:^﻿?|\\n) *#`),Ie=class{constructor(e){if(Fe.test(e))throw TypeError(`Raw string must not contain a line starting with "#": ${JSON.stringify(e)}`);this.value=e}},Le=/[\uD800-\uDFFF]/,Re=/^[+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i})))()}function Be(e){let t=J(),n=t?.requestTimeout,r=typeof t?.maxRetries==`number`?Math.max(0,Math.floor(t.maxRetries)):2;return{timeout:Ke(n?.[e],Ue[e]),maxRetries:r}}var Ve,He,Ue,q,We,Ge,J,Ke,qe,Y,X,Je;function Z(){return(Z=e((()=>{ze(),h(),r(),x(),s(),Ve=()=>globalThis.File!==void 0,He=()=>globalThis.Blob!==void 0,Ue={low:6e4,medium:3e5,high:9e5},q=2e3,We=(e,t)=>{if(!t||typeof t!=`object`)return t;let n=String(t.type||``);return e===`assistant`?n===`refusal`||n===`output_text`?t:n===`input_text`||n===`text`||!n?{...t,type:`output_text`}:t:n===`output_text`||n===`text`?{...t,type:`input_text`}:t},Ge=e=>{if(!e||typeof e!=`object`||e.type&&e.type!==`message`)return e;let t=String(e.role||`user`).toLowerCase();return Array.isArray(e.content)?{...e,content:e.content.map(e=>We(t,e))}:e},J=()=>globalThis.runtimeSettings?.ai||{},Ke=(e,t)=>typeof e!=`number`||!Number.isFinite(e)||e<=0?t:e<1e3?e*1e3:e,qe=e=>{if(globalThis.Buffer!==void 0)return globalThis.Buffer.from(e).toString(`base64`);let t=1048576;if(e.length>t){let n=``;for(let r=0;r<e.length;r+=t){let i=e.slice(r,r+t),a=``;for(let e=0;e<i.length;e++)a+=String.fromCharCode(i[e]);n+=typeof btoa==`function`?btoa(a):``}return n}let n=``;for(let t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return typeof btoa==`function`?btoa(n):``},Y=async e=>{let t=Ve()?globalThis.File:void 0,n=He()?globalThis.Blob:void 0;if(n&&e?.dataSource instanceof n||t&&e?.dataSource instanceof t){let t=e?.dataSource?.size||0,n=10485760;if(t>n)return console.warn(`[GPT-Responses] File too large: ${t} bytes > ${n} bytes`),{type:`input_text`,text:`[File too large: ${(t/1024/1024).toFixed(1)}MB. Maximum allowed: ${(n/1024/1024).toFixed(1)}MB]`};if(l?.[e?.dataKind||`input_text`]===`input_image`||e?.dataSource?.type?.startsWith?.(`image/`))try{let t=`data:${e?.dataSource?.type};base64,`,n=await e?.dataSource?.arrayBuffer();if(!n)throw Error(`Failed to read file as ArrayBuffer`);let r=new Uint8Array(n);return{type:`input_image`,detail:`auto`,image_url:t+qe(r)}}catch(e){return console.error(`[GPT-Responses] Failed to process image file:`,e),{type:`input_text`,text:`[Failed to process image file: ${e}]`}}try{let t=await e?.dataSource?.text?.();if(t)return{type:`input_text`,text:t}}catch(e){return console.error(`[GPT-Responses] Failed to read text file:`,e),{type:`input_text`,text:`[Failed to read text file: ${e}]`}}}else if(typeof e?.dataSource==`string`){let t=e?.dataKind||d(e.dataSource);if(l?.[t]==`input_image`){let t=e?.dataSource?.trim?.()||``;if(t.startsWith(`data:image/`)&&t.includes(`;base64,`))try{let e=new URL(t);if(e.protocol===`data:`&&e.pathname.startsWith(`image/`))return{type:`input_image`,image_url:t,detail:`auto`}}catch{}else if(c(t))return{type:`input_image`,image_url:t,detail:`auto`}}return{type:`input_text`,text:e?.dataSource}}let r=e?.dataSource;try{r=typeof e?.dataSource==`object`?W(e?.dataSource):e?.dataSource}catch(e){console.warn(e)}return{type:l?.[e?.dataKind||`input_text`]||`text`,text:r}},X=class{apiKey;apiSecret;apiUrl=`https://api.proxyapi.ru/v1`;model=`gpt-5.6-luna`;responseId=null;pending=[];messages=[];tools=new Map;context=null;responseMap=new Map;constructor(e,t,n,r){this.apiKey=e||``,this.apiUrl=t||this.apiUrl,this.apiSecret=n||``,this.model=r||this.model}setContext(e){return this.context=e,this}async useMCP(e,t,n,r){return this.tools.set(t?.trim?.(),{type:`mcp`,server_label:e,server_url:t,headers:{authorization:`Bearer ${n}:${r}`},require_approval:`never`}),this.tools.get(t?.trim?.())}async convertPlainToInput(e,t=null,n=null){t??=u(e?.type)||`input_text`;let r={dataSource:e,dataKind:t,context:this.context},i=await Y(r);return{type:`message`,role:`user`,content:[{type:`input_text`,text:`What to do: `+f(r)},n?{type:`input_text`,text:`Additional request data: `+n}:null,{type:`input_text`,text:`
 === BEGIN:ATTACHED_DATA === 
`},{...i},{type:`input_text`,text:`
 === END:ATTACHED_DATA === 
`}].filter?.(e=>e!==null)}}async attachToRequest(e,t=null,n=null){return this.pending.push(await this.convertPlainToInput(e,t??=u(e?.type)||`input_text`)),n&&this.pending.push(await this.askToDoAction(n)),this.pending[this.pending.length-1]}async attachExistingData(e,t){return this.context={...this.context,existingData:e,entityType:t||this.context?.entityType},await this.giveForRequest(`existing_data: \`${W(e)}\`\n`),this}async giveForRequest(e){if(typeof e!=`string`)try{let t=u(e?.type)||`input_text`,n=await Y({dataSource:e,dataKind:t,context:this.context});return this?.pending?.push?.({type:`message`,role:`user`,content:[{type:`input_text`,text:`Additional data for request:`},{type:`input_text`,text:`
 === BEGIN:ATTACHED_DATA === 
`},{...n},{type:`input_text`,text:`
 === END:ATTACHED_DATA === 
`}]}),this?.pending?.[this?.pending?.length-1]}catch{e=String(e)}return this?.pending?.push?.({type:`message`,role:`user`,content:[{type:`input_text`,text:`Additional data for request:`},{type:`input_text`,text:String(e)}]}),this?.pending?.[this?.pending?.length-1]}async askToDoAction(e){return this?.pending?.push?.({type:`message`,role:`user`,content:[{type:`input_text`,text:e}]}),this?.pending?.[this?.pending?.length-1]}beginFromResponseId(e=null){return this.responseId=this.responseId=e||this.responseId,this}async sendRequest(e=`low`,t=`low`,n=null,r={}){e??=`low`,t??=`low`;let a=new Map;for(let e of this.pending)if(e)try{let t=typeof e==`object`?i.stringify(e):String(e);a.has(t)||a.set(t,e)}catch{a.set(Math.random().toString(),e)}let o=Array.from(a.values()).map(Ge),s=r?.responseFormat===`json`?re:void 0,c=J(),l=typeof c?.maxOutputTokens==`number`&&Number.isFinite(c.maxOutputTokens)?Math.max(1,Math.floor(c.maxOutputTokens)):void 0,u={model:this.model,tools:Array.from(this?.tools?.values?.()||[])?.filter?.(e=>!!e),input:o,reasoning:{effort:e},text:{verbosity:t},max_output_tokens:r?.maxTokens||l||4e5,previous_response_id:this.responseId=n||this?.responseId,instructions:s};(c?.contextTruncation===`auto`||c?.contextTruncation===`disabled`)&&(u.truncation=c.contextTruncation),(c?.promptCacheRetention===`in-memory`||c?.promptCacheRetention===`24h`)&&(u.prompt_cache_retention=c.promptCacheRetention),typeof c?.maxToolCalls==`number`&&Number.isFinite(c.maxToolCalls)&&(u.max_tool_calls=Math.max(1,Math.floor(c.maxToolCalls))),typeof c?.parallelToolCalls==`boolean`&&(u.parallel_tool_calls=c.parallelToolCalls);let{timeout:d,maxRetries:f}=Be(e);console.log(`[GPT] Making request to:`,`${this?.apiUrl}/responses`),console.log(`[GPT] API key present:`,!!this?.apiKey),console.log(`[GPT] Request timeout:`,`${d}ms (${d/1e3}s) (${e} effort)`),console.log(`[GPT] Max retries:`,f),console.log(`[GPT] Request body size:`,JSON.stringify(u).length,`characters`),console.log(`[GPT] Request input count:`,o.length,`items`);let p=null;for(let e=0;e<=f;e++){if(r.signal?.aborted)throw new DOMException(`Cancelled`,`AbortError`);e>0&&(console.log(`[GPT] Retry attempt ${e}/${f} after ${q}ms delay`),await new Promise((e,t)=>{let n=setTimeout(e,q);r.signal?.addEventListener(`abort`,()=>{clearTimeout(n),t(new DOMException(`Cancelled`,`AbortError`))},{once:!0})}));let t=new AbortController,n=()=>t.abort(r.signal?.reason||`cancelled`);r.signal?.addEventListener(`abort`,n,{once:!0});let i=setTimeout(()=>{console.warn(`[GPT] Request timeout after ${d}ms (attempt ${e+1}) - aborting request`),t.abort(`timeout`)},d);try{console.log(`[GPT] Sending request (attempt ${e+1})...`);let n=await fetch(`${this?.apiUrl}/responses`,{method:`POST`,priority:`auto`,signal:t.signal,headers:{"Content-Type":`application/json`,...this?.apiKey?{Authorization:`Bearer ${this?.apiKey}`}:{}},body:JSON.stringify(u)});if(console.log(`[GPT] Request sent successfully (attempt ${e+1})`),console.log(`[GPT] Response status:`,n.status,`(attempt ${e+1})`),n.status!==200){let e=await n?.json?.()?.catch?.(e=>(console.error(`[GPT] Failed to parse error response:`,e),null)),t=e?.error?.message||e?.message||`HTTP ${n.status}`;if(p=Error(`API error (${n.status}): ${t}`),console.error(`[GPT] API error:`,t),n.status>=400&&n.status<500)throw p;continue}return await this.processSuccessfulResponse(n)}catch(t){if(p=t instanceof Error?t:Error(String(t)),console.error(`[GPT] Request failed (attempt ${e+1}):`,p.message),r.signal?.aborted||p.name===`AbortError`||/API error \(4\d{2}\)/.test(p.message))break}finally{clearTimeout(i),r.signal?.removeEventListener(`abort`,n)}}let m=p?p.message:`Unknown error after all retries`;throw console.error(`[GPT] All retry attempts failed:`,m),Error(`Request failed after ${f+1} attempts: ${m}`)}async processSuccessfulResponse(e){let t=await e?.json?.()?.catch?.(e=>(console.warn(`[GPT] Failed to parse successful response:`,e),null));if(!t)return null;console.log(`[GPT] Raw API response structure:`,{type:typeof t,isArray:Array.isArray(t),keys:Object.keys(t).slice(0,10),keysLength:Object.keys(t).length,sample:JSON.stringify(t).substring(0,300)}),this.responseMap.set(this.responseId=t?.id||t?.response_id||this.responseId,t),this?.messages?.push?.(...this?.pending||[]),this?.pending?.splice?.(0,this?.pending?.length),this.messages.push(...t?.output||[]);let n=e=>{try{if(!e)return null;if(typeof e==`string`){if(e.startsWith(`"`)&&e.endsWith(`"`)&&e.includes(`\\n`))try{let t=JSON.parse(e);if(console.log(`[GPT] Parsed JSON string response:`,typeof t,t?.substring?.(0,100)||`object`),typeof t==`string`)return t;if(typeof t==`object`)return n(t)}catch{console.log(`[GPT] Failed to parse JSON string, treating as plain text`)}return e}if(Array.isArray(e)){console.log(`[GPT] Response is array with`,e.length,`items`),console.log(`[GPT] First few array items:`,e.slice(0,3).map(e=>({type:typeof e,keys:typeof e==`object`?Object.keys(e||{}):`N/A`,sample:typeof e==`string`?e.substring(0,50):JSON.stringify(e).substring(0,100)})));let t=[];for(let n of e)typeof n==`string`?t.push(n):n?.text?t.push(n.text):n?.content?t.push(n.content):n?.message?.content&&t.push(n.message.content);if(t.length)return t.join(`

`)}if(typeof e==`object`&&Object.keys(e).every(e=>!isNaN(Number(e)))){console.log(`[GPT] Response looks like array with`,Object.keys(e).length,`numeric keys`);let t=[];for(let n of Object.keys(e).sort((e,t)=>Number(e)-Number(t))){let r=e[n];typeof r==`string`?t.push(r):r?.text?t.push(r.text):r?.content?t.push(r.content):r?.message?.content&&t.push(r.message.content)}if(t.length)return t.join(`

`)}if(e.output_text&&Array.isArray(e.output_text)&&e.output_text.length)return e.output_text.join(`

`);let t=e.output||e.choices||[],r=[];for(let e of t){let t=e?.content||e?.message?.content||[];if(t){if(typeof t==`string`)r.push(t);else if(Array.isArray(t))for(let e of t)typeof e?.text==`string`?r.push(e.text):e?.text?.value&&r.push(e.text.value)}}if(r.length)return r.join(`

`)}catch(e){console.warn(`[GPT] Error extracting text:`,e)}return null},r=n(t);if(console.log(`[GPT] Extracted text result:`,r?`"${r.substring(0,100)}..."`:`null`),r!=null)return JSON.stringify({choices:[{message:{content:r}}],usage:t?.usage||{},id:this.responseId,object:`chat.completion`});try{let e=i.parse(t?.output??t);if(e)return JSON.stringify({choices:[{message:{content:typeof e==`string`?e:JSON.stringify(e)}}],usage:t?.usage||{},id:this.responseId,object:`chat.completion`})}catch{}return JSON.stringify({choices:[{message:{content:`No text content available`}}],usage:{},id:this.responseId,object:`chat.completion`})}async modifyExistingData(e,t,n=[]){try{this.setContext({operation:`modify`,existingData:e}),await this.giveForRequest(ee),await this.giveForRequest(`existing_entity: \`${W(e)}\`\n`),n.length&&await this.giveForRequest(m(n)),await this.askToDoAction(t);let r=await this.sendRequest(`high`,`medium`,null,{responseFormat:`json`,temperature:.2}),i=b(r);return i.ok?{ok:!0,data:i.data?.modified_entity||i.data,responseId:this.responseId}:(console.warn(`JSON extraction failed:`,i.error,`Raw:`,i.raw),{ok:!1,error:i.error||`Failed to parse AI response`})}catch(e){return console.error(`Error in modifyExistingData:`,e),{ok:!1,error:String(e)}}}async selectAndFilterData(e,t,n=[]){try{this.setContext({operation:`extract`,filters:t,searchTerms:n}),await this.giveForRequest(te),await this.giveForRequest(`data_set: \`${W(e)}\`\n`);let r=t.map(e=>`Filter: ${e.field} ${e.operator} ${JSON.stringify(e.value)}`).join(`
`);await this.askToDoAction(`
Select items from the provided data set matching these criteria:
${r}
${n.length?`\nSearch terms: ${n.join(`, `)}`:``}

Return matching items with relevance scores.
            `);let i=await this.sendRequest(`medium`,`low`,null,{responseFormat:`json`,temperature:.1}),a=b(i);return a.ok?{ok:!0,data:a.data?.selected_items||a.data,responseId:this.responseId}:(console.warn(`JSON extraction failed:`,a.error,`Raw:`,a.raw),{ok:!1,error:a.error||`Failed to parse AI response`})}catch(e){return console.error(`Error in selectAndFilterData:`,e),{ok:!1,error:String(e)}}}async mergeEntities(e,t,n=`prefer_primary`){try{this.setContext({operation:`merge`,existingData:e}),await this.giveForRequest(ne),await this.giveForRequest(`primary_entity: \`${W(e)}\`\n`),await this.giveForRequest(`secondary_data: \`${W(t)}\`\n`),await this.askToDoAction(`
Merge the secondary data into the primary entity using "${n}" strategy:
- prefer_primary: Keep primary values when conflicts occur
- prefer_secondary: Use secondary values when conflicts occur
- prefer_newer: Compare timestamps and use newer values
- merge_all: Combine all unique values (arrays concatenated, objects deeply merged)

Return the merged entity with conflict resolution details.
            `);let r=await this.sendRequest(`high`,`medium`,null,{responseFormat:`json`,temperature:.2}),i=b(r);return i.ok?{ok:!0,data:i.data?.merged_entity||i.data,responseId:this.responseId}:(console.warn(`JSON extraction failed:`,i.error,`Raw:`,i.raw),{ok:!1,error:i.error||`Failed to parse AI response`})}catch(e){return console.error(`Error in mergeEntities:`,e),{ok:!1,error:String(e)}}}async searchSimilar(e,t,n=.7){try{this.setContext({operation:`analyze`}),await this.giveForRequest(`reference_entity: \`${W(e)}\`\n`),await this.giveForRequest(`candidate_set: \`${W(t)}\`\n`),await this.askToDoAction(`
Find items in the candidate set that are similar to the reference entity.
Consider semantic similarity, not just exact matches.
Compare:
- Names/titles (fuzzy match)
- Types/kinds
- Properties overlap
- Relationships

Return items with similarity score >= ${n}

Expected output structure:
{
    "similar_items": [
        { "item": {...}, "similarity": 0.85, "match_reasons": [...] }
    ],
    "potential_duplicates": [...],
    "related_but_different": [...]
}
            `);let r=await this.sendRequest(`medium`,`medium`,null,{responseFormat:`json`,temperature:.3}),i=b(r);return i.ok?{ok:!0,data:i.data?.similar_items||[],responseId:this.responseId}:(console.warn(`JSON extraction failed:`,i.error,`Raw:`,i.raw),{ok:!1,error:i.error||`Failed to parse AI response`})}catch(e){return console.error(`Error in searchSimilar:`,e),{ok:!1,error:String(e)}}}async batchProcess(e,t,n=10){let r=[],i=[];for(let a=0;a<e.length;a+=n){let o=e.slice(a,a+n);await this.giveForRequest(`batch_items: \`${W(o)}\`\n`),await this.askToDoAction(`
Process this batch of ${o.length} items:
${t}

Return processed items in same order.
Expected output: { "processed": [...], "failed": [...] }
            `);let s=await this.sendRequest(`medium`,`low`,null,{responseFormat:`json`});if(s){let e=b(s);e.ok&&e.data?(r.push(...e.data?.processed||[]),e.data?.failed?.length&&i.push(...e.data.failed.map(e=>e?.error||`Unknown error`))):console.warn(`Batch parsing failed:`,e.error)}}return{ok:i.length===0,data:r,error:i.length?i.join(`; `):void 0,responseId:this.responseId}}clearPending(){return this.pending.splice(0,this.pending.length),this}getResponseId(){return this?.responseId}getMessages(){return this?.messages}getPending(){return this?.pending}getContext(){return this?.context}getResponse(e){return this?.responseMap?.get?.(e)}},Je=(e,t,n)=>new X(e,t||`https://api.proxyapi.ru/v1`,``,n||`gpt-5.6-luna`)})))()}function Ye(e){if(!e)return e;let t=e.trim().match(/^```(?:katex|md|markdown|html|xml|json|text)?\n([\s\S]*?)\n```$/);if(t){let n=t[1].trim(),r=n.split(`
`);return r.length===1||n.includes(`<math`)||n.includes(`<span class="katex`)||n.includes(`<content`)||n.startsWith(`<`)&&n.endsWith(`>`)||/^\s*<[^>]+>/.test(n)?n:r.length>3||r.some(e=>e.match(/^\s{4,}/)||e.includes(`function`)||e.includes(`const `)||e.includes(`let `))?e:n}return e}function Xe(e){return e instanceof File&&e.type.startsWith(`image/`)||e instanceof Blob&&e.type?.startsWith(`image/`)||typeof e==`string`&&(e.startsWith(`data:image/`)||e.startsWith(`http`)||e.startsWith(`https://`))}function Ze(e){return[`json`,`xml`,`yaml`].includes(e)?`json`:`text`}var Qe,$e,et,Q;function $(){return($=e((()=>{a(),Z(),Qe=e=>{if(!Array.isArray(e))return[];let t=[];for(let n of e){let e=n;if(!e||typeof e!=`object`)continue;let r=String(e?.origin||``).trim(),i=String(e?.clientKey||``).trim(),a=String(e?.secretKey||``).trim();if(!r||!i||!a)continue;let o=String(e?.serverLabel||e?.label||r).trim()||r;t.push({id:String(e?.id||r),serverLabel:o,origin:r,clientKey:i,secretKey:a})}return t},$e=async(e,t)=>{let n=Qe(t);if(n.length)for(let t of n)await e.useMCP(t.serverLabel,t.origin,t.clientKey,t.secretKey)},et=(e,t)=>{let n=String(e||``).trim(),r=String(t||``).trim();return n===`custom`?r||`gpt-5.6-luna`:n||r||`gpt-5.6-luna`},Q=async e=>{let t=await o(),n=e?.apiKey||t?.ai?.apiKey;if(!n)return null;let r=e?.baseUrl||t?.ai?.baseUrl||`https://api.proxyapi.ru/v1`,i=et(e?.model||t?.ai?.model,e?.customModel||t?.ai?.customModel),a=Je(n,r,i);return await $e(a,e?.mcp??t?.ai?.mcp),a}})))()}var tt;function nt(){return(nt=e((()=>{h(),x(),a(),$(),t(),tt=async(e,t)=>{try{let r=await Q(t);if(!r)return{ok:!1,error:`No GPT instance`};let i=typeof e==`string`?d(e):(e instanceof File||e instanceof Blob)&&e.type.startsWith(`image/`)?`input_image`:`input_text`;Array.isArray(e)&&(e?.[0]?.type===`message`||e?.[0]?.role)?await r?.getPending?.()?.push?.(...e):await r?.attachToRequest?.(e,i),await r.askToDoAction(n);let a=await r.sendRequest(`high`,`medium`,null,{responseFormat:`json`,temperature:.2});if(!a)return{ok:!1,error:`No response`};let o=b(a);return o.ok?{ok:!0,data:o.data?.entities||[],responseId:r.getResponseId()}:{ok:!1,error:o.error||`Failed to parse AI response`}}catch(e){return{ok:!1,error:String(e)}}}})))()}export{$ as a,Z as c,Ze as i,b as l,nt as n,Xe as o,Q as r,Ye as s,tt as t,x as u};