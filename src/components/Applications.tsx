import React from 'react';
// import reactLogo from '../assets/react.svg'; // Placeholder image - plus utilisé
import './Applications.css'; // Import the CSS file

const Applications = () => {
  const imgMaison = '/images_style-parisien-interieur-salon-mobilier-design-danois.jpg';
  const imgAffaires = '/images_bureaux-paris-landmark-architecture-img~70e1d30007ed12cd_4-1374-1-7dd7913.jpg';
  const imgHoReCa = '/images_images_cafe_parisien.jpg';

  return (
    <section className="applications-section">
      <h2>Votre confort, partout et sans compromis.</h2>
      <p>
        Imaginez une climatisation qui se fond dans votre décor, sans bruit ni unité extérieure visible. Notre solution est conçue pour s'intégrer parfaitement à votre environnement, vous offrant performance et discrétion. Découvrez comment nous transformons chaque espace.
      </p>

      {/* Ancienne div applications-grid supprimée */}

        {/* Section Résidentiel */}
        <div className="application-category">
          <img src={'/style-parisien-interieur-salon-mobilier-design-danois.jpg'} className="application-img" alt="Climatisation pour appartements et résidences" />
          <div className="application-content">
            <h3>Pour votre Maison</h3>
            <p>
              Votre chez-vous est un havre de paix. Nous vous offrons une climatisation invisible et silencieuse, idéale pour les appartements, les résidences de prestige ou les maisons avec des exigences esthétiques. Fini le bruit et les tracas avec le voisinage : profitez d'une sérénité absolue.
            </p>
          </div>
        </div>

        {/* Section Commercial */}
        <div className="application-category">
          <img src={'/bureaux-paris-landmark-architecture-img~70e1d30007ed12cd_4-1374-1-7dd7913.jpg'} className="application-img" alt="Climatisation pour bureaux et espaces commerciaux" />
          <div className="application-content">
            <h3>Pour vos Bureaux</h3>
            <p>
              L'image de votre entreprise est essentielle. Nos systèmes s'installent rapidement et discrètement dans vos bureaux, showrooms ou cabinets professionnels. Offrez un confort optimal à vos clients et collaborateurs, sans compromettre l'esthétique ou l'harmonie de vos espaces.
            </p>
          </div>
        </div>

        {/* Section HoReCa renommée */}
        <div className="application-category">
          <img src={'/images_cafe_parisien.jpg'} className="application-img" alt="Climatisation pour Cafés et Hôtels" />
          <div className="application-content">
            <h3>Cafés & Hôtels</h3>
            <p>
              Dans les cafés, hôtels, restaurants ou spas, l'ambiance compte. Notre solution garantit une discrétion totale, un silence apaisant et une efficacité énergétique, s'intégrant sans effort pour que vos clients profitent pleinement de leur expérience, sans aucune nuisance.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Applications;
