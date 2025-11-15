import React, { useState } from 'react';
import { User, Mail, Phone, School, BookOpen, MapPin, Calendar, Edit2, Save, X, Camera } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Aminata',
    lastName: 'Ouedraogo',
    email: 'aminata.ouedraogo@exemple.com',
    phone: '+212 6XX XXX XXX',
    university: 'Université Ibn Zohr',
    filiere: 'Génie Informatique',
    niveau: 'M1',
    statut: 'Étudiante',
    dateInscription: '2023-09-15',
    bio: 'Étudiante en Master Génie Informatique passionnée par le développement web et l\'intelligence artificielle.',
    ville: 'Agadir',
    pays: 'Burkina Faso',
  });

  const [editData, setEditData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...profileData });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
    alert('Profil mis à jour avec succès !');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const membershipInfo = {
    memberNumber: 'AEBM-2023-147',
    joinDate: new Date(profileData.dateInscription).toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }),
    cotisationStatus: 'À jour',
    eventsAttended: 12,
    forumPosts: 28
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white shadow-xl">
                {profileData.firstName[0]}{profileData.lastName[0]}
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-lg">
                <Camera size={20} className="text-gray-900" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">
                {profileData.firstName} {profileData.lastName}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                {profileData.statut} • {profileData.filiere}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium">
                  {profileData.university}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium">
                  {profileData.niveau}
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                  Membre actif
                </span>
              </div>
            </div>

            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="px-6 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Edit2 size={20} />
                Modifier
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <User className="text-red-600" size={24} />
                  Informations Personnelles
                </h2>
                {isEditing && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <Save size={18} />
                      Sauvegarder
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <X size={18} />
                      Annuler
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.lastName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-gray-400" />
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-gray-400" />
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={editData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.phone}</p>
                    )}
                  </div>
                </div>

                {/* University */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Université</label>
                  <div className="flex items-center gap-2">
                    <School size={18} className="text-gray-400" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="university"
                        value={editData.university}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.university}</p>
                    )}
                  </div>
                </div>

                {/* Filière */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filière</label>
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-400" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="filiere"
                        value={editData.filiere}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.filiere}</p>
                    )}
                  </div>
                </div>

                {/* Niveau */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
                  {isEditing ? (
                    <select
                      name="niveau"
                      value={editData.niveau}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option>L1</option>
                      <option>L2</option>
                      <option>L3</option>
                      <option>M1</option>
                      <option>M2</option>
                      <option>Doctorat</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">{profileData.niveau}</p>
                  )}
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-gray-400" />
                    <p className="text-gray-900">{profileData.ville}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                )}
              </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mon Activité</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{membershipInfo.eventsAttended}</div>
                  <div className="text-sm text-gray-600">Événements</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{membershipInfo.forumPosts}</div>
                  <div className="text-sm text-gray-600">Posts Forum</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">À jour</div>
                  <div className="text-sm text-gray-600">Cotisation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Card */}
            <div className="bg-gradient-to-br from-red-600 to-green-600 rounded-xl shadow-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Carte de Membre</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs opacity-75 mb-1">Numéro de membre</p>
                  <p className="font-mono font-bold">{membershipInfo.memberNumber}</p>
                </div>
                <div>
                  <p className="text-xs opacity-75 mb-1">Membre depuis</p>
                  <p className="font-semibold">{membershipInfo.joinDate}</p>
                </div>
                <div>
                  <p className="text-xs opacity-75 mb-1">Statut cotisation</p>
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    {membershipInfo.cotisationStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions Rapides</h3>
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Payer ma cotisation
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all">
                  Mes événements
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all">
                  Mes publications
                </button>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Confidentialité</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Profil visible dans l'annuaire</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-red-600 rounded" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Afficher mon email</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Afficher mon téléphone</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
