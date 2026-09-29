(() => {
"use strict";

/* Complete content libraries: 100 unique affirmations + 100 unique actions. */
const affirmations = [
  "I can meet today with patience and curiosity.",
  "I am allowed to grow at a pace that feels sustainable.",
  "My worth does not depend on how much I accomplish.",
  "I can be kind to myself while I learn.",
  "I have permission to begin again.",
  "I can notice a difficult moment without becoming it.",
  "I trust myself to take the next small step.",
  "I deserve moments of rest without needing to earn them.",
  "I can make room for both progress and imperfection.",
  "My feelings are information, not instructions.",
  "I can choose a gentler response when pressure rises.",
  "I am learning more about what helps me feel grounded.",
  "I can celebrate small progress that nobody else sees.",
  "I bring value simply by being present and engaged.",
  "I can pause before reacting.",
  "I am capable of adapting when plans change.",
  "I can ask for help without seeing it as failure.",
  "I am worthy of care on ordinary days, too.",
  "I can focus on what is within my reach today.",
  "I can let one unfinished task remain unfinished for now.",
  "I have handled uncertain moments before.",
  "I can give myself the same patience I offer others.",
  "I am allowed to protect my energy.",
  "I can make thoughtful choices without having every answer.",
  "I can release the need to do everything at once.",
  "I am becoming more familiar with my own strengths.",
  "I can learn from a mistake without defining myself by it.",
  "I can create a little calm in the middle of a busy day.",
  "I am enough while I am still becoming.",
  "I can appreciate where I am without giving up on where I am going.",
  "I can choose progress over perfection.",
  "My attention is valuable, and I can direct it intentionally.",
  "I can take one breath and start from there.",
  "I am allowed to change my mind when I learn something new.",
  "I can notice good moments without needing them to last forever.",
  "I can be proud of effort even when results take time.",
  "I can respond to myself with understanding.",
  "I have the ability to make today slightly kinder.",
  "I can let today be a chapter, not a verdict.",
  "I am capable of recovering my balance after a hard moment.",
  "I can choose what deserves my attention.",
  "I can enjoy something small without making it productive.",
  "I am learning to recognize my needs earlier.",
  "I can give myself space to think clearly.",
  "I can be both ambitious and compassionate toward myself.",
  "I can make a meaningful difference through small actions.",
  "I can accept that some things take time.",
  "I am not behind; I am on my own timeline.",
  "I can find one useful thing in a challenging experience.",
  "I can slow down enough to notice what is already going well.",
  "I can practice gratitude without ignoring what is difficult.",
  "I can take care of myself without apology.",
  "I have permission to set a boundary respectfully.",
  "I can choose a fresh start at any point in the day.",
  "I can trust a small step even when the whole path is unclear.",
  "I am capable of learning skills that once felt unfamiliar.",
  "I can give myself credit for continuing.",
  "I can make decisions from clarity rather than urgency.",
  "I can leave room for surprise and possibility.",
  "I am allowed to have a quiet day.",
  "I can treat my inner voice with respect.",
  "I can notice tension and soften it one small amount.",
  "I can make space for joy without waiting for everything to be perfect.",
  "I am resilient enough to keep learning.",
  "I can focus on the next helpful action.",
  "I can let comparison pass without following it.",
  "I can appreciate my progress even when it feels gradual.",
  "I am allowed to rest before I feel completely exhausted.",
  "I can be honest about what I need.",
  "I can bring curiosity to something that frustrates me.",
  "I can start with what I know and learn the rest along the way.",
  "I am capable of creating routines that support me.",
  "I can choose a response that matches the person I want to be.",
  "I can notice beauty in an ordinary moment.",
  "I am allowed to make mistakes while becoming better at something.",
  "I can hold hope without pretending everything is easy.",
  "I can give my attention to one thing at a time.",
  "I can make today meaningful without making it extraordinary.",
  "I am learning to trust my own judgment.",
  "I can forgive myself for not knowing what I know now.",
  "I can take a pause and return with fresh attention.",
  "I deserve relationships that make room for honesty and respect.",
  "I can acknowledge what is hard and still look for what helps.",
  "I can practice patience with myself today.",
  "I have more than one way to move forward.",
  "I can choose a smaller goal when a big goal feels heavy.",
  "I can recognize when enough is enough for today.",
  "I am capable of building confidence through repeated practice.",
  "I can make room for gratitude, even in a complicated season.",
  "I can let a good moment count.",
  "I can be present for the life that is happening now.",
  "I can learn without rushing to prove myself.",
  "I am allowed to take up space and speak clearly.",
  "I can care for my future self through one small choice today.",
  "I can begin with kindness toward myself.",
  "I am capable of finding steadiness one moment at a time.",
  "I can leave some room in today for something unexpected and good.",
  "I can make today a little more spacious by choosing what not to rush.",
  "I can notice my effort even when nobody else sees it.",
  "I can meet uncertainty with one clear step at a time."
];
const actions = [
  "Take three slow breaths, making each exhale a little longer than the inhale.",
  "Drink a glass of water slowly and notice the temperature.",
  "Look outside and name three things you can see.",
  "Roll your shoulders gently backward five times.",
  "Send a sincere one-line thank-you message to someone.",
  "Stand up and stretch your arms overhead for 20 seconds.",
  "Write down one thing that went better than expected recently.",
  "Put your phone face down and take ten quiet breaths.",
  "Step into natural light for one minute if you can.",
  "Relax your jaw and drop your shoulders.",
  "Write one sentence about something you are looking forward to.",
  "Take five slow ankle circles with each foot.",
  "Open a window and take three comfortable breaths.",
  "Delete one unnecessary notification from your phone.",
  "Place both feet on the floor and notice the support beneath you.",
  "Send a kind message to someone you have not checked on recently.",
  "Name one task you completed today, however small.",
  "Stretch your neck gently from side to side.",
  "Drink a few sips of water before your next screen session.",
  "Look at something green for 30 seconds.",
  "Take a 60-second screen break and let your eyes focus far away.",
  "Write one thing you appreciate about your current surroundings.",
  "Unclench your hands and gently shake them out.",
  "Put one small item back where it belongs.",
  "Take five comfortable breaths while counting each exhale.",
  "Notice one pleasant sound around you.",
  "Stand and gently stretch your calves.",
  "Write a two-word reminder of what matters to you today.",
  "Send a heart or thank-you emoji to someone who helped you.",
  "Sit quietly for one minute without trying to solve anything.",
  "Take a short walk to the nearest doorway and back.",
  "Place a hand on your chest and notice your breathing.",
  "Drink water before reaching for another caffeinated drink.",
  "Write down one thing you handled well this week.",
  "Look away from your screen and soften your gaze.",
  "Stretch your wrists and fingers for 20 seconds.",
  "Clear one tiny area of your desk or table.",
  "Think of one person who makes your life better.",
  "Take three breaths before opening your next app or message.",
  "Step outside or near a window and notice the air on your skin.",
  "Write one sentence beginning with: Today I noticed one thing worth remembering.",
  "Relax your shoulders every time you exhale for five breaths.",
  "Put your phone on silent for two minutes.",
  "Choose one song and listen to its opening minute attentively.",
  "Take five slow steps while noticing how your feet meet the ground.",
  "Drink a glass of water and refill the glass immediately.",
  "Write one tiny thing you can do to make tomorrow easier.",
  "Send someone a brief message saying you appreciate them.",
  "Look around and identify one color you find calming.",
  "Stretch your arms across your body gently on each side.",
  "Take a minute to breathe without changing your natural rhythm.",
  "Write down one worry, then add one practical next step.",
  "Give yourself a genuine compliment about an effort you made.",
  "Stand tall, relax your shoulders, and take three breaths.",
  "Notice the texture of an object you are holding.",
  "Take a short pause before replying to your next message.",
  "Write one word describing how you feel right now.",
  "Put one distracting browser tab away.",
  "Walk around your room for one minute at an easy pace.",
  "Notice five things that are physically supporting you right now.",
  "Take a slow breath while counting to four, then exhale to six.",
  "Send a supportive message to someone facing a busy day.",
  "Drink water and notice whether your body feels different afterward.",
  "Stretch your upper back by gently clasping your hands in front of you.",
  "Look at the sky for one minute.",
  "Write down one small win from today.",
  "Take three slow breaths before your next task.",
  "Move your body in any comfortable way for 60 seconds.",
  "Notice whether you are holding tension in your forehead and soften it.",
  "Write a one-line gratitude note in your phone.",
  "Give yourself permission to leave one nonessential task for later.",
  "Open your curtains or blinds and let in natural light.",
  "Take five gentle shoulder rolls forward and five backward.",
  "Think of a kind thing someone did for you and savor the memory.",
  "Send a short message wishing someone a good day.",
  "Put a glass or bottle of water within easy reach.",
  "Take a slow lap around your workspace.",
  "Close your eyes for 20 seconds and listen to the nearest sound.",
  "Write one thing you want to remember about today.",
  "Stretch one side of your body, then the other.",
  "Check your posture and make one comfortable adjustment.",
  "Choose one object nearby and notice three details about it.",
  "Take a 90-second pause before starting your next task.",
  "Drink water and take one slow breath before returning to work.",
  "Write down a tiny task you can finish in under two minutes.",
  "Give someone a specific compliment.",
  "Step outside and feel the ground beneath your feet for a moment.",
  "Unclench your teeth and let your tongue rest comfortably.",
  "Notice your breathing without trying to control it for 30 seconds.",
  "Put one item you no longer need into a recycling or donation pile.",
  "Write a kind sentence to yourself as if speaking to a friend.",
  "Take a gentle standing side stretch on both sides.",
  "Look for one small detail in your surroundings you had not noticed.",
  "Send a thank-you message without adding any other request.",
  "Pause and ask yourself what would make the next ten minutes easier.",
  "Take a few sips of water while taking a break from your screen.",
  "Write down one thing you can let go of for today.",
  "Spend one quiet minute simply noticing the present moment.",
  "Take ten seconds to notice your next breath before beginning a task.",
  "Write down one small comfort you can give yourself today."
];

const KEY = { visits:"ddop_visits", last:"ddop_last_visit", theme:"ddop_theme" };
const state = { affirmation:affirmations[0], action:actions[0], toastTimer:null };
const $ = s => document.querySelector(s);
const el = {
  day:$("#dayCounter"), affirmation:$("#affirmationText"), action:$("#actionText"),
  content:$("#content"), newDay:$("#newDayButton"), theme:$("#themeToggle"),
  icon:$("#themeIcon"), share:$("#shareButton"), toast:$("#toast")
};

/* Local calendar key keeps the counter aligned with the visitor's timezone. */
function todayKey() {
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function renderCounter() {
  let count=Number.parseInt(localStorage.getItem(KEY.visits)||"0",10);
  const last=localStorage.getItem(KEY.last), today=todayKey();
  if(!Number.isFinite(count)||count<1) count=0;
  if(last!==today) {
    count++;
    localStorage.setItem(KEY.visits,String(count));
    localStorage.setItem(KEY.last,today);
  }
  el.day.textContent=`This is your Day ${count||1} of positivity`;
}
function randomItem(list) { return list[Math.floor(Math.random()*list.length)]; }
function newPair() {
  let a=randomItem(affirmations), b=randomItem(actions);
  while(affirmations.length>1&&a===state.affirmation) a=randomItem(affirmations);
  while(actions.length>1&&b===state.action) b=randomItem(actions);
  state.affirmation=a; state.action=b;
}
function reveal(node,text) {
  node.classList.remove("text-reveal"); void node.offsetWidth;
  node.textContent=text; node.classList.add("text-reveal");
}
function renderPair() {
  reveal(el.affirmation,state.affirmation); reveal(el.action,state.action); updateShare();
}
function toast(message) {
  clearTimeout(state.toastTimer); el.toast.textContent=message; el.toast.classList.add("show");
  state.toastTimer=setTimeout(()=>el.toast.classList.remove("show"),3000);
}
async function copyText(value,button) {
  try {
    if(!navigator.clipboard) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(value);
  } catch {
    const area=document.createElement("textarea");
    area.value=value; area.readOnly=true; area.style.position="fixed"; area.style.opacity="0";
    document.body.appendChild(area); area.select();
    try { document.execCommand("copy"); } catch { toast("Copy is unavailable in this browser."); area.remove(); return; }
    area.remove();
  }
  button.classList.remove("copied"); void button.offsetWidth; button.classList.add("copied"); toast("Copied to your clipboard ✓");
}
function updateShare() {
  const message=`Just got my daily dose of positivity! 🌱 Try it: ${location.href}`;
  el.share.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
}
function applyTheme(theme) {
  const dark=theme==="dark";
  document.documentElement.dataset.theme=dark?"dark":"light";
  el.theme.setAttribute("aria-pressed",String(dark));
  el.theme.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
  el.icon.textContent=dark?"☀":"☾";
  localStorage.setItem(KEY.theme,dark?"dark":"light");
}
function initTheme() {
  const saved=localStorage.getItem(KEY.theme);
  if(saved==="dark"||saved==="light") return applyTheme(saved);
  applyTheme(matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
}
function ripple(event) {
  const target=event.currentTarget, r=target.getBoundingClientRect(), size=Math.max(r.width,r.height);
  const circle=document.createElement("span");
  circle.className="ripple-circle"; circle.style.width=`${size}px`; circle.style.height=`${size}px`;
  circle.style.left=`${event.clientX-r.left-size/2}px`; circle.style.top=`${event.clientY-r.top-size/2}px`;
  target.appendChild(circle); circle.addEventListener("animationend",()=>circle.remove(),{once:true});
}
function bind() {
  document.querySelectorAll(".ripple").forEach(x=>x.addEventListener("click",ripple));
  document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",()=>copyText(button.dataset.copy==="affirmation"?state.affirmation:state.action,button)));
  el.newDay.addEventListener("click",()=>{newPair();renderPair();toast("A fresh little dose is ready 🌱");});
  el.theme.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
}
function init() {
  initTheme(); renderCounter(); updateShare(); bind();
  el.content.classList.add("loading");
  setTimeout(()=>{el.content.classList.remove("loading");renderPair();},260);
}
document.addEventListener("DOMContentLoaded",init);
})();
