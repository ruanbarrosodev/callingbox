import { body } from 'express-validator';

export const CallingCreateValidation = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('ident').notEmpty().withMessage('Identificação é obrigatória'),
  body('sector').notEmpty().withMessage('Setor é obrigatório'),
  body('statusCalling').notEmpty().withMessage('Setor é obrigatório'),
  body('typeCalling').notEmpty().withMessage('Tipo de chamado é obrigatório'),
  body('observation').notEmpty().withMessage('Observação é obrigatória'),
  body('datetime')
    .notEmpty().withMessage('Data e hora são obrigatórias')
    .isISO8601().withMessage('Formato de data inválido (use ISO 8601: YYYY-MM-DDTHH:MM:SS)')
];

export const CallingUpdateValidation = [
  body('name').optional().notEmpty().withMessage('Nome não pode estar em branco'),
  body('ident').optional().notEmpty().withMessage('Identificação não pode estar em branco'),
  body('sector').optional().notEmpty().withMessage('Setor não pode estar em branco'),
  body('statusCalling').optional().notEmpty().withMessage('Setor não pode estar em branco'),
  body('typeCalling').optional().notEmpty().withMessage('Tipo de chamado não pode estar em branco'),
  body('observation').optional().notEmpty().withMessage('Observação não pode estar em branco'),
  body('datetime')
    .optional()
    .notEmpty().withMessage('Data e hora não pode estar em branco')
    .isISO8601().withMessage('Formato de data inválido (use ISO 8601: YYYY-MM-DDTHH:MM:SS)')
];
