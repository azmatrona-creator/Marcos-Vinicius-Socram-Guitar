import { database } from "./database.js";

import { ComprarRepository } from "./repository.js"; 


const comprarRep = new ComprarRepository(database);

export async function getcomprar(request, response) {
  try {
    const resultDB = await comprarRep.getFood();

    if (resultDB && resultDB.error) {
      return response.status(500).json({ error: resultDB.error });
    }

    return response.status(200).json(resultDB);
  } catch (err) {
    console.error("Erro no controller getcomprar:", err);
    return response.status(500).json({ error: "Erro interno no servidor." });
  }
}

export async function getcomprarById(request, response) {
  const id = request.params.id;

  try {
    const resultFood = await comprarRep.getcomprarById(id);

    
    if (resultFood && resultFood.error) {
      return response.status(500).json({ error: resultFood.error });
    }

    if (!resultFood || resultFood.length === 0) {
      return response.status(404).json({ message: "Item não encontrado." });
    }

  
    const resultFillings = await comprarRep.getFillingsById(id);

    if (resultFillings && resultFillings.error) {
      return response.status(500).json({ error: resultFillings.error });
    }

    const resultFinal = {
      food: resultFood,
      fillings: Array.isArray(resultFillings) ? resultFillings : [], 
    };

    return response.status(200).json(resultFinal);

  } catch (err) {
    console.error("Erro no controller getcomprarById:", err);
    return response.status(500).json({ error: "Erro interno no servidor ao processar a requisição." });
  }
}

export async function getHistory(request, response) {
  return response.status(200).json({ message: "Listando o histórico ..." });
}

export async function makePayment(request, response) {
  return response.status(201).json({ message: "Fazendo o pix ..." });
}