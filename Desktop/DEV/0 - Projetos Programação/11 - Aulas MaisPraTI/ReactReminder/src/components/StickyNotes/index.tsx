import { Conteiner, Grid } from './styles';

export function StickyNotes() {
  return (
    <>
      <Conteiner>
        <div className="reminderTitle">
          <h1>Lembretes</h1>
        </div>
        <Grid>
          <div>
            <h2>Título</h2>
            <p>Descrição</p>
          </div>
        </Grid>
      </Conteiner>
    </>
  );
}
