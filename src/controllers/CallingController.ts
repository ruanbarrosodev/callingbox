import { Request, Response } from 'express';
import { CallingModel } from '../models/CallingModel';


export class CallingController {

static async create(req: Request, res: Response) {
  try {
    const newCalling = req.body;
    const result = await CallingModel.create(newCalling);
    const insertId = (result as any).insertId;

    res.status(201).json({
      success: true,
      message: 'Chamado inserido com sucesso',
      data: { id: insertId, ...newCalling }
    });
  } catch (error) {
    console.error('Erro ao criar chamado:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno no servidor'
    });
  }
}

  static async update(req: Request, res: Response): Promise<void> {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: 'ID inválido' });
      return;
    }

    const updateData = req.body;
    const result = await CallingModel.update(id, updateData);

    if (result.affectedRows === 0) {
      res.status(404).json({sucess: false, message: 'Registro não encontrado' });
      return;
    }

    res.json({ sucess: true ,message: 'Calling atualizado com sucesso', result });
    } catch (error) {
      console.error('Update error:', error);
      res.status(500).json({sucess: false, message: 'Erro interno no servidor' });
    }
  }

  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const rows = await CallingModel.findAll();

      res.status(200).json({
        success: true,
        data: rows
      });
    } catch (error) {
      console.error('Erro ao buscar chamados:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }

    static async findById(req: Request, res: Response): Promise<void> {
      try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
          res.status(400).json({ message: 'ID inválido' });
          return;
        }

        const result = await CallingModel.findById(id);
        const data = result[0];

        if (!data) {
          res.status(404).json({ message: 'Chamado não encontrado' });
          return;
        }

        res.status(200).json(data);
      } catch (error) {
        console.error('Erro ao buscar chamado:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
      }
    }


}
