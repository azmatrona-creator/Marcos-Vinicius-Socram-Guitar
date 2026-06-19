export class ComprarRepository {
  constructor(database) {
    this.database = database;
  }

  async getFood() {
    try {
      const sql = "SELECT * FROM comprar";
      const result = await this.database.query(sql);
      return result.rows;
    } catch (erro) {
      console.error("Erro em getFood no banco de dados:", erro);
      return { error: "Erro ao buscar registros no banco de dados." };
    }
  }

  async getcomprarById(id) {
    try {
      const sql = "SELECT name, price FROM comprar WHERE id = $1";
      const result = await this.database.query(sql, [id]);
      return result.rows;
    } catch (erro) {
      console.error(`Erro em getcomprarById para o ID ${id}:`, erro);
      return { error: "Erro ao buscar o item por ID." };
    }
  }

  async getFillingsById(id) {
    try {
      const sql = "SELECT name, price FROM filling WHERE id_comprar = $1";
      const result = await this.database.query(sql, [id]);
      return result.rows;
    } catch (erro) {
      console.error(`Erro em getFillingsById para o ID ${id}:`, erro);
      return { error: "Erro ao buscar os recheios do item." };
    }
  }
}