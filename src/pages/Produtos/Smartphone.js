import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';

import smartphone from '../../assets/imagens/phone6.jpg';

class Smartphone extends Component {
    render() {
      return <>
        <Menu></Menu>
          <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <a href="#"><img src={smartphone} alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
          </div>
            <hr className="hr"/>
        
            <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src={smartphone} alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <a href="#"><img src={smartphone} alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
          </div>
            

        <Rodape/>
    </>
 }
}

export default Smartphone;