import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function VacinaData() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Unidade de vacina
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="Cidade" label="Cidade" fullWidth autoComplete="Cidade" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="Data_hora_agendamento"
                        label="Data hora agendamento"
                        fullWidth
                        autoComplete="Data_hora_agendamento"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="necessidade_especiais" label="Necessidade especiais" fullWidth autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="observações"
                        label="observacoes"
                        fullWidth
                        autoComplete="cc-csc"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}