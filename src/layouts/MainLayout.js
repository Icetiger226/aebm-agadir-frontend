import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Home, Users, Calendar, MessageSquare, MapPin, DollarSign, BookOpen, Settings } from 'lucide-react';

const MainLayout = ({ children, isAuthenticated = false, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/');
  };

  const mainMenuItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/about', label: 'Qui sommes-nous?', icon: Users },
    { path: '/news', label: 'Actualités', icon: BookOpen },
    { path: '/events', label: 'Événements', icon: Calendar },
    { path: '/forum', label: 'Forum', icon: MessageSquare },
    { path: '/guide', label: 'Vie à Agadir', icon: MapPin },
  ];

  const memberMenuItems = isAuthenticated ? [
    { path: '/profile', label: 'Mon Profil', icon: User },
    { path: '/directory', label: 'Annuaire', icon: Users },
    { path: '/treasury', label: 'Trésorerie', icon: DollarSign },
    { path: '/admin', label: 'Administration', icon: Settings, adminOnly: true },
  ] : [];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              {/* Drapeau du Burkina Faso */}
              <div className="relative w-10 h-7 sm:w-12 sm:h-8 rounded overflow-hidden shadow-md border border-gray-200 flex-shrink-0">
                {/* Bande rouge (haut) */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
                {/* Bande verte (bas) */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-600"></div>
                {/* Étoile jaune au centre */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.5"/>
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-red-600 leading-tight">AEBM</h1>
                <p className="text-xs sm:text-sm text-green-600 font-medium">Agadir</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 xl:px-4 py-2 rounded-lg font-medium text-xs xl:text-sm transition-all ${
                    isActive(item.path)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 px-3 xl:px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <User size={16} className="text-red-600 xl:w-[18px] xl:h-[18px]" />
                    <span className="font-medium text-gray-700 text-xs xl:text-sm">Mon Compte</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                      {memberMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <item.icon size={18} className="text-gray-600" />
                          <span className="text-gray-700 text-sm">{item.label}</span>
                        </Link>
                      ))}
                      <hr className="my-2 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 w-full hover:bg-red-50 transition-colors text-red-600 text-sm"
                      >
                        <LogOut size={18} />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 xl:px-4 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-all text-xs xl:text-sm"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 xl:px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all shadow-sm text-xs xl:text-sm"
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-red-600 transition-colors p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="space-y-1">
                {mainMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        isActive(item.path)
                          ? 'bg-red-50 text-red-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  );
                })}
                
                {isAuthenticated && (
                  <>
                    <hr className="my-2 border-gray-200" />
                    {memberMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                        >
                          <Icon size={20} />
                          <span className="font-medium text-sm">{item.label}</span>
                        </Link>
                      );
                    })}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all w-full"
                    >
                      <LogOut size={20} />
                      <span className="font-medium text-sm">Déconnexion</span>
                    </button>
                  </>
                )}
                
                {!isAuthenticated && (
                  <>
                    <hr className="my-2 border-gray-200" />
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-center text-red-600 font-medium hover:bg-red-50 rounded-lg transition-all text-sm"
                    >
                      Connexion
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-center bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all text-sm"
                    >
                      S'inscrire
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-transparent">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-xl font-bold text-yellow-400">AEBM Agadir</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                L'AEBM Agadir est une association qui rassemble les étudiants et stagiaires burkinabè résidant à Agadir.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold mb-4 text-sm">Liens Rapides</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Qui sommes-nous ?</Link>
                <Link to="/news" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Actualités</Link>
                <Link to="/events" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Événements</Link>
                <Link to="/forum" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Forum</Link>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold mb-4 text-sm">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 contact@aebm-agadir.ma</p>
                <p>📱 +212 6XX XXX XXX</p>
                <p>📍 Agadir, Maroc</p>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold mb-4 text-sm">Suivez-nous</h3>
              <div className="space-y-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Instagram</a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500 text-xs sm:text-sm px-4">
            <p>&copy; 2025 AEBM Agadir. Tous droits réservés.</p>
            <p className="mt-1">Développé avec SANON ANTONY ET TRAORE IMRANE pour la communauté burkinabè</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
