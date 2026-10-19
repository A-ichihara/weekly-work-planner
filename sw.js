/* Weekly Planner push notification service worker. No cached HTML or assets: always use latest app version. */
self.addEventListener('push',event=>{
 let payload={title:'週間予定表',body:'開始予定のタスクがあります',url:'./'};
 try{if(event.data)payload={...payload,...event.data.json()}}catch{}
 const title=String(payload.title||'週間予定表').slice(0,100);
 const options={body:String(payload.body||'').slice(0,250),tag:String(payload.tag||'weekly-planner'),renotify:false,icon:'./icon-192.png',data:{url:payload.url||'./'}};
 event.waitUntil(self.registration.showNotification(title,options));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil((async()=>{
   const url=new URL(event.notification.data?.url||'./',self.registration.scope).href;
   const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
   for(const client of clients){if(client.url.startsWith(self.registration.scope)){await client.focus();return}}
   await self.clients.openWindow(url);
 })());
});
