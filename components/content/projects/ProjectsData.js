export const projectsList = [
    {
        image: '/content_icons/package.svg',
        label: 'System przesyłek wewnętrznych',
        description: 'Projekt wewnątrz firmowy',
        content: "System do rejestrowania i śledzenia przebiegu poczty wewnętrznej pomiędzy placówkami, centrami logistycznymi oraz centralą. Śledzenie trwa od wprowadzenia przesylki do systemu aż do odebrania przez adresata. Uwzględniony został postęp przesyłki taki jak odbior od nadawcy, pakowanie, transport, sortowanie. W systemie wbudowany został tryb administratora w celu korekty ludzkich błędów oraz raportowania."
    },

    {
        image: '/content_icons/calculations.svg',
        label: 'System rozliczania kontrahentów',
        description: 'Projekt wewnątrz firmowy',
        content: "System służący do rejestrowania zamówień od kontrahentów wraz z upustami rocznymi/miesięcznymi z automatycznym sumowaniem i rozliczaniem per kontrahent/kupiec/produkt itd."
    },

    {
        image: '/content_icons/chatbot.svg',
        label: 'Aplikacja ChatDude AI',
        status: 'W trakcie',
        description: 'Projekt prywatny',
        content: "Aplikacja voice chat bot z wbudowanym AI i mimiką ludzkiej twarzy. Z botem można przeprowadzać konwersacje itp."
    },

    {
        image: '/content_icons/thief.svg',
        label: 'System zgłoszeń kradzieży',
        description: 'Projekt wewnątrz firmowy',
        content: "System zaprojektowany do zgłaszania i obsługi zdarzeń kradzieży na obiektach firmy. Aplikacja obsługuje proces zgłoszenia kradzieży, wyceny, weryfikacji pism z policji i ściągniecia ze stanów magazynowych."
    },

    {
        image: '/content_icons/loan.svg',
        label: 'System pożyczek pracowniczych',
        description: 'Projekt wewnątrz firmowy',
        content: "System benefitowy pożyczek pracowniczych. Aplikacja umożliwia dodanie pożyczki do systemu (wygenerowanie umowy, harmonogramu, zleceń przelewów itp), weryfikacje wniosku (stan zatrudnienia) oraz wysyłke i synchronizacje z Burem Informacji Kredytowej."
    },

    {
        image: '/content_icons/assets.svg',
        label: 'System zarządzania środkami trwałymi',
        description: 'Projekt wewnątrz firmowy',
        content: "System stworzony na potrzeby śledzenia środków trwałych na wszystkch obiektach firmowych oraz stanów przypisanych do konkretnych pracowników. Obługuje ręczne dodawanie środka, kategoryzacje środka, generowanie etykiety, masowe importy/exporty, skanowanie etykiet oraz przesuwanie i wyświetlanie danego środka trwałego wraz z sprawdzaniem stanu obiektu/osoby."
    },

    {
        image: '/content_icons/car.svg',
        label: 'Aplikacja do śledzenia stanu pojazdu',
        status: 'W trakcie',
        description: 'Projekt prywatny, zlecony',
        content: "Prosta aplikacja służąca do monitorowania stanów pojazdów, w stan wliczając: ostanie mycie, wymiane akumulatora itp. Aplikacja zintegrowana jako część już istniejącego systemu."
    },

    {
        image: '/content_icons/map.svg',
        label: 'Interaktywna mapa lokalizacji',
        description: 'Projekt wewnątrz firmowy',
        content: "Mapa lokalizacji zintegorwana z API MapBox. Mapa obługuje custmowe generowanie interaktywnych znaczników wraz z wyszukiwarką."
    },

    {
        image: '/content_icons/budget.svg',
        label: 'Aplikacja do zarządzania budżetem',
        description: 'Projekt wewnątrz firmowy',
        content: "Aplikacja do zarządzania budżetem firmy z podziałem na kategorie/działy. Składa się z drzewa kategorii budżetowych o nieskończonych zagłębieniach z możliwością edycji. Aplikacja zawiera integracje z systemem fakturowym CAPEX/OPEX."
    },

    {
        image: '/content_icons/roadmap.svg',
        label: 'Customowy roadmap zadań',
        description: 'Projekt wewnątrz firmowy',
        content: "W pełni customowy roadmap z możliwością filtrowania i dynamicznego rozszerzania zadań. Aplikacja wzorowana na RSI Roadmap.",
        links: [
            {
                name: 'RSI Roadmap',
                url: "https://robertsspaceindustries.com/roadmap/progress-tracker/teams"
            }
        ]
    },

    {
        image: '/content_icons/documents.svg',
        label: 'System zarządzania CAPEX/OPEX',
        description: 'Projekt wewnątrz firmowy',
        content: "System rozliczania nakładów na zakup, utrzymanie lub upgrade istniejących już środków trwałych i innych. Aplikacja uwzględnia tworzenie wniosków m.in. o zakup wraz z kategoryzacją wydatków i całym procesem weryfikacji, akceptacji i realizacji."
    },

    {
        image: '/content_icons/product.svg',
        label: 'Customowy system obiegu produktu',
        description: 'Projekt wewnątrz firmowy',
        content: "System obiegu produktu mający na celu ustandaryzowanie i ułatiwenie śledzenia statusu produktów w przedsiębiorstwie śledząc produkt poprzez poszczególne etapy np. zakup, testy, wdrożenie do sprzedaży, zablokowanie i odblokowanie sprzedaży, ilość sprzedaży itd. Śledzenie odbywa się poprzez karte produktu zawierającą niezbędne informacje np. producent, opakowanie, ilość, oprocentowanie itp."
    },

    {
        image: '/content_icons/calendar.svg',
        label: 'Dynamiczny kalendarz eventów',
        description: 'Projekt wewnątrz firmowy',
        content: "Aplikacja pobierająca eventy z różnych źródeł z możliwością edycji i dodawania informacji, wyświetlająca całość w filtowanym widoku kalendarza na podstawie TUI Calendar",
        links: [
            {
                name: 'TUI Calendar',
                url: "https://ui.toast.com/tui-calendar"
            }
        ]
    }
]