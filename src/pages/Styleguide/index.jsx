import React from 'react';

const Styleguide = () => {
  return (
    <section className="page">
      <div className="grid -container">
        <div className="grid -wrap">
          <div className="grid -col" style={{paddingTop: '20px', paddingBottom: '20px', }}>
            <h1>Empresas Styleguide</h1> 
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col">
            <div className="logo -home">
              <img src={require('../../assets/images/logo-home@2x.png')} alt="Ioasys" />
            </div>
          </div>
          <div className="grid -col">
            <div className="icons" style={{backgroundColor: '#000000', padding: '20px', }}>
              <div className="logo -nav">
                <img src={require('../../assets/images/logo-nav@2x.png')} alt="Ioasys" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col">
            <div className="title">
              <h1 className="title -larger">
                Título Nível 1
              </h1>
              <h2 className="title -median">
                Título Nível 2
              </h2>
              <h3 className="title -smaller">
                Titúlo Nível 3
              </h3>
            </div>
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col">
            <div className="icons" style={{backgroundColor: '#000000', padding: '50px', }}>
              <i className="icon -back"></i> <br />
              <i className="icon -close"></i> <br />
              <i className="icon -eye"></i> <br />
              <i className="icon -letter"></i> <br />
              <i className="icon -padlock"></i> <br />
              <i className="icon -search"></i>
            </div>
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col">
            <div className="picture">
              <div className="picture -placeholder">
                <div className="picture -aspect d-388-147">
                  <div className="picture -figure">
                    <span>E1</span>
                  </div>
                </div>
              </div>
              <br />
              <div className="picture -placeholder">
                <div className="picture -aspect d-293-160">
                  <div className="picture -figure">
                    <span>E1</span>
                  </div>
                </div>
              </div>
              <br />
              <div className="picture -placeholder">
                <div className="picture -aspect d-293-160">
                  <div className="picture -figure">
                    <img src={require('../../assets/images/temp/temp-company.jpg')} alt="Empresa" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col">
            <div className="text">
              <p className="text -larger">
                A antiga Teoria dos Atos de Comércio decorrente da chamada codificação napoleônica nunca definiu muito bem o que eram as atividades mercantis, os chamados atos de comércio. A definição do que eram os atos de comércio não convenceu a doutrina, pois muitas atividades não eram consideradas comerciais por razões históricas, como era o caso da negociação de bens imobiliários. Além disso, com a constante inovação tecnológica do mercado, diversas novas atividades foram surgindo, mas não eram enumeradas como atos de comércio pela lentidão do processo legislativo.
              </p><br />
              <p className="text -median">
                Entre para se manter melhor informado sobre o sistema Empresas.
              </p><br />
              <p className="text -smaller">
                Credenciais informadas são inválidas, tente novamente.
              </p><br />
              <p className="text -info">
                Clique na busca para iniciar.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="grid -wrap">
          <div className="grid -col" style={{paddingBottom: '40px', }}>
            <div className="button">
              <button type="button" className="button -link -primary">
                <span>Entrar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Styleguide;