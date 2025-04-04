import { Request, Response } from 'express';
import { CalculatorService } from '../services/calculator.service';

export class CalculatorController {
  private calculatorService: CalculatorService;

  constructor() {
    this.calculatorService = new CalculatorService();
  }

  public add = (req: Request, res: Response): void => {
    try {
      const a = parseFloat(req.query.a as string);
      const b = parseFloat(req.query.b as string);

      if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
        return;
      }

      const result = this.calculatorService.add(a, b);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public subtract = (req: Request, res: Response): void => {
    try {
      const a = parseFloat(req.query.a as string);
      const b = parseFloat(req.query.b as string);

      if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
        return;
      }

      const result = this.calculatorService.subtract(a, b);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public multiply = (req: Request, res: Response): void => {
    try {
      const a = parseFloat(req.query.a as string);
      const b = parseFloat(req.query.b as string);

      if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
        return;
      }

      const result = this.calculatorService.multiply(a, b);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public divide = (req: Request, res: Response): void => {
    try {
      const a = parseFloat(req.query.a as string);
      const b = parseFloat(req.query.b as string);

      if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
        return;
      }

      const result = this.calculatorService.divide(a, b);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
}