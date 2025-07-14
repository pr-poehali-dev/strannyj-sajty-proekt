import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-emerald-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-float"></div>
        <nav className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="text-2xl font-playfair font-bold text-gray-800">CreativeCorp</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                🚀 Инновации в IT
              </Badge>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-800 mb-6 leading-tight">
                Создаем
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"> будущее </span>
                вместе с вами
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-inter">
                Мы - команда креативных разработчиков, которая превращает смелые идеи в инновационные цифровые решения. Ваш успех - наша миссия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                  <Icon name="Rocket" className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Play" className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl rotate-3 animate-float"></div>
              <img 
                src="/img/03d212e1-bb68-491b-87e7-a4bbb7beb073.jpg" 
                alt="Команда разработчиков" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-accent to-primary text-white">
              💡 Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Что мы умеем делать
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл разработки от идеи до запуска в продакшн
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Code",
                title: "Веб-разработка",
                description: "Создание современных веб-приложений на React, Vue, Angular с использованием последних технологий",
                color: "from-primary to-purple-600"
              },
              {
                icon: "Smartphone",
                title: "Мобильные приложения",
                description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android",
                color: "from-secondary to-pink-600"
              },
              {
                icon: "Palette",
                title: "UI/UX Дизайн",
                description: "Создание интуитивных и красивых пользовательских интерфейсов с фокусом на UX",
                color: "from-accent to-green-600"
              },
              {
                icon: "Database",
                title: "Backend разработка",
                description: "Надежные серверные решения с использованием Node.js, Python, Go и современных баз данных",
                color: "from-purple-500 to-indigo-600"
              },
              {
                icon: "Cloud",
                title: "DevOps & Cloud",
                description: "Настройка CI/CD, контейнеризация, деплой в облачные платформы AWS, GCP, Azure",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: "Shield",
                title: "Кибербезопасность",
                description: "Аудит безопасности, пентестинг, внедрение систем защиты информации",
                color: "from-red-500 to-orange-600"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-inter">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80 p-0">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent text-white">
              ⭐ Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Что говорят о нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Иванов",
                position: "CEO, TechStart",
                rating: 5,
                review: "Команда CreativeCorp превзошла все ожидания! Они создали для нас революционное веб-приложение, которое увеличило нашу конверсию на 300%."
              },
              {
                name: "Мария Петрова",
                position: "Маркетинг-директор, InnovateCorp",
                rating: 5,
                review: "Профессиональный подход, креативные решения и невероятная скорость работы. Рекомендую всем, кто ищет качественную разработку!"
              },
              {
                name: "Дмитрий Сидоров",
                position: "Основатель, StartupLab",
                rating: 5,
                review: "Благодаря CreativeCorp наш стартап получил мощную техническую платформу. Теперь мы готовы к масштабированию на международный рынок."
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{review.name[0]}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-playfair">{review.name}</CardTitle>
                      <CardDescription className="text-gray-600">{review.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-inter italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-accent to-primary text-white">
              ❓ Часто задаваемые вопросы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Ответы на ваши вопросы
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Сколько времени занимает разработка проекта?",
                  answer: "Время разработки зависит от сложности проекта. Простые сайты - 2-4 недели, сложные веб-приложения - 2-6 месяцев. Мы всегда обсуждаем сроки на этапе планирования."
                },
                {
                  question: "Какие технологии вы используете?",
                  answer: "Мы работаем с современным стеком: React, Vue, Angular, Node.js, Python, TypeScript, PostgreSQL, MongoDB и многими другими. Выбор технологий зависит от задач проекта."
                },
                {
                  question: "Предоставляете ли вы поддержку после запуска?",
                  answer: "Да, мы предоставляем техническую поддержку и сопровождение проектов. Включает в себя исправление багов, обновления, консультации и развитие функционала."
                },
                {
                  question: "Как происходит процесс разработки?",
                  answer: "Мы используем Agile-подход: анализ требований → прототипирование → итеративная разработка → тестирование → деплой. Регулярные демо и обратная связь на каждом этапе."
                },
                {
                  question: "Сколько стоят ваши услуги?",
                  answer: "Стоимость индивидуальна для каждого проекта. Зависит от сложности, функционала и сроков. Предлагаем бесплатную консультацию для оценки вашего проекта."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-playfair text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white">
              📞 Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Расскажите о вашей идее, и мы превратим её в реальность
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">Телефон</h3>
                  <p className="text-white/90">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">Email</h3>
                  <p className="text-white/90">hello@creativecorp.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">Адрес</h3>
                  <p className="text-white/90">Москва, ул. Инновационная, 1</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Оставьте заявку</CardTitle>
                <CardDescription className="text-white/80">
                  Мы свяжемся с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-white text-sm">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
                <span className="text-xl font-playfair font-bold">CreativeCorp</span>
              </div>
              <p className="text-gray-400 font-inter">
                Создаем инновационные цифровые решения для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreativeCorp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}