import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function UserData() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dados Pessoais
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Nome completo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        fullWidth
                        autoComplete="CPF"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="DataNascimento"
                        name="DataNascimento"
                        label="Data de nascimento"
                        fullWidth
                        autoComplete="Data de nascimento"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="telefone"
                        name="telefone"
                        label="Telefone"
                        fullWidth
                        autoComplete="telefone"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="grupo_prioritario" name="grupo_prioritario" label="Grupo Prioritario" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="endereco"
                        name="endereco"
                        label="Endereço"
                        fullWidth
                        autoComplete="endereco"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}