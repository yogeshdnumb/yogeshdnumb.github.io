(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".header__menu"),n=document.querySelector(".header__close"),g=document.querySelector(".header__list"),i=document.querySelector(".header__sun"),l=document.querySelector(".header__moon"),f=document.querySelector("body"),m=document.querySelector(".ci-github");c.addEventListener("click",()=>{u()});n.addEventListener("click",()=>{u()});function u(){c.classList.toggle("visible"),n.classList.toggle("visible"),g.classList.toggle("open")}i.addEventListener("click",()=>{d()});l.addEventListener("click",()=>{d()});function d(){i.classList.toggle("visible"),l.classList.toggle("visible"),f.classList.toggle("dark"),m.classList.toggle("ci-invert")}