// брендированный UUID
export type UUID = string & { readonly __brand: 'UUID' };

// строгий regex под UUID v4
const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Приводит string к UUID
 * ❌ кидает ошибку если строка не UUID v4
 */
export function asUUID(value: string): UUID {
  if (!UUID_V4_REGEX.test(value)) {
    throw new Error(`Invalid UUID v4: ${value}`);
  }

  return value as UUID;
}

const UUIDS: UUID[] = [
  asUUID('567c69c1-3ee1-4ed5-a427-29a443b86ef1'),
  asUUID('df79015d-c3d6-456b-97f4-f206b78716c3'),
  asUUID('3d8170f2-da8b-4e10-8a30-64c987c64d8b'),
  asUUID('5ed87b39-32b1-4c3e-b6d2-be9f16716c37'),
  asUUID('2fb3d981-eace-4734-84a0-19c11ef1d3f6'),
  asUUID('c4eee8c6-4447-4a1a-a171-da379db80ce8'),
  asUUID('084c9087-a505-47e2-8691-1cd180b22cc0'),
  asUUID('1576cc23-1407-4d07-abd2-e13d792ec5bd'),
  asUUID('1447e174-1e08-4b3e-a41d-30b40fe3bcc9'),
  asUUID('78265ede-b636-4e29-8530-e5d48536859b'),
  asUUID('db373be4-38a4-4a9d-b1c5-da09a0fc0db0'),
  asUUID('e80bda2e-533b-4233-b180-1bc4c4329b52'),
  asUUID('ee3a0df8-b65e-477c-bd52-7d85d5ecff6e'),
  asUUID('852797d6-7d17-4f6d-811a-6134466b2ec6'),
  asUUID('258f7300-cb6f-477a-b88f-f73d11cf2e9a'),
  asUUID('8e8fbbbd-92f6-44a7-8392-da23c139ed5f'),
  asUUID('9ed4d310-e46c-4559-a468-38b7f62d902c'),
  asUUID('f5c90874-13b6-4381-9579-a417f9b5717d'),
  asUUID('c1ee6d3c-6a26-4c93-8f2c-fbf17cb06079'),
  asUUID('927d48b0-e578-4e56-8ea9-5c01e6b56efe'),
] as const;

function* uuidGenerator() {
  for (const uuid of UUIDS) {
    yield uuid;
  }
}

// 👉 ТЕКУЩИЙ ГЕНЕРАТОР (ВАЖНО)
let gen: Generator<string>;

// 👉 RESET (СБРОС К НАЧАЛУ)
export function resetUuidMock() {
  gen = uuidGenerator();
}

// 👉 ИНИЦИАЛИЗАЦИЯ ПРИ ПЕРВОМ ИМПОРТЕ
resetUuidMock();

// 👉 МОК ДЛЯ uuid.v4()
export const v4 = (): string => {
  const result = gen.next(); // ← БЕЗ destructuring

  if (result.done || !result.value) {
    throw new Error('UUID mock exhausted — добавь UUID в массив');
  }

  return result.value;
};