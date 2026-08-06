const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity=.8});
const contactForm=document.querySelector('.contact-form');
const formStatus=document.querySelector('.form-status');
contactForm?.addEventListener('submit',async event=>{
  event.preventDefault();
  const submitButton=contactForm.querySelector('button[type="submit"]');
  const originalLabel=submitButton.innerHTML;
  submitButton.disabled=true;
  submitButton.textContent='Sending…';
  formStatus.hidden=true;
  try{
    const response=await fetch(contactForm.action,{method:'POST',body:new FormData(contactForm),headers:{Accept:'application/json'}});
    if(!response.ok)throw new Error('Submission failed');
    contactForm.reset();
    formStatus.textContent='Thank you for your time, our team will get in touch with you soon.';
  }catch(error){
    formStatus.textContent='We could not send your enquiry right now. Please call +91-8799971521.';
  }finally{
    formStatus.hidden=false;
    submitButton.disabled=false;
    submitButton.innerHTML=originalLabel;
  }
});
