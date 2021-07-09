import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from '../Titulo';
import { getAgendamentos } from '../../services/Axios'

export default function Agendamentos() {

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(async () => {
        try {
            let a = await getAgendamentos();
            setAgendamentos(a);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <React.Fragment>
            <Titulo>Agendamentos</Titulo>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Data Criação</TableCell>
                        <TableCell>Data/Hora do Agendamento</TableCell>
                        <TableCell>Necessidade Especial</TableCell>
                        <TableCell>Observações</TableCell>
                        <TableCell align="right">Data/Hora alteração</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {agendamentos.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell>{row.data_criacao}</TableCell>
                            <TableCell>{row.data_hora_agendamento}</TableCell>
                            <TableCell>{row.necessidade_especiais}</TableCell>
                            <TableCell>{row.observacoes}</TableCell>
                            <TableCell align="right">{row.data_alteracao}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}