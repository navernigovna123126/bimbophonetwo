const phone = document.getElementById('phone');
const logoVideo = document.getElementById('logoVideo');
const screenOverlay = document.getElementById('screen-overlay');
const input = document.getElementById('codeInput');
const screenText = document.getElementById('screen-text');
const winMessage = document.getElementById('win-message');
const winText = document.getElementById('win-text');
const winOk = document.getElementById('win-ok');
const winCancel = document.getElementById('win-cancel');
const openSound = document.getElementById('openSound');
const replySound = document.getElementById('replySound');

let isOpen = false;

phone.addEventListener('click', () => {
  if (isOpen) return;
  isOpen = true;

  openSound.play();

  phone.src = 'assets/open-phone1.png';

  setTimeout(() => {
    phone.src = 'assets/open-phone2.png';

    // Показываем видео с логотипом
    logoVideo.style.display = 'block';
    setTimeout(() => {
      logoVideo.classList.add('visible');
      logoVideo.play();
    }, 50);

    logoVideo.onended = () => {
      // Скрываем видео плавно
      logoVideo.classList.remove('visible');
      setTimeout(() => {
        logoVideo.style.display = 'none';

        // Показываем экран с текстом и вводом
        screenOverlay.style.display = 'block';
        screenText.innerHTML = 'Send a text<br>to X';
        input.style.display = 'block';
        input.focus();
      }, 500); // Время совпадает с CSS transition
    };
  }, 400);
});

const responses = {
  "руж": "uh-uh",
  "велосипед": "я пернул",
  "табуретка": "ты еблан?",
  "котоносок": "это пиздец",
  "нежность": "^_^",
  "натаниэль": "PFFFFFFF",
  "ананас": "несса пожрет говна",
  "икс": "BIMBO DOLL",
  "григорий": "король 25 кадра",
  "мишель": "oops",
  "арина": "пожалуста не кради постеры умоляю пожалуста",
  "солви": "cutest girl in the world ! ^_^",
  "аяно": "Drag Queen",
  "плакса": "girly girl",
  "мила": "прекрати такие стикеры крутые юзать",
  "туна": "огромные соски",
  "лия": "обернись, я уже 10 лет живу в твоем пентхаусе",
  "визави": "а вы помните вазу?",
  "эра": "very soon ya will see it 07",
  "нура": "главный твинкуля района отсосала наруто за 3рубля",
  "несса": "лерон барон ракрута",
  "сайаана": "воплощение теории антропогенеза",
  "соня": "мимик chapter one true",
  "федя": "nah",
  "хэли": "uh-uh",
  "фурри": "мои кровные братья",
  "ена": "я захотел воппер из-за твоей эры",
  "катсуки": "cat suka ха хах ха хах хаха ха ...............",
  "кэсс": "ждем конкурс оформлений СУКА",
  "рейн": "крутой админ целую",
  "риша": "милана на троне",
  "роблокс": "эйбобас",
  "пипидастр": "наверни говна",
  "майто": "верни хелп",
  "су": "ка ладно ты крутая",
  "така": "говно залупа пенис хер давалка хуй блядина рукаблуд ссанина очкоблядун влагалище сука вагина ебланище",
  "сайа": "милый профиль ^_^",
  "наташа": "они с детства в сизо",
  "ханни": "не знаю но ты крутая",
  "мио": "стейси СОСАЛКА",
  "твайла": "черт ты крута",
  "чона": "да я ангел но крылья в ремонте",
  "вейд": "очень красивое портфолио",
  "талли": "best help forever !",
  "твикс": "недавно там сижу, комфортные ребята",
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const code = input.value.toLowerCase().trim();
    if (code.length === 0) return;

    screenText.textContent = '...';  // мигающее троеточие
    input.style.display = 'none';

    setTimeout(() => {
      replySound.play();
      const answer = responses[code] || "Код не распознан";
      winText.textContent = answer;
      winMessage.classList.add('active');
    }, 1500);
  }
});

winOk.addEventListener('click', () => {
  winMessage.classList.remove('active');
  input.value = '';
  input.style.display = 'block';
  screenText.innerHTML = 'Send a text<br>to X';
  input.focus();
});

winCancel.addEventListener('click', () => {
  winMessage.classList.remove('active');
  input.value = '';
  input.style.display = 'block';
  screenText.innerHTML = 'Send a text<br>to X';
  input.focus();
});