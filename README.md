# Канбан доска, этапы и требования:

## Основные задачи

1. Развернуть React-приложение с использованием create-react-app.
2. Следуя правилам компонентного подхода, разбить Канбан-доску на смысловые блоки, сверстать интерфейс.
3. Реализовать функционал, описанный ниже (см. раздел Функциональные требования ↓).

Макет находится <a href="https://www.figma.com/file/gmwg0Me1T6szwVqd7KSYL6/Kanban">здесь</a>

## Функциональные требования

Исходное состояние

Исходная Канбан-доска должна иметь 4 блока с задачами:

- Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);
- Ready (задачи, которые могут быть взяты в работу);
- In progress (задачи, которые уже в работе);
- Finished (законченные задачи).

⭐ Подсказка: На начальном этапе (до подключения localStorage) можно использовать заглушку (mock) — объект с необходимыми данными, например:

<blockquote>
const dataMock = [
    {
        title: 'backlog',
        issues: [
            {
                id: '12345',
                name: 'Sprint bugfix',
                description: ‘Fix all the bugs’
            }
        ]
    },
// и так далее
]
</blockquote>

<blockquote>
    <b>Примечание</b>: вам не обязательно использовать именно такую структуру данных, как в примере выше. Структура может быть любой на ваше усмотрение.
</blockquote>

## Должен быть реализован следующий функционал:

1. Добавление новой задачи

Первоначально каждая задача всегда размещается в бэклоге — для анализа. При клике на кнопку «+ Add card» в карточке Backlog должно появляться поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка «+ Add card» должна меняться на «Submit».

<blockquote>
    <b>Алгоритм добавления задачи:</b>  

    Нажали кнопку «+ Add card» → появилось поле для редактирования → ввели название → нажали кнопку «Submit» — задача появилась в бэклоге (при условии, что название введено).
</blockquote>

Нельзя добавить в список задачу с отсутствующим названием. Если при нажатии «Submit» поле с названием пустое, в список ничего не добавляется.

2. Перемещение задач между списками

<blockquote>
    Задачи для списка Ready берутся из Backlog. При клике на «+ Add card» в карточке Ready, в конце списка появляется дропдаун с задачами из списка Backlog. После клика на задачу из дропдауна она должна появиться в списке Ready последней, при этом эта задача должна быть удалена из Backlog.
</blockquote>

Если Backlog пустой (в списке нет задач), то кнопка «+ Add card» в списке Ready должна быть неактивна, то есть при клике на неё ничего не происходит. Неактивной кнопке нужно назначить атрибут <q>disabled</q>. Активная и неактивная кнопки должны отличаться визуально: например, цветом и отсутствием <q>cursor: pointer</q>.

Остальные списки (In progress и Finished) работают по тому же принципу. Задачи для списка In progress берутся из Ready, а задачи для списка Finished — из In progress.

3. Сохранение внесенных изменений

<blockquote>
    Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), должны сохраняться в localStorage.
</blockquote>

4. Детальная страница задачи

<blockquote>
    Добавьте возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.
</blockquote>

Страница с задачей должна иметь URL, отличный от того, который используется для главной страницы. URL должен содержать id задачи. Пример: <q>localhost:3000/tasks/12345</q> откроет страницу задачи с <q>id 12345</q>.

О том, как именно реализовать такой переход, написано подробнее в разделе «Требования к React».

На детальной странице задачи должны быть выведены название задачи и её описание. Если описания нет, вывести вместо него фразу <q>"This task has no description"</q>.

Поле с описанием должно быть редактируемым. Детали реализации этой функции на ваше усмотрение. Можете реализовать возможность редактирования при клике на текст или добавить специальную кнопку, которая позволит отредактировать описание.

При клике на крестик в правом верхнем углу осуществляется переход обратно на главную страницу.

5. Вывод количества задач в футер

В футере должно быть выведено количество активных и завершенных задач.

- Active tasks — отображает количество задач в списке Backlog.
- Finished tasks — отображает количество задач в списке Finished.

