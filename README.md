# React homework template

Цкй проект був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app).

Документація - (https://facebook.github.io/create-react-app/docs/getting-started).

## Створення репозиторія по шаблону

 Для цього натисни на кнопку `«Use this template»` і вибери опцію
`«Create a new repository»`.

![Creating repo from a template step 1](./assets/template-step-1.png)

На далі відкриється сторінка створення нового репозиторію. Заповни поле
його назви, переконайся що він публічний, після чого нажми кнопку
`«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того як репозиторій буде створений, необхідно перейти в настройки
створеного репозиторію на вкладку `Settings` > `Actions` > `General.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` вибери
опцію `«Read and write permissions»` і поклади галочку в чекбоксі. Це
необхідно для автоматизаціх процесу деплоя проєкта.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебу є персональний репозиторій проєкта, зі структурою файлів та папок
репозиторія-шаблона. Надалі працюй з ним як з будь-яким іншим особистимм репозиторієм,
клонуй його собі на комп'ютер, пиши код, роби комміти і відправляй їх на
GitHub.

## Деплой

Продакшн версія проєкта буде автоматично проходити лінтинг, збиратися і
деплоїтися на GitHub Pages, в гілку `gh-pages`, кожен раз коли оновлюється
гілка `main`. Наприклад, після прямого пуша або принятого пул-реквеста. Для цього
необхідно в файлі `package.json` відредагувати поле `homepage`, замінивши
`your_username` і `your_repo_name` на свої, і відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далі необхідно зайти в настройки GitHub-репозиторію (`Settings` > `Pages`) і
виставити роздачу продакшн версії файлів із папки `/root` гілки `gh-pages`, якщо
це небуло зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнього комміта відібражається іконкою біля його ідентифікатора.

- **Жовтий колір** - обробляється збірка і деплой проєкта.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтінга, збірки або деплоя відбулася помилка.

![Deployment status](./assets/deploy-status.png)

### Live page

Через якийсь час, як правило пару хвилин, живу сторінку можна буде побачити
по адресі вказаній в відредагованій властивості `homepage`. Наприклад,
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Якщо відкривається порожня сторінка, переконайся що на вкладці `Console` нема помилок
пов'язаних з неправильними шляхами до CSS і JS файлам проєкту (**404**). Скоріш
за все  у тебе неправильне значення властивості `homepage` в файлі `package.json`.

### Маршрутизація

Якщо додаток використовує бібліотеку `react-router-dom` для маршрутизації,
необхідно додатково налаштувати компонент `<BrowserRouter>`, передавши в пропс
`basename` точну назву твого репозиторію. Слеш з початку рядка обов'язковий.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## How does it work?

![How it works](./assets/how-it-works.png)

1. Після кожного пушу в гілку `main` GitHub-репозиторію, запускається спеціальний
   скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Всі файли репозиторію копіюються на сервер, де проєкт ініціалізується і
   проходить лінтинг і збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проєкту
   відправляється в гілку `gh-pages`.
