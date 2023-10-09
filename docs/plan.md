TODO list

Author: Sebastian Truchlewski 78521  Tomasz Kacprzak
Created at: https://github.com/truchlewski/Sebastian_Tomo-ARIT2.git



*Why/Problem*
Stworzenie aplikacji, która umożliwi wpisanie wszystkich zadań, rzeczy i umówionych spotkań w jednym miejscu.
*How*
Możlwiość wyświetlania  i przypominania zadań w formie listy . Dostęp do "TO DO List" nastąpi poprzez zalogowanie się użytkownika do swojej "listy".
*What*
Visual studio code (HTML .JS.CSS)
node.js
express.js
ejs
npm
JSON
...

## Goals and Non-Goals
Autoryzacja Użytkownika: Stworzenie systemu logowania, aby użytkownik mógł mieć dostęp do swojej indywidualnej listy "To-Do".

Intuicyjny Interfejs: Prosty i intuicyjny interfejs, który pozwala użytkownikom łatwo dodawać, edytować i usuwać zadania z listy.

Synchronizacja: Możliwość synchronizacji listy "To-Do" na różnych urządzeniach.

Sortowanie i Filtrowanie: Opcje sortowania i filtrowania zadań, np. według daty, priorytetu itd.

## Proposed solution
Backend: Serwer oparty na Node.js z wykorzystaniem frameworku jak Express, który będzie obsługiwał logowanie użytkowników
Frontend: Strona internetowa stworzona przy użyciu css i HTML.
Funkcje
Logowanie i Rejestracja: Użytkownicy mogą się rejestrować i logować, używając adresu e-mail i hasła. Możliwość dodania autoryzacji przez media społecznościowe.

Interfejs Użytkownika: Prosta strona główna z listą "To-Do", z opcjami dodawania, edycji i usuwania zadań.
Sortowanie i Filtrowanie: Użytkownicy mogą sortować i filtrować zadania według różnych kryteriów, takich jak data czy priorytet.





## Open Questions
Skalowalność: Jak aplikacja będzie się skalowała, jeśli liczba użytkowników gwałtownie wzrośnie?

Bezpieczeństwo: Jakie dodatkowe środki bezpieczeństwa należy wdrożyć, aby zabezpieczyć dane użytkowników?

Integracje: Czy planujemy w przyszłości integrować aplikację z innymi usługami, np. kalendarzami czy aplikacjami do zarządzania czasem?

Monetyzacja: Jak planujemy zarabiać na tej aplikacji? Czy będzie to model freemium, czy jednorazowa opłata?

Dostępność: Czy aplikacja będzie dostępna na różnych platformach (web, mobile) od razu, czy skupimy się najpierw na jednej?

UX/UI: Jakie są oczekiwania użytkowników odnośnie designu i doświadczenia użytkownika?

Dane: Jakie dane analizować, aby zrozumieć zachowania użytkowników i dalej rozwijać aplikację?

Migracja Danych: Czy i jak umożliwimy użytkownikom importowanie i eksportowanie ich list i zadań?

Czas Rzeczywisty: Czy i jak wprowadzimy funkcję synchronizacji w czasie rzeczywistym między różnymi urządzeniami?

Regulacje Prawne: Jakie przepisy prawne (np. RODO w Europie) mogą wpłynąć na przechowywanie i przetwarzanie danych użytkowników?


## References
Dokumentacja Technologiczna
Node.js: Oficjalna Dokumentacja
Express: Oficjalna Dokumentacja

