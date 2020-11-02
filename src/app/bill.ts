export class Bill {
  constructor(
    public total: number,
    public tipPercentage: number,
    public splitBy: number,
    public grandTotal: number,
    public splitTotal: number
  ) { }
}
