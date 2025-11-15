import React, { useState } from 'react';
import { DollarSign, CreditCard, TrendingUp, Download, CheckCircle, Clock, XCircle, Calendar, PieChart } from 'lucide-react';

const Treasury = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const cotisationInfo = {
    amount: 200,
    currency: 'MAD',
    dueDate: '2025-12-31',
    status: 'pending', // 'paid', 'pending', 'overdue'
    lastPayment: null
  };

  const paymentMethods = [
    {
      id: 'orange',
      name: 'Orange Money',
      icon: '📱',
      description: 'Paiement mobile instantané',
      available: true
    },
    {
      id: 'cmi',
      name: 'Carte Bancaire (CMI)',
      icon: '💳',
      description: 'Visa, Mastercard, CIB',
      available: true
    },
    {
      id: 'virement',
      name: 'Virement Bancaire',
      icon: '🏦',
      description: 'Transfert bancaire direct',
      available: true
    }
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-10-15',
      description: 'Cotisation annuelle 2024-2025',
      amount: 100,
      status: 'completed',
      method: 'Orange Money',
      reference: 'TRX-2024-001234'
    },
    {
      id: 2,
      date: '2024-05-20',
      description: 'Événement Soirée Culturelle',
      amount: 50,
      status: 'completed',
      method: 'CMI',
      reference: 'TRX-2024-000856'
    },
    {
      id: 3,
      date: '2023-11-10',
      description: 'Cotisation annuelle 2023-2024',
      amount: 100,
      status: 'completed',
      method: 'Virement',
      reference: 'TRX-2023-002145'
    }
  ];

  const budgetOverview = {
    totalRevenue: 15000,
    totalExpenses: 8500,
    balance: 6500,
    membersPaid: 145,
    totalMembers: 150
  };

  const expenseCategories = [
    { name: 'Événements', amount: 4200, percentage: 49, color: 'bg-blue-500' },
    { name: 'Communication', amount: 1500, percentage: 18, color: 'bg-green-500' },
    { name: 'Logistique', amount: 1800, percentage: 21, color: 'bg-yellow-500' },
    { name: 'Administration', amount: 1000, percentage: 12, color: 'bg-purple-500' }
  ];

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Veuillez sélectionner une méthode de paiement');
      return;
    }
    alert(`Redirection vers ${paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}...`);
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      completed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Payé' },
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'En attente' },
      overdue: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle, label: 'En retard' }
    };
    const config = statusMap[status] || statusMap.pending;
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
        <Icon size={14} />
        {config.label}
      </span>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Trésorerie</h1>
          </div>
          <p className="text-xl opacity-90">Gérez vos cotisations en toute transparence</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-emerald-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CreditCard className="text-emerald-600" size={28} />
                Payer ma cotisation
              </h2>

              {/* Cotisation Amount */}
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 mb-6 border-2 border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Montant de la cotisation annuelle</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      {cotisationInfo.amount} {cotisationInfo.currency}
                    </p>
                  </div>
                  {getStatusBadge(cotisationInfo.status)}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  Date limite: {new Date(cotisationInfo.dueDate).toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Choisir une méthode de paiement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      disabled={!method.available}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedPaymentMethod === method.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300 bg-white'
                      } ${!method.available && 'opacity-50 cursor-not-allowed'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{method.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{method.name}</h4>
                          <p className="text-sm text-gray-600">{method.description}</p>
                          {!method.available && (
                            <span className="text-xs text-red-600 font-medium mt-1 block">
                              Bientôt disponible
                            </span>
                          )}
                        </div>
                        {selectedPaymentMethod === method.id && (
                          <CheckCircle className="text-emerald-600" size={24} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={!selectedPaymentMethod}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  selectedPaymentMethod
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <CreditCard size={24} />
                Procéder au paiement
              </button>

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-900">
                  <strong>💡 Information:</strong> Votre paiement sera confirmé instantanément. 
                  Vous recevrez un reçu par email.
                </p>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="text-emerald-600" size={28} />
                  Historique des paiements
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <Download size={18} />
                  Exporter
                </button>
              </div>

              {transactions.length > 0 ? (
                <div className="space-y-4">
                  {transactions.map(transaction => (
                    <div
                      key={transaction.id}
                      className="border-2 border-gray-200 rounded-xl p-4 hover:border-emerald-300 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">{transaction.description}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(transaction.date).toLocaleDateString('fr-FR', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-emerald-600">
                            {transaction.amount} MAD
                          </p>
                          {getStatusBadge(transaction.status)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-gray-200">
                        <span>Méthode: {transaction.method}</span>
                        <span className="font-mono text-xs">Réf: {transaction.reference}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <p className="text-gray-600">Aucune transaction pour le moment</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Overview (For members to see transparency) */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-emerald-600" size={20} />
                Vue d'ensemble
              </h3>
              
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Fonds totaux</p>
                  <p className="text-3xl font-bold text-emerald-600">
                    {budgetOverview.balance.toLocaleString()} MAD
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {budgetOverview.totalRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600">Recettes</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-red-600">
                      {budgetOverview.totalExpenses.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600">Dépenses</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Cotisations collectées</span>
                    <span className="font-bold text-gray-900">
                      {budgetOverview.membersPaid}/{budgetOverview.totalMembers}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full"
                      style={{ width: `${(budgetOverview.membersPaid / budgetOverview.totalMembers) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="text-emerald-600" size={20} />
                Dépenses par catégorie
              </h3>
              
              <div className="space-y-4">
                {expenseCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="font-bold text-gray-900">
                        {category.amount.toLocaleString()} MAD
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`${category.color} h-full rounded-full transition-all`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold mb-3">Transparence financière</h3>
              <p className="text-sm opacity-90 mb-4">
                Les rapports financiers détaillés sont publiés trimestriellement et sont accessibles à tous les membres.
              </p>
              <button className="w-full py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                Télécharger le rapport
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
