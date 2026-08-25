(() => {
  const inviteUrl = 'https://watcha.cn/r/ebB2AR';
  const rows = [['01','lin','林万旋','42'],['02','kestrel','Kestrel','36'],['03','ajie','阿杰','31'],['04','watcha','小猹同学','28'],['05','raccoon','Raccoon','24'],['06','anran','安然','22'],['07','jane','Jane Chen','19'],['08','shanye','山野','18'],['09','monica','Monica Luo','17'],['10','wang','汪一帆','15']];
  let invites = 0;
  const branch = document.createElement('section');
  branch.className = 'fdex-branch';
  branch.setAttribute('aria-label','课程支线：邀请好友共学');
  branch.innerHTML = `
    <div class="fdex-kicker">课程支线</div>
    <h3 class="fdex-title">邀请好友共学</h3>
    <div class="fdex-card fdex-track-card"><div class="fdex-head"><div class="fdex-track-copy"><h4>呼朋引猹</h4><p class="fdex-track-desc">邀请好友报名共学营，让集体学习的氛围助力彼此坚持与成长。</p></div><div class="fdex-track-actions"><div class="fdex-invite fdex-invite-compact"><input class="fdex-link" aria-label="专属邀请链接" value="${inviteUrl}" readonly><button class="fdex-btn secondary" data-copy>复制链接</button><button class="fdex-btn" data-poster>生成海报</button></div><div class="fdex-track-subactions"><button class="fdex-text-btn" data-rules>活动规则</button><button class="fdex-text-btn" data-simulate>演示邀请 +1</button></div></div></div><div class="fdex-steps">${[[3,50],[10,100],[30,300]].map(([n,reward])=>`<div class="fdex-step" data-step="${n}"><div class="fdex-node"><span><img src="./assets/guazi.png" alt="瓜子">${reward}</span></div><b>邀请 ${n} 位新猹友</b><span class="fdex-pill">未解锁</span></div>`).join('')}</div></div>
    <div class="fdex-shelf"><div class="fdex-shelf-title"><img src="./assets/guazi.png" alt="瓜子"><div><b>瓜棚好物</b><span>用瓜子兑换观猹限定实物</span></div></div><div class="fdex-shelf-window"><div class="fdex-shelf-track"><div class="fdex-shelf-item"><img src="./assets/gua-pins.png" alt="观猹徽章"><span><b>观猹角色徽章</b><small>四款角色随机兑换</small></span></div><div class="fdex-shelf-item"><img src="./assets/gua-backpack.png" alt="观猹背包"><span><b>观猹限定背包</b><small>多隔层日常通勤款</small></span></div><div class="fdex-shelf-item"><img src="./assets/gua-sweatshirt.png" alt="观猹卫衣"><span><b>观猹角色卫衣</b><small>柔软宽松版型</small></span></div><div class="fdex-shelf-item"><img src="./assets/course-badge.png" alt="优质产品兑换码"><span><b>优质产品兑换码</b><small>共学达标即可解锁</small></span></div><div class="fdex-shelf-item"><img src="./assets/course-card.png" alt="TokenDance 白金卡"><span><b>TokenDance 白金卡</b><small>AI 创作权益支持</small></span></div><div class="fdex-shelf-item"><img src="./assets/mac-mini-official.jpg" alt="Mac mini"><span><b>Mac mini</b><small>排行榜冲榜大奖</small></span></div><div class="fdex-shelf-item"><img src="./assets/guazi.png" alt="瓜子礼包"><span><b>瓜子奖励礼包</b><small>达标自动发放到账</small></span></div><div class="fdex-shelf-item"><img src="./assets/watcha-trophy-bronze.png" alt="精选数码好礼"><span><b>精选数码好礼</b><small>键盘、耳机等福利</small></span></div></div></div><button class="fdex-shelf-btn" data-shop>去瓜棚 →</button></div>
    <div class="fdex-card fdex-rank-card"><div class="fdex-head"><div><h4>一呼百应</h4><p>用影响力说话，邀请更多好友加入共学，赢取排行榜好礼。</p></div></div><div class="fdex-prizes"><div class="fdex-subhead"><b>排行榜奖品</b></div><div class="fdex-podium-wrap"><div class="fdex-podium">${[rows[1],rows[0],rows[2]].map(([r,a,n,c],index)=>{const top=index===0?2:index===1?1:3;const prize=top===1?['Mac Mini 一台','¥5,999']:top===2?['bibo 机器人','¥1,500']:['飞书录音豆一台','¥500'];return `<article class="fdex-podium-card top${top}"><small>TOP ${top}</small><strong class="fdex-podium-prize">${prize[0]}</strong><em>${prize[1]}</em><img class="fdex-podium-avatar" src="./assets/avatars/${a}.svg" alt="${n}的头像"><span class="fdex-podium-user"><b>${n}</b><i>${c} 人</i></span></article>`}).join('')}</div></div></div><div class="fdex-board">${rows.slice(3).map(([r,a,n,c])=>`<div class="fdex-row"><span class="fdex-rank">${r}</span><span class="fdex-person"><img class="fdex-avatar" src="./assets/avatars/${a}.svg" alt="${n}的头像"><b>${n}</b></span><span class="fdex-count">${c} 人</span></div>`).join('')}<div class="fdex-follow-prize"><b>TOP 4–10</b><span>TokenDance 白金卡</span></div><div class="fdex-me" data-me hidden><span>你的排名：<strong data-rank></strong></span><span>拉新 <strong data-my-invites>0</strong> 人</span></div></div><details class="fdex-rules" data-rules-box><summary>活动规则说明（含两种拉新形式）</summary><div class="fdex-rule-grid"><p><b>呼朋引猹</b>好友通过你的专属链接完成活动报名，即为有效邀请。阶梯奖励累计解锁，瓜子将在达标后自动发放。</p><p><b>一呼百应</b>排行榜按有效邀请人数实时更新；每位用户仅计入一位邀请人，最终名次及获奖资格以活动结束后的平台核验结果为准。</p></div></details></div>`;
  const gainsHeading = [...document.querySelectorAll('h3')].find(el => el.textContent.trim() === '学完能获得');
  const gainsList = gainsHeading?.nextElementSibling;
  if (gainsList?.tagName === 'UL') gainsList.remove();
  gainsHeading?.remove();
  const ta = [...document.querySelectorAll('p')].find(el => el.textContent.trim() === '也在招募助教');
  const anchor = ta?.closest('.mt-6') || ta?.parentElement;
  if (!anchor?.parentElement) {
    window.__fdexMountAttempts = (window.__fdexMountAttempts || 0) + 1;
    if (window.__fdexMountAttempts < 20) {
      setTimeout(() => {
        const retryScript = document.createElement('script');
        retryScript.src = `./fdemac-extension.js?retry=${window.__fdexMountAttempts}`;
        document.body.appendChild(retryScript);
      }, 500);
    }
    return;
  }
  anchor.parentElement.insertBefore(branch, anchor);

  const modal = document.createElement('div'); modal.className='fdex-modal'; modal.setAttribute('role','dialog'); modal.setAttribute('aria-label','专属邀请海报');
  modal.innerHTML=`<div class="fdex-modal-card fdex-poster-modal"><button class="fdex-close" aria-label="关闭">×</button><div class="fdex-poster">
    <header class="fdex-poster-brand"><span class="fdex-poster-logo">Watcha<sup>°</sup></span><span>观猹 AI 漫剧共学营</span></header>
    <section class="fdex-poster-hero"><div><small>我在「观猹」学 AI</small><h3>邀请好友一起共学<br><em>边学边赢好礼</em></h3><p>完成作品、解锁课程，还有机会赢取 Mac mini</p></div><img src="./assets/watcha-trophy.png" alt="观猹奖杯"></section>
    <section class="fdex-poster-benefits">
      <article><b>大厂讲师带队</b><span>跟随一线实战讲师，掌握 AI 漫剧完整创作方法</span></article>
      <article><b>边学边做作品</b><span>从创意、分镜到生成制作，完成自己的 AI 漫剧作品</span></article>
      <article><b>共学还能赢好礼</b><span>邀请好友共同学习，解锁录播课程、瓜子和 Mac mini 等福利</span></article>
    </section>
    <section class="fdex-poster-inviter"><div class="fdex-poster-person"><img src="./assets/avatars/raccoon.svg" alt="Raccoon 的头像"><div><small>你的共学伙伴</small><b>Raccoon 同学，学习 AI 中</b><span>邀请你一起加入观猹 AI 漫剧共学营</span></div></div><div class="fdex-poster-qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(inviteUrl)}" alt="专属邀请二维码"><b>扫描我的专属二维码报名</b><span>成功加入后，我们双方均可解锁一门录播课程</span></div></section>
  </div><div class="fdex-modal-actions"><button class="fdex-btn secondary" data-copy-text>复制配套文案</button><button class="fdex-btn" data-save>保存海报</button></div></div>`;
  document.body.appendChild(modal);
  const toast=document.createElement('div');toast.className='fdex-toast';toast.setAttribute('role','status');document.body.appendChild(toast);
  const say=t=>{toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1600)};
  const update=()=>{document.querySelectorAll('[data-invites]').forEach(el=>el.textContent=invites);const me=branch.querySelector('[data-me]');me.hidden=invites===0;if(invites>0){branch.querySelector('[data-rank]').textContent=`第 ${Math.max(1,25-invites)} 名`;branch.querySelector('[data-my-invites]').textContent=invites}branch.querySelectorAll('[data-step]').forEach(el=>{const done=invites>=+el.dataset.step;el.classList.toggle('done',done);el.querySelector('.fdex-pill').textContent=done?'已解锁':`还差 ${+el.dataset.step-invites} 人`})};
  branch.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(inviteUrl);say('邀请链接已复制')}catch{say('请手动复制邀请链接')}};
  branch.querySelector('[data-poster]').onclick=()=>modal.classList.add('open');modal.querySelector('.fdex-close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
  branch.querySelector('[data-simulate]').onclick=()=>{invites=Math.min(invites+1,30);update();say(`当前演示：已邀请 ${invites} 人`)};
  branch.querySelector('[data-rules]').onclick=()=>{branch.querySelector('[data-rules-box]').open=true;window.scrollTo({top:branch.querySelector('[data-rules-box]').getBoundingClientRect().top+window.scrollY-100,behavior:'smooth'})};
  branch.querySelectorAll('[data-shop]').forEach(el=>el.onclick=()=>window.open('https://watcha.cn/quest','_blank'));
  const shelfTrack=branch.querySelector('.fdex-shelf-track');shelfTrack.innerHTML+=shelfTrack.innerHTML;
  modal.querySelector('[data-copy-text]').onclick=async()=>{const text=`我在「观猹」学 AI！邀请你一起加入观猹 AI 漫剧共学营，跟随一线实战讲师边学边做作品，还能解锁录播课程、瓜子和 Mac mini 等福利：${inviteUrl}`;try{await navigator.clipboard.writeText(text);say('配套文案已复制')}catch{say('复制失败，请稍后重试')}};modal.querySelector('[data-save]').onclick=()=>say('原型预览：正式版将生成高清海报');
  update();
})();
