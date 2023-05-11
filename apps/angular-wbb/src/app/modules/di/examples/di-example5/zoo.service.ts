import { Inject, Injectable, Optional } from '@angular/core';
import { Animal, ZOO_TOKEN } from "./constants";

@Injectable()
export class ZooService {
  constructor(@Inject(ZOO_TOKEN) @Optional() public readonly animals: Animal[] = []) { }
}
