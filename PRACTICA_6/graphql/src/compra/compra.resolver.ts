import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Compra } from './entities/compra.entity';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Resolver(() => Compra)
export class CompraResolver {
  constructor(private readonly compraService: CompraService) {}

  @Query(() => [Compra], { name: 'compras' })
  async getCompras(): Promise<Compra[]> {
    return this.compraService.findAll();
  }

  @Query(() => Compra, { name: 'compra' })
  async getCompra(@Args('id', { type: () => ID }) id: string): Promise<Compra> {
    return this.compraService.findOne(id);
  }

  @Mutation(() => Compra)
  async createCompra(
    @Args('createCompraDto') createCompraDto: CreateCompraDto,
  ): Promise<Compra> {
    return this.compraService.create(createCompraDto);
  }

  @Mutation(() => Compra)
  async updateCompra(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateCompraDto') updateCompraDto: UpdateCompraDto,
  ): Promise<Compra> {
    return this.compraService.update(id, updateCompraDto);
  }

  @Mutation(() => Compra)
  async removeCompra(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Compra> {
    return this.compraService.remove(id);
  }

  @Mutation(() => Compra)
  async updateAllActiveCompra(): Promise<void> {
    return this.compraService.updateAllActive();
  }
}
