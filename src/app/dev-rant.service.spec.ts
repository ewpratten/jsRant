/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DevRantService } from './dev-rant.service';

describe('DevRant Service', () => {
  beforeEachProviders(() => [DevRantService]);

  it('should ...',
      inject([DevRantService], (service: DevRantService) => {
    expect(service).toBeTruthy();
  }));
});
