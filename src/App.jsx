import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from './components/repeticao/ListaAlunos';

export default _ =>  
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silvis">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#4 Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="#3 Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#2 Com parâmetro" color="#E8B71A">
                <ComParametro 
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>
            
            <Card titulo="#1 Primeiro" color="#588C73">
                <Primeiro></Primeiro> 
            </Card>  
            </div>
            
    </div>
 