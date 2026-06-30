/* =====================================================
   共用元件：導覽列 & 頁尾
   用法：
     loadNav('home')   // 或 'about', 'projects' …
     loadFooter()
   ===================================================== */

function loadNav(activePage) {
  document.getElementById('nav-container').innerHTML = buildNav(activePage);
  // Bootstrap Dropdown 需要初始化
  document.querySelectorAll('.dropdown-toggle').forEach(el => {
    new bootstrap.Dropdown(el);
  });
}

function loadFooter() {
  document.getElementById('footer-container').innerHTML = buildFooter();
}

function buildNav(activePage) {
  function isActive(page) {
    return activePage === page ? ' active" aria-current="page' : '';
  }
  return `
  <!-- Top Bar -->
  <div class="top-bar d-none d-md-block">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <span>
          <a href="https://www.dila.edu.tw" target="_blank">法鼓文理學院</a>
          <span class="mx-2 opacity-50">|</span>
          <a href="https://da.dila.edu.tw" target="_blank">數位典藏組</a>
          <span class="mx-2 opacity-50">|</span>
          <a href="https://cbetaonline.dila.edu.tw" target="_blank">CBETA Online</a>
        </span>
        <span>
          <i class="fas fa-envelope me-1"></i><a href="mailto:ai@dila.edu.tw">ai@dila.edu.tw</a>
          <span class="mx-2 opacity-50">|</span>
          <a href="#" title="English"><i class="fas fa-globe me-1"></i>EN</a>
        </span>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="navbar navbar-expand-lg main-navbar" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="https://www.dila.edu.tw/files/images/header/logo.svg" alt="法鼓文理學院"
          onerror="this.style.display='none'" style="height:38px;margin-right:.8rem;filter:brightness(0) invert(1)">
        <span>
          <span class="brand-main">AI人文社科創新與數位典藏研究中心</span>
          <span class="brand-sub">Center for AI Innovation in Humanities and Digital Archives · DILA</span>
        </span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <a class="nav-link${isActive('home')}" href="index.html">首頁</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${isActive('about')}" href="#" data-bs-toggle="dropdown">關於中心</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="mission.html">中心宗旨</a></li>
              <li><a class="dropdown-item" href="focus.html">發展主軸</a></li>
              <li><a class="dropdown-item" href="team.html">中心團隊</a></li>
              <li><a class="dropdown-item" href="documents.html">法規與文件</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://da.dila.edu.tw" target="_blank">
              數位典藏專案 <i class="fas fa-external-link-alt" style="font-size:.65rem;"></i>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${isActive('projects')}" href="#" data-bs-toggle="dropdown">計畫與資源</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="key-projects.html">重點計畫</a></li>
              <li><a class="dropdown-item" href="tools.html">工具與平台</a></li>
              <li><a class="dropdown-item" href="downloads.html">下載專區</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link${isActive('training')}" href="training.html">教學培訓與資源</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${isActive('news')}" href="#" data-bs-toggle="dropdown">重要消息</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="announcements.html">重要公告</a></li>
              <li><a class="dropdown-item" href="media.html">媒體與亮點</a></li>
              <li><a class="dropdown-item" href="social.html">外部動態入口</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${isActive('governance')}" href="#" data-bs-toggle="dropdown">AI 治理與倫理</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="principles.html">負責任 AI 使用原則</a></li>
              <li><a class="dropdown-item" href="teaching-guidelines.html">教學與行政應用指引</a></li>
              <li><a class="dropdown-item" href="data-security.html">資料安全與個資保護</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${isActive('collab')}" href="#" data-bs-toggle="dropdown">合作交流</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="industry.html">產學合作</a></li>
              <li><a class="dropdown-item" href="international.html">國際交流</a></li>
            </ul>
          </li>

          <li class="nav-item ms-1">
            <a href="donation.html" class="btn btn-sm btn-outline-warning${isActive('donation')}"
               style="color:#f0c040;border-color:#f0c040;padding:.3rem .7rem;margin-top:.65rem;font-size:.8rem;white-space:nowrap">
              <i class="fas fa-heart me-1" style="color:#e05050;font-size:.75rem"></i>捐款
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>`;
}

function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-12">
          <div class="footer-brand">AI人文社科創新與數位典藏研究中心</div>
          <div class="footer-sub mb-2">法鼓文理學院 · Dharma Drum Institute of Liberal Arts</div>
          <p class="footer-sub mb-3" style="color:rgba(255,255,255,.5)">以人文價值引導 AI，以 AI 擴展人文實踐</p>
          <div>
            <a href="https://www.facebook.com" target="_blank" class="social-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com" target="_blank" class="social-btn" title="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="mailto:ai@dila.edu.tw" class="social-btn" title="Email"><i class="fas fa-envelope"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <h6>關於中心</h6>
          <a href="mission.html" class="footer-link">中心宗旨</a>
          <a href="focus.html" class="footer-link">發展主軸</a>
          <a href="team.html" class="footer-link">中心團隊</a>
          <a href="documents.html" class="footer-link">法規與文件</a>
        </div>

        <div class="col-lg-2 col-6">
          <h6>計畫與資源</h6>
          <a href="key-projects.html" class="footer-link">重點計畫</a>
          <a href="tools.html" class="footer-link">工具與平台</a>
          <a href="downloads.html" class="footer-link">下載專區</a>
        </div>

        <div class="col-lg-2 col-6">
          <h6>教學培訓</h6>
          <a href="training.html#staff" class="footer-link">職員 AI 工作坊</a>
          <a href="training.html#faculty" class="footer-link">教師 AI 成長</a>
          <a href="training.html#students" class="footer-link">學生 AI 創客</a>
        </div>

        <div class="col-lg-2 col-6">
          <h6>聯絡我們</h6>
          <span class="footer-link"><i class="fas fa-map-marker-alt me-1"></i>新北市金山區法鼓路700號</span>
          <span class="footer-link"><i class="fas fa-phone me-1"></i>02-2498-0707</span>
          <a href="mailto:ai@dila.edu.tw" class="footer-link"><i class="fas fa-envelope me-1"></i>ai@dila.edu.tw</a>
          <a href="https://www.dila.edu.tw" target="_blank" class="footer-link"><i class="fas fa-external-link-alt me-1"></i>法鼓文理學院官網</a>
          <a href="https://da.dila.edu.tw" target="_blank" class="footer-link"><i class="fas fa-archive me-1"></i>數位典藏組官網</a>
          <a href="donation.html" class="footer-link"><i class="fas fa-heart me-1"></i>捐款贊助</a>
        </div>
      </div>

      <hr>
      <div class="text-center footer-bottom">
        <p class="mb-0">© 2026 法鼓文理學院 AI人文社科創新與數位典藏研究中心 版權所有</p>
        <p class="mb-0">Dharma Drum Institute of Liberal Arts · 新北市金山區法鼓路700號 · DILA, New Taipei City</p>
      </div>
    </div>
  </footer>`;
}
