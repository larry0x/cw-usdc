/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export interface BlacklisteesResponse {
  blacklistees: StatusInfo[];
  [k: string]: unknown;
}
export interface StatusInfo {
  address: string;
  status: boolean;
  [k: string]: unknown;
}
export interface BlacklisterAllowancesResponse {
  blacklisters: StatusInfo[];
  [k: string]: unknown;
}
export interface BurnAllowanceResponse {
  allowance: number;
  [k: string]: unknown;
}
export interface BurnAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  address: string;
  allowance: number;
  [k: string]: unknown;
}
export type Addr = string;
export interface Config {
  denom: string;
  is_frozen: boolean;
  owner: Addr;
  [k: string]: unknown;
}
export interface DenomResponse {
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  change_token_factory_admin: {
    new_admin: string;
    [k: string]: unknown;
  };
} | {
  change_contract_owner: {
    new_owner: string;
    [k: string]: unknown;
  };
} | {
  set_minter: {
    address: string;
    allowance: Uint128;
    [k: string]: unknown;
  };
} | {
  set_burner: {
    address: string;
    allowance: Uint128;
    [k: string]: unknown;
  };
} | {
  set_blacklister: {
    address: string;
    status: boolean;
    [k: string]: unknown;
  };
} | {
  set_freezer: {
    address: string;
    status: boolean;
    [k: string]: unknown;
  };
} | {
  mint: {
    amount: Uint128;
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  blacklist: {
    address: string;
    status: boolean;
    [k: string]: unknown;
  };
} | {
  freeze: {
    status: boolean;
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface FreezerAllowancesResponse {
  freezers: StatusInfo[];
  [k: string]: unknown;
}
export interface InstantiateMsg {
  denom: string;
  [k: string]: unknown;
}
export interface IsBlacklistedResponse {
  status: boolean;
  [k: string]: unknown;
}
export interface IsBlacklisterResponse {
  status: boolean;
  [k: string]: unknown;
}
export interface IsFreezerResponse {
  status: boolean;
  [k: string]: unknown;
}
export interface IsFrozenResponse {
  is_frozen: boolean;
  [k: string]: unknown;
}
export interface MintAllowanceResponse {
  allowance: number;
  [k: string]: unknown;
}
export interface MintAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface OwnerResponse {
  address: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  is_frozen: {
    [k: string]: unknown;
  };
} | {
  denom: {
    [k: string]: unknown;
  };
} | {
  owner: {
    [k: string]: unknown;
  };
} | {
  burn_allowance: {
    address: string;
    [k: string]: unknown;
  };
} | {
  burn_allowances: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  mint_allowance: {
    address: string;
    [k: string]: unknown;
  };
} | {
  mint_allowances: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  is_blacklisted: {
    address: string;
    [k: string]: unknown;
  };
} | {
  blacklistees: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  is_blacklister: {
    address: string;
    [k: string]: unknown;
  };
} | {
  blacklister_allowances: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  is_freezer: {
    address: string;
    [k: string]: unknown;
  };
} | {
  freezer_allowances: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
};
export type SudoMsg = {
  before_send: {
    amount: Coin[];
    from: string;
    to: string;
    [k: string]: unknown;
  };
};
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface CwUsdcReadOnlyInterface {
  contractAddress: string;
  isFrozen: () => Promise<IsFrozenResponse>;
  denom: () => Promise<DenomResponse>;
  owner: () => Promise<OwnerResponse>;
  burnAllowance: ({
    address
  }: {
    address: string;
  }) => Promise<BurnAllowanceResponse>;
  burnAllowances: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<BurnAllowancesResponse>;
  mintAllowance: ({
    address
  }: {
    address: string;
  }) => Promise<MintAllowanceResponse>;
  mintAllowances: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<MintAllowancesResponse>;
  isBlacklisted: ({
    address
  }: {
    address: string;
  }) => Promise<IsBlacklistedResponse>;
  blacklistees: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<BlacklisteesResponse>;
  isBlacklister: ({
    address
  }: {
    address: string;
  }) => Promise<IsBlacklisterResponse>;
  blacklisterAllowances: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<BlacklisterAllowancesResponse>;
  isFreezer: ({
    address
  }: {
    address: string;
  }) => Promise<IsFreezerResponse>;
  freezerAllowances: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<FreezerAllowancesResponse>;
}
export class CwUsdcQueryClient implements CwUsdcReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.isFrozen = this.isFrozen.bind(this);
    this.denom = this.denom.bind(this);
    this.owner = this.owner.bind(this);
    this.burnAllowance = this.burnAllowance.bind(this);
    this.burnAllowances = this.burnAllowances.bind(this);
    this.mintAllowance = this.mintAllowance.bind(this);
    this.mintAllowances = this.mintAllowances.bind(this);
    this.isBlacklisted = this.isBlacklisted.bind(this);
    this.blacklistees = this.blacklistees.bind(this);
    this.isBlacklister = this.isBlacklister.bind(this);
    this.blacklisterAllowances = this.blacklisterAllowances.bind(this);
    this.isFreezer = this.isFreezer.bind(this);
    this.freezerAllowances = this.freezerAllowances.bind(this);
  }

  isFrozen = async (): Promise<IsFrozenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_frozen: {}
    });
  };
  denom = async (): Promise<DenomResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      denom: {}
    });
  };
  owner = async (): Promise<OwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner: {}
    });
  };
  burnAllowance = async ({
    address
  }: {
    address: string;
  }): Promise<BurnAllowanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      burn_allowance: {
        address
      }
    });
  };
  burnAllowances = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<BurnAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      burn_allowances: {
        limit,
        start_after: startAfter
      }
    });
  };
  mintAllowance = async ({
    address
  }: {
    address: string;
  }): Promise<MintAllowanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_allowance: {
        address
      }
    });
  };
  mintAllowances = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<MintAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_allowances: {
        limit,
        start_after: startAfter
      }
    });
  };
  isBlacklisted = async ({
    address
  }: {
    address: string;
  }): Promise<IsBlacklistedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_blacklisted: {
        address
      }
    });
  };
  blacklistees = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<BlacklisteesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      blacklistees: {
        limit,
        start_after: startAfter
      }
    });
  };
  isBlacklister = async ({
    address
  }: {
    address: string;
  }): Promise<IsBlacklisterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_blacklister: {
        address
      }
    });
  };
  blacklisterAllowances = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<BlacklisterAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      blacklister_allowances: {
        limit,
        start_after: startAfter
      }
    });
  };
  isFreezer = async ({
    address
  }: {
    address: string;
  }): Promise<IsFreezerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_freezer: {
        address
      }
    });
  };
  freezerAllowances = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<FreezerAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      freezer_allowances: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface CwUsdcInterface extends CwUsdcReadOnlyInterface {
  contractAddress: string;
  sender: string;
  changeTokenFactoryAdmin: ({
    newAdmin
  }: {
    newAdmin: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  changeContractOwner: ({
    newOwner
  }: {
    newOwner: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setMinter: ({
    address,
    allowance
  }: {
    address: string;
    allowance: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setBurner: ({
    address,
    allowance
  }: {
    address: string;
    allowance: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setBlacklister: ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setFreezer: ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  mint: ({
    amount,
    toAddress
  }: {
    amount: string;
    toAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  burn: ({
    amount
  }: {
    amount: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  blacklist: ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  freeze: ({
    status
  }: {
    status: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class CwUsdcClient extends CwUsdcQueryClient implements CwUsdcInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.changeTokenFactoryAdmin = this.changeTokenFactoryAdmin.bind(this);
    this.changeContractOwner = this.changeContractOwner.bind(this);
    this.setMinter = this.setMinter.bind(this);
    this.setBurner = this.setBurner.bind(this);
    this.setBlacklister = this.setBlacklister.bind(this);
    this.setFreezer = this.setFreezer.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.blacklist = this.blacklist.bind(this);
    this.freeze = this.freeze.bind(this);
  }

  changeTokenFactoryAdmin = async ({
    newAdmin
  }: {
    newAdmin: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      change_token_factory_admin: {
        new_admin: newAdmin
      }
    }, fee, memo, funds);
  };
  changeContractOwner = async ({
    newOwner
  }: {
    newOwner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      change_contract_owner: {
        new_owner: newOwner
      }
    }, fee, memo, funds);
  };
  setMinter = async ({
    address,
    allowance
  }: {
    address: string;
    allowance: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_minter: {
        address,
        allowance
      }
    }, fee, memo, funds);
  };
  setBurner = async ({
    address,
    allowance
  }: {
    address: string;
    allowance: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_burner: {
        address,
        allowance
      }
    }, fee, memo, funds);
  };
  setBlacklister = async ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_blacklister: {
        address,
        status
      }
    }, fee, memo, funds);
  };
  setFreezer = async ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_freezer: {
        address,
        status
      }
    }, fee, memo, funds);
  };
  mint = async ({
    amount,
    toAddress
  }: {
    amount: string;
    toAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        amount,
        to_address: toAddress
      }
    }, fee, memo, funds);
  };
  burn = async ({
    amount
  }: {
    amount: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn: {
        amount
      }
    }, fee, memo, funds);
  };
  blacklist = async ({
    address,
    status
  }: {
    address: string;
    status: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      blacklist: {
        address,
        status
      }
    }, fee, memo, funds);
  };
  freeze = async ({
    status
  }: {
    status: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      freeze: {
        status
      }
    }, fee, memo, funds);
  };
}