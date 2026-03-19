"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmall"
      background="noiseDiagonalGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Тести", id: "tests" },
            { name: "Тренування", id: "training" },
            { name: "Ошибки", id: "mistakes" },
            { name: "Про нас", id: "about" },
            { name: "Контакти", id: "contact" }
          ]}
          brandName="ПДР Україна"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Оволодійте Правилами дорожного руху України"
          description="Сучасна платформа для підготовки до екзамену ПДР з 80 офіційними екзаменаційними билетами, AI-помічником та інтерактивним тренуванням. Все що вам потрібно для успішної здачі екзамену."
          background={{ variant: "radial-gradient" }}
          tag="Офіційна платформа ПДР"
          tagAnimation="slide-up"
          buttons={[
            { text: "Почати тестування", href: "#tests" },
            { text: "Дізнатись більше", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/real-estate-composition_23-2147653336.jpg",              imageAlt: "Платформа для навчання ПДР"
            }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Про платформу ПДР Україна"
          description={[
            "ПДР Україна - це інноваційна онлайн-платформа для підготовки до екзамену з Правил дорожного руху. Ми пропонуємо повну структуру офіційних 80 екзаменаційних билетів, які відповідають актуальним стандартам українського МВС.",            "Наша платформа забезпечує: режим реального екзамену з обмеженням помилок, детальні пояснення до кожної відповіді, можливість переглянути помилки, прогрес тестування та інтеграцію AI-помічника для персоналізованого навчання.",            "Більше 50,000+ користувачів вже успішно подолали тест. Приєднуйтесь до них та здайте ПДР з першої спроби!"
          ]}
          buttons={[
            { text: "Розпочати безкоштовно", href: "#tests" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Ключові можливості платформи"
          description="Все необхідне для успішної підготовки до ПДР екзамену в одному місці"
          tag="Функціональність"
          tagAnimation="slide-up"
          buttons={[
            { text: "Дослідити тести", href: "#tests" }
          ]}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "80 Офіційних екзаменаційних билетів",              description: "Повна структура офіційних билетів ПДР України, які відповідають актуальним екзаменаційним стандартам",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/college-students-cramming-outdoor_23-2149649371.jpg",                imageAlt: "Екзаменаційна система тестування"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/college-students-cramming-outdoor_23-2149649371.jpg",                imageAlt: "Інтерфейс тестування"
              }
            },
            {
              id: 2,
              title: "AI-помічник 24/7",              description: "Інтегрований чат з штучним інтелектом на базі Gemini 3.1 Pro, який пояснює складні питання та допомагає розуміти помилки",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-typing-keyboard_23-2148994212.jpg",                imageAlt: "AI-помічник в чаті"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-typing-keyboard_23-2148994212.jpg",                imageAlt: "AI-інтеграція"
              }
            },
            {
              id: 3,
              title: "Відстеження прогресу",              description: "Детальна статистика тестування, історія помилок та розширена аналітика вашого прогресу навчання",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/guy-making-table-paper_23-2148288563.jpg",                imageAlt: "Статистика прогресу"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/guy-making-table-paper_23-2148288563.jpg",                imageAlt: "Аналітика результатів"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Статистика успіху"
          description="Числа які говорять самі за себе - нашим користувачам вдається здавати ПДР з першої спроби"
          tag="Результати"
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "50,000+", description: "Активних користувачів" },
            { id: "2", value: "95%", description: "Успішних тестувань" },
            { id: "3", value: "80", description: "Офіційних екзаменаційних билетів" },
            { id: "4", value: "24/7", description: "AI-помічник онлайн" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Відгуки користувачів"
          description="Що кажуть про нас користувачи, які вже успішно здали ПДР"
          tag="Успіхи"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Максим Коваленко",              role: "Студент",              testimonial: "Вражаюча платформа! Здав ПДР з першої спроби. AI-помічник допомагав розуміти складні питання.",              imageSrc: "http://img.b2bpic.net/free-photo/bartender-working-club_23-2150497620.jpg",              imageAlt: "Максим Коваленко"
            },
            {
              id: "2",              name: "Анна Петренко",              role: "Водій",              testimonial: "Зручний інтерфейс і чітка структура. Всі 80 билетів представлені правильно. Рекомендую!",              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-beautiful-young-woman-posing_1301-3598.jpg",              imageAlt: "Анна Петренко"
            },
            {
              id: "3",              name: "Іван Сич",              role: "Автолюбитель",              testimonial: "Краща платформа для підготовки до екзамену. Детальні пояснення до кожної помилки змінили все.",              imageSrc: "http://img.b2bpic.net/free-photo/man-teacher-wearing-glasses-checking-class-register-looking-camera-happy-pleased-smiling-cheerfully-sitting-school-desk-front-blackboard-classroom_141793-131614.jpg",              imageAlt: "Іван Сич"
            },
            {
              id: "4",              name: "Олена Гришко",              role: "Професіонал",              testimonial: "Скажу чесно - це найкраща платформа на українському ринку. Сучасна, швидка і ефективна.",              imageSrc: "http://img.b2bpic.net/free-vector/flat-businesswoman-character-with-facial-expressions_23-2147608186.jpg",              imageAlt: "Олена Гришко"
            },
            {
              id: "5",              name: "Дмитро Лесик",              role: "Новий водій",              testimonial: "Як новачок я був впевнений в своїх знаннях завдяки цій платформі. Хлопці знають свою роботу!",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-library_23-2149204750.jpg",              imageAlt: "Дмитро Лесик"
            },
            {
              id: "6",              name: "Марія Ковальчук",              role: "Студентка",              testimonial: "Це не просто тест - це справжня підготовка до реального екзамену. Не жалкую про гроші!",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-beautiful-smiling-brunette-model-trendy-girl-posing-street_158538-17029.jpg",              imageAlt: "Марія Ковальчук"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Часто задавані питання"
          description="Відповіді на основні запитання про платформу, тестування та використання"
          tag="Допомога"
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-support-customer-woman-talking-into-headset-microphone-with-call-center-customer-while-working-startup-company-office-caucasian-female-consultant-providing-telemarketing-service_482257-28282.jpg"
          imageAlt="Допомога та підтримка"
          mediaAnimation="slide-up"
          mediaPosition="right"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqs={[
            {
              id: "1",              title: "Скільки коштує доступ до платформи?",              content: "Базовий доступ до всіх 80 билетів є безкоштовним. Преміум-функції з розширеною аналітикою та пріоритетною підтримкою від AI-помічника доступні за мінімальну плату."
            },
            {
              id: "2",              title: "Чи все 80 билетів відповідають офіційним екзаменам?",              content: "Так, всі 80 билетів повністю відповідають актуальним екзаменаційним билетам ПДР України, затвердженим Міністерством внутрішніх справ."
            },
            {
              id: "3",              title: "Як спілкуватися з AI-помічником?",              content: "AI-помічник доступний 24/7 в чаті на платформі. Ви можете задавати питання про будь-яке питання з екзамену, питати поясненння помилок або дізнатися деталі про правила дорожного руху."
            },
            {
              id: "4",              title: "Можу я переглянути свої помилки?",              content: "Так, в розділі 'Ошибки' ви можете переглянути всі питання, на які ви відповіли неправильно, разом з детальними поясненнями та рекомендаціями для повторення."
            },
            {
              id: "5",              title: "Як працює режим реального екзамену?",              content: "Режим реального екзамену точно симулює умови офіційного тесту: максимум 2 помилки дозволені, після третьої помилки тест завершується автоматично, як на справжньому екзамені."
            },
            {
              id: "6",              title: "Чи можу я вивчати на мобільному телефоні?",              content: "Абсолютно! Платформа повністю адаптована для мобільних пристроїв (iOS та Android). Ви можете тренуватися в дорозі, на перерві або вдома на своєму смартфоні."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Зв'яжіться з нами"
          description="Маєте питання чи пропозицію? Ми завжди готові допомогти. Напишіть нам, і ми відповімо якомога швидше."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/sales-assistant-being-employed-customer-care-support-job-working-telemarketing-call-center-helpdesk-female-receptionist-with-helpline-service-helping-clients-remote-communication_482257-43021.jpg"
          imageAlt="Контакти і підтримка"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputs={[
            { name: "name", type: "text", placeholder: "Ваше ім'я" },
            { name: "email", type: "email", placeholder: "Ваша електронна пошта" }
          ]}
          textarea={{
            name: "message",            placeholder: "Ваше повідомлення",            rows: 5
          }}
          buttonText="Надіслати повідомлення"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="ПДР Україна"
          columns={[
            {
              items: [
                { label: "Тести", href: "#tests" },
                { label: "Тренування", href: "#training" },
                { label: "Мої помилки", href: "#mistakes" },
                { label: "Статистика", href: "#stats" }
              ]
            },
            {
              items: [
                { label: "Про платформу", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Контакти", href: "#contact" },
                { label: "Блог", href: "https://blog.pdr-ukraine.com" }
              ]
            },
            {
              items: [
                { label: "Політика приватності", href: "/privacy" },
                { label: "Умови використання", href: "/terms" },
                { label: "Відповідальність", href: "/disclaimer" },
                { label: "GDPR", href: "/gdpr" }
              ]
            },
            {
              items: [
                { label: "Facebook", href: "https://facebook.com/pdr-ukraine" },
                { label: "Instagram", href: "https://instagram.com/pdr-ukraine" },
                { label: "Twitter", href: "https://twitter.com/pdr-ukraine" },
                { label: "YouTube", href: "https://youtube.com/pdr-ukraine" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}