6. Выпадающее меню пользователя

<blockquote>
    Реализуйте выпадающий список, который будет появляться при клике на блок в правом верхнем углу страницы — аватар пользователя со стрелкой.
</blockquote>

Стрелочка рядом с аватаром должна смотреть вверх, когда меню открыто, и вниз, когда меню закрыто.

При клике на пункты меню ничего не происходит, но нужно добавить выделение пунктов при наведении курсора (например, поменять цвет текста или добавить подчеркивание).

## Требования к React

1. Интерфейс должен быть поделен на компоненты. Перед началом работы хорошенько обдумайте, какие компоненты вы будете использовать. Деление на компоненты должно быть логичным и оправданным.
2. После того как определитесь с делением на компоненты, подумайте о том, как верно организовать файловую структуру.
3. Следуйте принципам модульности (используйте <i>export</i>, <i>import</i>).
4. Возможно использование как классовых компонентов, так и функциональных.
5. Используйте <a href="https://ru.reactjs.org/docs/handling-events.html">Synthetic events</a> для работы с событиями.
6. Для вывода разного состояния элементов в зависимости от действий пользователя (пример: раскрытое/свернутое меню пользователя) используйте <a href="https://learn-reactjs.ru/basics/conditional-rendering">условный рендеринг</a>.
7. Для реализации отдельных страниц для каждой задачи и перехода между страницами используйте библиотеку <a href="https://habr.com/ru/post/329996/">react-router</a>. 
8. При написании кода старайтесь следовать принципам <b>KISS</b> (Keep It Short and Simple — не усложняй) и <b>DRY</b> (Don’t Repeat Yourself — не повторяйся).

## Требования к верстке и CSS

1. Вёрстка должна соответствовать макету. Добиваться «pixel-perfect» соответствия не обязательно, но основные моменты должны быть соблюдены: цветовая гамма, шрифты, размеры, отступы.
2. Приложение должно корректно отображаться и на мобильных устройствах. Дизайн для мобильной версии вы можете найти в макете.
3. Соблюдайте семантическую вёрстку. В приложении должны присутствовать разделы <q>header</q>, <q>main</q> и <q>footer</q>. Кнопки должна быть реализованы элементом <q>button</q>>, элементы дропдауна — списком <q>select</q> и так далее.
4. При наведении курсора на любые кликабельные элементы должен появляться <q>cursor: pointer</q>.
5. Учитывайте состояния кнопки <i>«+ Add card»</i> — активная и неактивная.
    → Если кнопка <b>активна</b>, её внешний вид должен соответствовать макету. При наведении она должна подсвечиваться (менять цвет), а курсор должен меняться на <q>pointer</q>.
    → Если кнопка <b>неактивна</b> (назначен атрибут <q>disabled</q>), её цвет должен отличаться от активного состояния, кнопка не должна реагировать на наведение курсора (цвет остаётся таким же, не появляется курсор <q>pointer</q>).
6. Можете использовать любой вариант подключения стилей на ваше усмотрение: общий файл стилей проекта, CSS-модули или специальные React-библиотеки для стилизации компонентов (например, <a href="https://styled-components.com/">Styled Components<a>). 
7. Использовать селекторы по тегу и <q>id</q> для задания стилей <b>нельзя</b>. Используйте классы.

## Прочие требования

1. Пишите код аккуратно, с соблюдением форматирования и отступов.
2. Старайтесь давать компонентам, переменным и функциям осмысленные имена.
3. Старайтесь использовать современный ES6 синтаксис: стрелочные функции, декомпозиция, <i>spread</i> и т.д.
4. При размещении проекта на GitHub не забывайте добавить папку <i>node_modules</i> в файл <i>.gitignore</i>, чтобы она не попала в ваш репозиторий. О том, как настроить <i>.gitignore</i> и почему папки <i>node_modules</i> не должно быть в репозитории, можете прочитать <a href="https://cpab.ru/chto-takoe-fajl-gitignore-i-kak-ego-nastroit-cloudsavvy-it/">в этой статье</a>.