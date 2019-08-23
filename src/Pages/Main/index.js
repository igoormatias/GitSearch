/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';

import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        error: null,
        text: 'Digite aqui o nome do Autor + nome do repositório',
    };

    // Carregar os dados no localStorage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    // Salvar os dados no localStorage
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: false });

        // Validação de erros
        try {
            const { newRepo, repositories } = this.state;

            if (newRepo === '')
                throw 'Voce precisa indicar um repositório existente';

            // Validando se o repositório já existe
            const hasRepo = repositories.find(r => r.name === newRepo);

            if (hasRepo) throw 'Repositório duplicado';

            // Buscando repositório na api
            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                text: 'Digite aqui o nome do Autor + nome do repositório',
            });
        } catch (error) {
            this.setState({
                newRepo: '',
                error: true,
                text:
                    'Repositório inválido ou já está cadastrado, digite um repositório existente',
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { newRepo, repositories, loading, error, text } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit} error={error}>
                    <input
                        type="text"
                        placeholder={text}
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton loading={loading} error={error}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}

                        {error && <FaSadTear color="#FFF" size={14} />}
                    </SubmitButton>
                </Form>
                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
