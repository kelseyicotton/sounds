import{i as g,c as m,_ as w}from"./preload-helper.VK1VLUGj.js";import"./index.UJNmFKXo.js";g(m.get().theme);const s=()=>{document.documentElement.style.setProperty("--app-height",`${window.innerHeight-1}px`)};typeof window<"u"&&(window.addEventListener("resize",s),s());function u(i={}){const{immediate:a=!1,onNeedRefresh:h,onOfflineReady:d,onRegistered:c,onRegisteredSW:r,onRegisterError:l}=i;let t,n;const f=async(o=!0)=>{await n};async function p(){if("serviceWorker"in navigator){const{Workbox:o}=await w(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));t=new o("/sw.js",{scope:"/",type:"classic"}),t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||d?.()}),t.register({immediate:a}).then(e=>{r?r("/sw.js",e):c?.(e)}).catch(e=>{l?.(e)})}}return n=p(),f}u({immediate:!0,onRegisteredSW(i){},onOfflineReady(){}});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}