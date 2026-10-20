# Laboration 2 - Objektorienterad programmering

En att göra-applikation skapad med TypeScript i kursen Programmering i TypeScript vid Mittuniversitetet.

## Publicerad webbplats

https://lab2-typescript.netlify.app/

## Beskrivning

Syftet med laborationen var att skapa en todo-applikation med hjälp av objektorienterad programmering. Användaren ska kunna lägga till uppgifter, välja prioritet och sedan bocka av dessa.

Uppgifterna sparas i webbläsarens LocalStorage och finns därför kvar när sidan laddas om.

## Funktionalitet

- Lägga till nya uppgifter
- Välja prioritet från 1 till 3
- Markera uppgifter som färdiga
- Visa alla uppgifter i en lista
- Validera användarens inmatning
- Spara uppgifter med LocalStorage
- Responsiv design för mobil och dator

# Tekniker

- Html5
- CSS3
- TypeScript
- Vite
- LocalStorage

## Projektstruktur

- `index.html` - Webbplatsens HTML-struktur
- `src/main.ts` - Hanterar användargränssnittet och händelser
- `src/TodoList.ts` - Innehåller Todo-interfacet och TodoList-klassen
- `src/style.css` - Webbplatsens design och responsiva anpassningar

## Objectorienterad programmering

Applikationen använder interfacet `Todo` för att definiera uppgifternas egenskaper.

- `task` - Uppgiftens text
- `completed` - Anger om uppgiften är färdig
- `priority` - Uppgiftens prioritet

Klassen `TodoList` innehåller en privat array med uppgifter och följande metoder:

- `addTodo()` - Lägger till ny uppgift efter validering
- `markTodoCompleted()` - Markerar en uppgift som färdig
- `getTodos()` - Returnerar alla uppgifter
- `saveToLocalStorage()` - Sparar uppgifterna i LocalStorage
- `loadFromLocalStorage()` - Hämtar sparade uppgifter från LocalStorage

Klassens konstruktor läser automatiskt in tidigare sparade uppgifter när ett nytt TodoList-objekt skapas.

## Installation

Klona projektet:

```bash
git clone https://github.com/emmaagren/lab2-typescript.git
```

Öppna projektmappen:

```bash
cd lab2-typescript
```
Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

## Github

https://github.com/emmaagren/lab2-typescript.git

## Författare

Emma Ågren
Student
Mittuniversitetet
