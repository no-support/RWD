(function () {
  // ESC 키를 누를 때 그리드 보이기 / 감추기
  document.addEventListener('keyup', function (event) {
    // ESC만으로 그리드를 켜고 끄는 기능을 사용하면, 다른 곳에서 ESC를 사용할 수 없는 문제. Shift + ESC로 문제 완화
    if (event.shiftKey && (event.key === 'Escape' || event.keyCode === 27)) {
      document.body.classList.toggle('gridShow');
    }(function () {
      // ESC 키를 누를 때 그리드 보이기 / 감추기
      document.addEventListener('keyup', function (event) {
        // ESC만으로 그리드를 켜고 끄는 기능을 사용하면, 다른 곳에서 ESC를 사용할 수 없는 문제. Shift + ESC로 문제 완화
        if (event.shiftKey && (event.key === 'Escape' || event.keyCode === 27)) {
          document.body.classList.toggle('gridShow');
        }
      });
    
      // 모바일 메뉴열기 버튼 누를 때 is--active 토글 및 aria-label 변경
      var btn = document.querySelector('.button--burger');
      var menu = document.querySelector('.menu');
      var menuList = menu.querySelector('.menu__list');
      var menuListLinks = menuList.querySelectorAll('a');
      var firstItem = menu.querySelector('.menu__list li:first-child a');
      var lastItem = menu.querySelector('.menu__list li:last-child a');
      var video = document.querySelector('.news__video');
    
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        btn.classList.toggle('is--active');
        if (btn.classList.contains('is--active')) {
          btn.setAttribute('aria-label', '메뉴 닫기');
          // 메뉴 열기 버튼 최초 클릭 시 트랜지션 설정
          menuList.style.cssText = 'transition:all 350ms ease-in-out';
          keyboardTrapInMenu();
        } else {
          btn.setAttribute('aria-label', '메뉴 열기');
          keyboardUntrapInMenu();
        }
        menu.classList.toggle('is--active');
      });
    
      /* -------------------------------------------------------------------------- */
    
      // 키보드 트랩 이벤트 핸들링
      function keyboardTrapInMenu() {
        lastItem.addEventListener('keydown', handleLastLinkTrap);
        btn.addEventListener('keydown', handleBtnTrap);
        window.addEventListener('keyup', handleTrapOff);
      }
    
      function keyboardUntrapInMenu() {
        lastItem.removeEventListener('keydown', handleLastLinkTrap);
        btn.removeEventListener('keydown', handleBtnTrap);
        window.removeEventListener('keyup', handleTrapOff);
      }
    
      function handleLastLinkTrap(e) {
        var tabKey = e.keyCode === 9;
        var shiftKey = e.shiftKey;
        if (tabKey) {
          e.preventDefault();
          if (shiftKey) {
            // 링크 아이템 중 끝에서 2번째 요소에 포커싱
            menuListLinks[menuListLinks.length - 2].focus();
          } else {
            btn.focus();
          }
        }
      }
    
      function handleBtnTrap(e) {
        var tabKey = e.keyCode === 9;
        var shiftKey = e.shiftKey;
        if (tabKey) {
          e.preventDefault();
          if (shiftKey) {
            lastItem.focus();
          } else {
            firstItem.focus();
          }
        }
      }
    
      function handleTrapOff(e) {
        if (e.keyCode === 27) {
          btn.click();
          btn.focus();
          keyboardUntrapInMenu();
        }
      }
    
      // 메뉴 리스트의 트랜지션 이벤트 핸들링
      menuList.addEventListener('transitionstart', function (e) {
        // 메뉴 열기 버튼이 활성 클래스를 가졌을 때
        if (btn.classList.contains('is--active')) {
          menuList.style.cssText = 'transition: all 350ms ease-in-out';
        }
      });
      menuList.addEventListener('transitionend', function (e) {
        // 메뉴 열기 버튼이 활성 클래스를 안 가졌을 때
        if (!btn.classList.contains('is--active')) {
          menuList.style.cssText = 'transition: none';
        }
      });
    
      // 메뉴, 메뉴 열기 버튼이 활성화 된 상태에서 창 크기 조정 시, 활성 클래스 제거
      window.addEventListener('resize', function (e) {
        if (btn.classList.contains('is--active')) {
          btn.classList.remove('is--active');
          menu.classList.remove('is--active');
        }
      });
    })();
    
  });

  // 모바일 메뉴열기 버튼 누를 때 is--active 토글 및 aria-label 변경
  var btn = document.querySelector('.button--burger');
  var menu = document.querySelector('.menu');
  var menuList = menu.querySelector('.menu__list');
  var menuListLinks = menuList.querySelectorAll('a');
  var firstItem = menu.querySelector('.menu__list li:first-child a');
  var lastItem = menu.querySelector('.menu__list li:last-child a');
  var video = document.querySelector('.news__video');

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.toggle('is--active');
    if (btn.classList.contains('is--active')) {
      btn.setAttribute('aria-label', '메뉴 닫기');
      // 메뉴 열기 버튼 최초 클릭 시 트랜지션 설정
      menuList.style.cssText = 'transition:all 350ms ease-in-out';
      keyboardTrapInMenu();
    } else {
      btn.setAttribute('aria-label', '메뉴 열기');
      keyboardUntrapInMenu();
    }
    menu.classList.toggle('is--active');
  });

  /* -------------------------------------------------------------------------- */

  // 키보드 트랩 이벤트 핸들링
  function keyboardTrapInMenu() {
    lastItem.addEventListener('keydown', handleLastLinkTrap);
    btn.addEventListener('keydown', handleBtnTrap);
    window.addEventListener('keyup', handleTrapOff);
  }

  function keyboardUntrapInMenu() {
    lastItem.removeEventListener('keydown', handleLastLinkTrap);
    btn.removeEventListener('keydown', handleBtnTrap);
    window.removeEventListener('keyup', handleTrapOff);
  }

  function handleLastLinkTrap(e) {
    var tabKey = e.keyCode === 9;
    var shiftKey = e.shiftKey;
    if (tabKey) {
      e.preventDefault();
      if (shiftKey) {
        // 링크 아이템 중 끝에서 2번째 요소에 포커싱
        menuListLinks[menuListLinks.length - 2].focus();
      } else {
        btn.focus();
      }
    }
  }

  function handleBtnTrap(e) {
    var tabKey = e.keyCode === 9;
    var shiftKey = e.shiftKey;
    if (tabKey) {
      e.preventDefault();
      if (shiftKey) {
        lastItem.focus();
      } else {
        firstItem.focus();
      }
    }
  }

  function handleTrapOff(e) {
    if (e.keyCode === 27) {
      btn.click();
      btn.focus();
      keyboardUntrapInMenu();
    }
  }

  // 메뉴 리스트의 트랜지션 이벤트 핸들링
  menuList.addEventListener('transitionstart', function (e) {
    // 메뉴 열기 버튼이 활성 클래스를 가졌을 때
    if (btn.classList.contains('is--active')) {
      menuList.style.cssText = 'transition: all 350ms ease-in-out';
    }
  });
  menuList.addEventListener('transitionend', function (e) {
    // 메뉴 열기 버튼이 활성 클래스를 안 가졌을 때
    if (!btn.classList.contains('is--active')) {
      menuList.style.cssText = 'transition: none';
    }
  });

  // 메뉴, 메뉴 열기 버튼이 활성화 된 상태에서 창 크기 조정 시, 활성 클래스 제거
  window.addEventListener('resize', function (e) {
    setTimeout(() => {
      if (btn.classList.contains('is--active')) {
        btn.classList.remove('is--active');
        menu.classList.remove('is--active');
      }
    }, "1000")

    
  });
})();