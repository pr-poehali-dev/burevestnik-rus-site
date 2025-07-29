import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Физическая охрана",
      description: "Профессиональная охрана объектов квалифицированными сотрудниками",
      icon: "Shield",
      features: ["Круглосуточная охрана", "Патрулирование", "Контроль доступа"]
    },
    {
      title: "Техническая охрана",
      description: "Современные системы видеонаблюдения и сигнализации",
      icon: "Camera",
      features: ["Видеонаблюдение", "Пожарная сигнализация", "Охранная сигнализация"]
    },
    {
      title: "Пультовая охрана",
      description: "Мониторинг и быстрое реагирование с центрального пульта",
      icon: "Monitor",
      features: ["24/7 мониторинг", "Быстрое реагирование", "Связь с полицией"]
    },
    {
      title: "Личная охрана",
      description: "Персональная защита руководителей и VIP-персон",
      icon: "User",
      features: ["Персональная защита", "Сопровождение", "Анализ угроз"]
    }
  ];

  const licenses = [
    "Лицензия на охранную деятельность № 123456",
    "Сертификат ISO 9001:2015",
    "Лицензия на установку сигнализации № 789012",
    "Членство в Ассоциации охранных предприятий"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={32} className="text-accent" />
              <div>
                <h1 className="text-xl font-bold">БУРЕВЕСТНИК-РУС</h1>
                <p className="text-sm opacity-90">Частное охранное предприятие</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="hover:text-accent transition-colors">О компании</a>
              <a href="#licenses" className="hover:text-accent transition-colors">Лицензии</a>
              <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Надежная защита вашего бизнеса
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Профессиональные охранные услуги для предприятий и частных лиц. 
                Современные технологии и опытные специалисты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать охрану
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/fd3dcec1-feb2-4f5a-8d91-ae5966c4c73b.jpg" 
                alt="Профессиональный охранник" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} />
                  <span className="font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр охранных услуг для обеспечения безопасности вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <Badge variant="secondary">Лицензировано</Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ООО ЧОП "БУРЕВЕСТНИК-РУС" - ведущее охранное предприятие с многолетним опытом 
                работы в сфере обеспечения безопасности. Мы специализируемся на предоставлении 
                комплексных охранных услуг для бизнеса.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">защищенных объектов</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">сотрудников</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon name="Award" size={24} className="text-accent" />
                <span className="font-semibold">Сертифицированное качество услуг</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/2b8035ea-9130-4f34-bbe1-114629f88600.jpg" 
                alt="Системы видеонаблюдения" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-accent" />
                  <span className="font-semibold text-sm">Надежность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/504e6670-d094-4271-83c8-c225c8ed4aa3.jpg" 
                alt="Лицензии и сертификаты" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Лицензии и сертификаты</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Наша деятельность полностью лицензирована и сертифицирована. 
                Мы соответствуем всем требованиям законодательства в области охранной деятельности.
              </p>
              
              <div className="space-y-4">
                {licenses.map((license, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border">
                    <Icon name="FileCheck" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{license}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Info" size={20} className="text-accent" />
                  <span className="font-semibold text-accent">Гарантия качества</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Все документы проверены и актуальны. Мы работаем в строгом соответствии с законодательством РФ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Круглосуточно</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">info@burevest-rus.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">г. Москва</p>
                <p className="text-sm text-muted-foreground mt-2">ул. Охранная, д. 15</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Shield" size={28} className="text-accent" />
                <div>
                  <h3 className="font-bold">БУРЕВЕСТНИК-РУС</h3>
                  <p className="text-sm opacity-90">ООО ЧОП</p>
                </div>
              </div>
              <p className="text-sm opacity-75">
                Профессиональные охранные услуги с 2008 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Физическая охрана</li>
                <li>Техническая охрана</li>
                <li>Пультовая охрана</li>
                <li>Личная охрана</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@burevest-rus.ru</p>
                <p>г. Москва, ул. Охранная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 ООО ЧОП "БУРЕВЕСТНИК-РУС". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}