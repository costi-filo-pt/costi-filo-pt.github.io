const form = document.getElementById("lead-form");
const status = document.getElementById("form-status");
const year = document.getElementById("current-year");
const languageButtons = document.querySelectorAll("[data-language]");
const titleMap = {
    en: "Costi Filofie | Personal Trainer",
    ro: "Costi Filofie | Antrenor Personal"
};
const metaDescriptionMap = {
    en: "Costi Filofie is a personal trainer helping busy people build strength, improve energy, and stay consistent with a plan that fits real life.",
    ro: "Costi Filofie este un antrenor personal care ajuta oamenii ocupati sa devina mai puternici, sa aiba mai multa energie si sa ramana constanti cu un plan realist."
};
const translations = {
    en: {
        "nav.about": "About",
        "nav.services": "Coaching",
        "nav.results": "Results",
        "nav.contact": "Contact",
        "hero.eyebrow": "Personal Training for Real Life",
        "hero.title": "Build strength, move better, and stay consistent with coaching from Costi Filofie.",
        "hero.text": "Costi helps professionals, parents, and complete beginners train with structure, confidence, and a plan they can actually sustain.",
        "hero.primaryCta": "Book a Consultation",
        "hero.secondaryCta": "See Coaching Options",
        "hero.point1": "1-to-1 coaching",
        "hero.point2": "Beginner-friendly programming",
        "hero.point3": "Nutrition and habit guidance",
        "heroCard.kicker": "Meet Your Coach",
        "heroCard.text": "Personal trainer focused on strength, fat loss, posture, and long-term lifestyle change.",
        "heroCard.locationLabel": "Location",
        "heroCard.sessionsLabel": "Sessions",
        "heroCard.sessionsValue": "In-person and online",
        "heroCard.specialtiesLabel": "Specialties",
        "heroCard.specialtiesValue": "Strength, fat loss, mobility",
        "trust.plan": "Week transformation plans",
        "trust.coaching": "Coaching and accountability",
        "trust.tailored": "Tailored to schedule and goals",
        "about.eyebrow": "Why Clients Work With Costi",
        "about.title": "Coaching that fits busy lives instead of fighting them.",
        "about.text1": "Many people do not need more random workouts. They need a clear plan, honest feedback, and someone who knows how to turn good intentions into weekly action. Costi's coaching is built around exactly that.",
        "about.text2": "Whether the goal is getting leaner, moving without pain, building muscle, or feeling comfortable in the gym again, the process stays simple: assess, plan, coach, adapt, repeat.",
        "services.eyebrow": "Coaching Pillars",
        "services.title": "One-page clarity on what the programme covers.",
        "services.card1Title": "Strength Training",
        "services.card1Text": "Structured sessions designed around technique, progression, and confidence under load.",
        "services.card2Title": "Fat Loss Support",
        "services.card2Text": "Practical calorie awareness, better food habits, and a pace that is sustainable outside the gym.",
        "services.card3Title": "Mobility and Posture",
        "services.card3Text": "Movement-focused work to improve range, reduce stiffness, and make training feel better.",
        "services.card4Title": "Accountability",
        "services.card4Text": "Check-ins, progress tracking, and simple targets that keep clients moving forward.",
        "roadmap.eyebrow": "What Clients Can Expect",
        "roadmap.title": "A practical roadmap from day one.",
        "roadmap.step1Title": "Starter Assessment",
        "roadmap.step1Text": "Discuss goals, injuries, training history, schedule, and nutrition habits.",
        "roadmap.step2Title": "Tailored Programme",
        "roadmap.step2Text": "Build a plan around available days, equipment access, and current fitness level.",
        "roadmap.step3Title": "Weekly Coaching",
        "roadmap.step3Text": "Use clear progression, form feedback, and realistic adjustments when life gets busy.",
        "roadmap.step4Title": "Visible Progress",
        "roadmap.step4Text": "Track strength, energy, body composition, and consistency instead of guessing.",
        "results.eyebrow": "Results and Social Proof",
        "results.title": "Replace these placeholders with real client wins when available.",
        "results.quote1": '"Working with Costi gave me structure for the first time. I stopped skipping sessions, got stronger, and finally felt in control of my routine."',
        "results.footer1": "Placeholder Client A, 12-week strength plan",
        "results.quote2": '"The biggest change was consistency. The workouts were challenging, but realistic enough that I could keep showing up every week."',
        "results.footer2": "Placeholder Client B, body recomposition plan",
        "results.quote3": '"I started as a complete beginner. Costi made the gym feel simple, safe, and focused, which removed a lot of stress."',
        "results.footer3": "Placeholder Client C, beginner coaching",
        "faq.eyebrow": "Common Questions",
        "faq.title": "Useful copy for visitors who are interested but not ready yet.",
        "faq.q1": "Do I need gym experience?",
        "faq.a1": "No. This page is written for beginners as well as people returning after a long break.",
        "faq.q2": "Can I train online?",
        "faq.a2": "Yes. Costi can coach both in person and online, with check-ins and training adjustments based on your schedule.",
        "faq.q3": "How do I start?",
        "faq.a3": "Use the form below and Costi can follow up with a consultation, questionnaire, or trial session.",
        "contact.eyebrow": "Start the Conversation",
        "contact.title": "Book a consultation or ask a question.",
        "contact.text": "Send a message below and Costi can follow up by email to discuss your goals, schedule, and the right coaching format.",
        "contact.email": "Email: vlad_serbanik@yahoo.com",
        "contact.phone": "Phone / WhatsApp: [Your Number]",
        "contact.instagram": "Instagram: [@YourHandle]",
        "form.nameLabel": "Full Name",
        "form.namePlaceholder": "Your full name",
        "form.emailLabel": "Email Address",
        "form.emailPlaceholder": "you@example.com",
        "form.goalLabel": "Main Goal",
        "form.goalOption0": "Select one",
        "form.goalOption1": "Lose fat",
        "form.goalOption2": "Build muscle",
        "form.goalOption3": "Improve strength",
        "form.goalOption4": "Move with less pain",
        "form.goalOption5": "Get back into training",
        "form.messageLabel": "Tell Costi About Your Situation",
        "form.messagePlaceholder": "What are you working toward, and what is currently getting in the way?",
        "form.submit": "Submit Enquiry",
        "form.note": "FormSubmit will send enquiries to vlad_serbanik@yahoo.com after the address is activated on first use.",
        "footer.copyPrefix": "©",
        "footer.copySuffix": "Costi Filofie Personal Training",
        "footer.note": "Demo photos are loaded from Unsplash. Final placeholders to replace: business location, phone, Instagram, client testimonials, certifications.",
        "form.statusSending": "Sending...",
        "form.statusSuccess": "Thanks. Your enquiry has been sent to Costi.",
        "form.statusError": "The email form is not active yet or the network request failed. FormSubmit may require initial email activation."
    },
    ro: {
        "nav.about": "Despre",
        "nav.services": "Coaching",
        "nav.results": "Rezultate",
        "nav.contact": "Contact",
        "hero.eyebrow": "Antrenament Personal pentru Viata Reala",
        "hero.title": "Construieste forta, misca-te mai bine si ramai consecvent cu coachingul oferit de Costi Filofie.",
        "hero.text": "Costi ii ajuta pe profesionisti, parinti si incepatori completi sa se antreneze cu structura, incredere si un plan pe care il pot sustine in viata de zi cu zi.",
        "hero.primaryCta": "Programeaza o Consultatie",
        "hero.secondaryCta": "Vezi Optiunile de Coaching",
        "hero.point1": "coaching 1 la 1",
        "hero.point2": "programare prietenoasa pentru incepatori",
        "hero.point3": "ghidaj pentru nutritie si obiceiuri",
        "heroCard.kicker": "Cunoaste-ti Antrenorul",
        "heroCard.text": "Antrenor personal axat pe forta, slabire, postura si schimbare sustenabila pe termen lung.",
        "heroCard.locationLabel": "Locatie",
        "heroCard.sessionsLabel": "Sedinte",
        "heroCard.sessionsValue": "Fizic si online",
        "heroCard.specialtiesLabel": "Specialitati",
        "heroCard.specialtiesValue": "Forta, slabire, mobilitate",
        "trust.plan": "saptamani in programele de transformare",
        "trust.coaching": "coaching si responsabilizare",
        "trust.tailored": "adaptat la program si obiective",
        "about.eyebrow": "De Ce Lucreaza Clientii cu Costi",
        "about.title": "Coaching care se potriveste unei vieti ocupate, nu se lupta cu ea.",
        "about.text1": "Multi oameni nu au nevoie de mai multe antrenamente facute la intamplare. Au nevoie de un plan clar, feedback sincer si de cineva care stie sa transforme intentiile bune in actiune saptamanala. Exact pe asta este construit coachingul lui Costi.",
        "about.text2": "Fie ca obiectivul este sa slabesti, sa te misti fara durere, sa pui masa musculara sau sa te simti din nou confortabil in sala, procesul ramane simplu: evaluare, plan, coaching, adaptare, repetare.",
        "services.eyebrow": "Pilonii Coachingului",
        "services.title": "Claritate pe o singura pagina despre ce include programul.",
        "services.card1Title": "Antrenament de Forta",
        "services.card1Text": "Sedinte structurate in jurul tehnicii, progresiei si increderii sub incarcare.",
        "services.card2Title": "Suport pentru Slabire",
        "services.card2Text": "Atentie practica la calorii, obiceiuri alimentare mai bune si un ritm sustenabil si in afara salii.",
        "services.card3Title": "Mobilitate si Postura",
        "services.card3Text": "Lucru orientat pe miscare pentru a imbunatati amplitudinea, a reduce rigiditatea si a face antrenamentele sa se simta mai bine.",
        "services.card4Title": "Responsabilizare",
        "services.card4Text": "Check-in-uri, urmarirea progresului si obiective simple care ii mentin pe clienti in miscare.",
        "roadmap.eyebrow": "La Ce Se Pot Astepta Clientii",
        "roadmap.title": "Un plan practic chiar din prima zi.",
        "roadmap.step1Title": "Evaluare Initiala",
        "roadmap.step1Text": "Discutam obiectivele, accidentarile, istoricul de antrenament, programul si obiceiurile alimentare.",
        "roadmap.step2Title": "Program Personalizat",
        "roadmap.step2Text": "Construim un plan in functie de zilele disponibile, echipamentul accesibil si nivelul actual de fitness.",
        "roadmap.step3Title": "Coaching Saptamanal",
        "roadmap.step3Text": "Folosim progresie clara, feedback pe tehnica si ajustari realiste atunci cand viata devine aglomerata.",
        "roadmap.step4Title": "Progres Vizibil",
        "roadmap.step4Text": "Urmarim forta, energia, compozitia corporala si consecventa in loc sa ghicim.",
        "results.eyebrow": "Rezultate si Dovada Sociala",
        "results.title": "Inlocuieste aceste exemple cu rezultate reale ale clientilor atunci cand le ai disponibile.",
        "results.quote1": '"Lucrul cu Costi mi-a oferit pentru prima data structura. Am incetat sa mai sar peste sedinte, am devenit mai puternic si am simtit in sfarsit ca imi controlez rutina."',
        "results.footer1": "Client exemplu A, plan de forta pe 12 saptamani",
        "results.quote2": '"Cea mai mare schimbare a fost consecventa. Antrenamentele au fost provocatoare, dar suficient de realiste incat sa pot reveni saptamana de saptamana."',
        "results.footer2": "Client exemplu B, plan de recompozitie corporala",
        "results.quote3": '"Am inceput ca un incepator complet. Costi a facut sala sa para simpla, sigura si clara, ceea ce mi-a redus mult stresul."',
        "results.footer3": "Client exemplu C, coaching pentru incepatori",
        "faq.eyebrow": "Intrebari Comune",
        "faq.title": "Texte utile pentru vizitatorii interesati, dar care nu sunt inca pregatiti.",
        "faq.q1": "Am nevoie de experienta in sala?",
        "faq.a1": "Nu. Aceasta pagina este scrisa atat pentru incepatori, cat si pentru persoanele care revin dupa o pauza lunga.",
        "faq.q2": "Pot sa ma antrenez online?",
        "faq.a2": "Da. Costi poate lucra atat fizic, cat si online, cu check-in-uri si ajustari ale antrenamentului in functie de programul tau.",
        "faq.q3": "Cum incep?",
        "faq.a3": "Foloseste formularul de mai jos, iar Costi poate reveni cu o consultatie, un chestionar sau o sedinta de proba.",
        "contact.eyebrow": "Incepe Conversatia",
        "contact.title": "Programeaza o consultatie sau pune o intrebare.",
        "contact.text": "Trimite un mesaj mai jos, iar Costi poate reveni pe email pentru a discuta obiectivele, programul si formatul potrivit de coaching.",
        "contact.email": "Email: vlad_serbanik@yahoo.com",
        "contact.phone": "Telefon / WhatsApp: [Numarul Tau]",
        "contact.instagram": "Instagram: [@ContulTau]",
        "form.nameLabel": "Nume Complet",
        "form.namePlaceholder": "Numele tau complet",
        "form.emailLabel": "Adresa de Email",
        "form.emailPlaceholder": "tu@exemplu.com",
        "form.goalLabel": "Obiectiv Principal",
        "form.goalOption0": "Selecteaza una",
        "form.goalOption1": "Sa slabesc",
        "form.goalOption2": "Sa cresc masa musculara",
        "form.goalOption3": "Sa imi cresc forta",
        "form.goalOption4": "Sa ma misc cu mai putina durere",
        "form.goalOption5": "Sa revin la antrenamente",
        "form.messageLabel": "Spune-i lui Costi care este situatia ta",
        "form.messagePlaceholder": "La ce lucrezi in acest moment si ce te impiedica sa ajungi acolo?",
        "form.submit": "Trimite Cererea",
        "form.note": "FormSubmit va trimite cererile la vlad_serbanik@yahoo.com dupa activarea initiala a adresei.",
        "footer.copyPrefix": "©",
        "footer.copySuffix": "Costi Filofie Antrenor Personal",
        "footer.note": "Pozele demo sunt incarcate din Unsplash. Placeholderele ramase de inlocuit: locatia, telefonul, Instagramul, testimonialele clientilor si certificarile.",
        "form.statusSending": "Se trimite...",
        "form.statusSuccess": "Multumim. Mesajul tau a fost trimis catre Costi.",
        "form.statusError": "Formularul de email nu este activ inca sau cererea a esuat. FormSubmit poate solicita activarea initiala prin email."
    }
};

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const copy = translations[selectedLanguage];
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = selectedLanguage;
    document.title = titleMap[selectedLanguage];

    if (metaDescription) {
        metaDescription.setAttribute("content", metaDescriptionMap[selectedLanguage]);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");

        if (key && copy[key]) {
            element.textContent = copy[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");

        if (key && copy[key]) {
            element.setAttribute("placeholder", copy[key]);
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.language === selectedLanguage);
    });

    localStorage.setItem("costi-language", selectedLanguage);
}

if (year) {
    year.textContent = String(new Date().getFullYear());
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.language);
    });
});

applyLanguage(localStorage.getItem("costi-language") || "en");

if (form && status) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const currentLanguage = localStorage.getItem("costi-language") || "en";
        const copy = translations[currentLanguage] || translations.en;

        status.className = "form-status";
        status.textContent = copy["form.statusSending"];

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            form.reset();
            status.classList.add("is-success");
            status.textContent = copy["form.statusSuccess"];
        } catch (error) {
            status.classList.add("is-error");
            status.textContent = copy["form.statusError"];
        }
    });
}