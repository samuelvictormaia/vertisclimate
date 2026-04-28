import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Zap, TrendingDown, Sun, BarChart3, FileText, Calculator, ArrowRight, CheckCircle2, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { Logo } from "../components/Logo";

export function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Logo size="md" onClick={() => navigate("/")} />
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base">{t('nav.solutions')}</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base">{t('nav.howItWorks')}</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 text-sm xl:text-base">{t('nav.benefits')}</a>
            <button onClick={() => navigate("/contact")} className="text-gray-600 hover:text-gray-900 text-sm xl:text-base">{t('nav.contact')}</button>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => navigate("/login")}>{t('nav.login')}</Button>
            <Button size="sm" className="text-xs sm:text-sm" onClick={() => navigate("/platform")}>{t('nav.accessPlatform')}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto" onClick={() => navigate("/platform/simulator")}>
                <Calculator className="mr-2" size={18} />
                {t('hero.simulateFree')}
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto">
                {t('hero.talkSpecialist')}
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={18} />
                <span>{t('hero.noInvestment')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={18} />
                <span>{t('hero.guaranteedSavings')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={18} />
                <span>{t('hero.dedicatedSupport')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plataforma completa de gestão energética para empresas que querem reduzir custos e aumentar eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/platform/simulator")}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="text-blue-600" size={24} />
                </div>
                <CardTitle>Simulador de Economia</CardTitle>
                <CardDescription>
                  Calcule quanto sua empresa pode economizar com energia no mercado livre
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Simular agora <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/platform/marketplace")}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-green-600" size={24} />
                </div>
                <CardTitle>Marketplace de Energia</CardTitle>
                <CardDescription>
                  Compare fornecedores e contrate energia mais barata para seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Ver ofertas <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/platform/financing")}>
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="text-yellow-600" size={24} />
                </div>
                <CardTitle>Financiamento Solar</CardTitle>
                <CardDescription>
                  Financie seu projeto de energia solar com taxas especiais e payback rápido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Simular financiamento <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/platform")}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-purple-600" size={24} />
                </div>
                <CardTitle>Dashboard & Relatórios</CardTitle>
                <CardDescription>
                  Acompanhe consumo, economia e gestão completa de contratos em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Acessar dashboard <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Em 3 passos simples, sua empresa começa a economizar em energia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-3">Análise Gratuita</h3>
              <p className="text-gray-600">
                Nossa equipe analisa seu perfil de consumo e identifica oportunidades de economia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-3">Proposta Personalizada</h3>
              <p className="text-gray-600">
                Apresentamos as melhores opções de fornecedores e condições comerciais do mercado
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-3">Economia Imediata</h3>
              <p className="text-gray-600">
                Cuidamos de toda burocracia e você começa a economizar já na próxima fatura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Que Escolher a EnergyFin?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="text-blue-600 mb-3" size={32} />
                <CardTitle>Segurança e Confiabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mais de 500 empresas atendidas e R$ 50M em economia gerada
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="text-green-600 mb-3" size={32} />
                <CardTitle>Economia Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Garantia contratual de redução mínima de 20% nos custos de energia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="text-purple-600 mb-3" size={32} />
                <CardTitle>Gestão Completa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plataforma digital para acompanhamento em tempo real e relatórios detalhados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para Economizar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Faça uma simulação gratuita e descubra quanto sua empresa pode economizar
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => navigate("/platform/simulator")}>
            <Calculator className="mr-2" size={20} />
            Simular Economia Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size="sm" showTagline />
              <p className="text-sm mt-4">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Simulador</a></li>
                <li><a href="#" className="hover:text-white">Marketplace</a></li>
                <li><a href="#" className="hover:text-white">Financiamento Solar</a></li>
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white">Cases de Sucesso</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>contato@energyfin.com.br</li>
                <li>(11) 3000-0000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2026 {t('companyName')}. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
