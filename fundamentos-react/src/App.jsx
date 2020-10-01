import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import './components/condicional/UsuarioInfo'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicao/DiretaPai'
import IndiretaPai from './components/comunicao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => 
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Mega Sena" color="#52be80">
                    <Mega />
            </Card>
            <Card titulo="#12 - Contador" color="#cbcba9">
                    <Contador numeroInicial={10} passoInicial={3} />
            </Card>

            <Card titulo="#11 - Compotente Controlado (Input)" color="#990000">
                    <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#ffd700">
                    <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#283655">
                    <DiretaPai />
            </Card>

            <Card titulo="#08 - Condicional" color="#7bc043">
                   <ParOuImpar numero={21}></ParOuImpar>
                   <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                    {/* <UsuarioInfo usuario={{}} ></UsuarioInfo>
                    <UsuarioInfo /> */}
            </Card>
            
            <Card titulo="#07 - Desafio Repetição" color="#3d2352">
                    <TabelaProdutos></TabelaProdutos>
            </Card>
            
            <Card titulo="#06 - Repetição Alunos" color="#6e7f80">
                    <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#f37735">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Joana" />
                    <FamiliaMembro nome="Marcela" />
                </Familia>
            </Card>
            
            <Card titulo="#04 - Desafio aleatório" color="#080">
                <Aleatorio min={4} max={10} />
            </Card>

            <Card titulo="#03 - Desafio aleatório" color="#005b96">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#854442">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Componente com parametros" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#fe9c8f">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>