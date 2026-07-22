/* ===================================
   GuyZeus's Blog - 交互逻辑
   =================================== */

(function () {
  'use strict';

  /* === 主题切换 === */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // 读取本地存储或系统偏好
  function getPreferredTheme() {
    const saved = localStorage.getItem('blog-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('blog-theme', theme);
  }

  // 初始化主题
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* === 移动端侧边栏 === */
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openSidebar);
  }
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // 点击侧边栏链接后自动关闭（移动端）
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) closeSidebar();
      });
    });
  }

  // 按 ESC 关闭侧边栏
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  /* === 滚动时导航栏阴影 === */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
        navbar.style.paddingBottom = '0.75rem';
        navbar.style.borderBottom = '1px solid var(--border-color)';
      } else {
        navbar.style.boxShadow = 'none';
        navbar.style.paddingBottom = '';
        navbar.style.borderBottom = 'none';
      }
    });
  }

  /* === 文章内代码块：点击复制 === */
  document.querySelectorAll('.article__body pre').forEach((block) => {
    const btn = document.createElement('button');
    btn.textContent = '复制';
    btn.style.cssText =
      'position:absolute;top:0.5rem;right:0.5rem;font-size:0.7rem;padding:0.2rem 0.5rem;' +
      'background:var(--accent);color:#fff;border:none;border-radius:4px;cursor:pointer;opacity:0.85;';
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);
    wrapper.appendChild(btn);

    btn.addEventListener('click', () => {
      const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '已复制!';
        setTimeout(() => (btn.textContent = '复制'), 1500);
      });
    });
  });

  /* === 文章列表渐入动画（移动端 fallback） === */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = document.querySelectorAll('.post-item');
    items.forEach((item) => {
      item.style.opacity = '1';
      item.style.animationPlayState = 'running';
    });
  }

  /* === 当前年份自动更新页脚 === */
  const yearEls = document.querySelectorAll('.footer span');
  const year = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.innerHTML = el.innerHTML.replace('2026', String(year));
  });
})();
