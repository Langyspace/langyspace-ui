export type AuditExpiry = `${number}-${number}-${number}`

export interface AuditException {
  expiresAt?: AuditExpiry
  owner: string
  path: string
  reason: string
}

export interface DescendantActionException extends AuditException {
  selector: string
}

export interface AdditionalAuditRule {
  id?: string
  message: string
  pattern: RegExp
  remediation?: string
}

export interface AuditConfig {
  additionalRules?: AdditionalAuditRule[]
  allowedDescendantActionOverrides?: DescendantActionException[]
  allowedDirectButtonImports?: AuditException[]
  allowedDomainMotion?: AuditException[]
  auditDescendantActions?: boolean
  auditPrivateStyles?: boolean
  canonicalComponents?: string[]
  /** Exact implementation owner for a separated adapter; grants only that owner's .styles module. */
  componentOwners?: Record<string, string>
  layerDependencies?: Record<string, string[]>
  nativeButtonOwners?: AuditException[]
  requireExceptionExpiry?: boolean
  root: string
  sourceRoots?: string[]
  spinnerOwners?: AuditException[]
  today?: AuditExpiry
}

export interface AuditDiagnostic {
  line: number
  message: string
  path: string
  remediation: string
  ruleId: string
}

export interface AuditResult {
  diagnostics: AuditDiagnostic[]
  failures: string[]
  files: string[]
  warnings: string[]
}

export declare function defineAuditConfig<const Config extends AuditConfig>(
  config: Config,
): Config

export declare function auditArchitecture(
  config: AuditConfig,
): Promise<AuditResult>

export interface StylingGeneratedAsset {
  manifest: string
  /** Reviewed hash of the entire generated-asset manifest, not a self-declared bypass. */
  manifestSha256: string
  sourceCommit: string
  sourceRepository: string
}

export interface StylingAuditConfig {
  generatedAssets?: StylingGeneratedAsset[]
  root: string
  sourceRoots?: string[]
}

export interface StylingAuditDiagnostic {
  file: string
  line: number
  message: string
  ruleId: string
}

export interface StylingAuditResult {
  failures: StylingAuditDiagnostic[]
  files: string[]
  generatedFiles: string[]
  sourceManifestSha256: string
  version: number
  warnings: string[]
}

export declare function defineStylingAuditConfig<
  const Config extends StylingAuditConfig,
>(config: Config): Config

export declare function auditStyling(
  config: StylingAuditConfig,
): Promise<StylingAuditResult>
