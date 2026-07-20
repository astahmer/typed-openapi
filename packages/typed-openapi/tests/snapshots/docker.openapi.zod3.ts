import { z } from "zod";

// <Schemas>
export type Port = z.infer<typeof Port>;
export const Port = z.object({
  IP: z.string().optional(),
  PrivatePort: z.number().int(),
  PublicPort: z.number().int().optional(),
  Type: z.enum(["tcp", "udp", "sctp"]),
});

export type MountPoint = z.infer<typeof MountPoint>;
export const MountPoint = z
  .object({
    Type: z.enum(["bind", "volume", "tmpfs", "npipe", "cluster"]),
    Name: z.string(),
    Source: z.string(),
    Destination: z.string(),
    Driver: z.string(),
    Mode: z.string(),
    RW: z.boolean(),
    Propagation: z.string(),
  })
  .partial();

export type DeviceMapping = z.infer<typeof DeviceMapping>;
export const DeviceMapping = z
  .object({ PathOnHost: z.string(), PathInContainer: z.string(), CgroupPermissions: z.string() })
  .partial();

export type DeviceRequest = z.infer<typeof DeviceRequest>;
export const DeviceRequest = z
  .object({
    Driver: z.string(),
    Count: z.number().int(),
    DeviceIDs: z.array(z.string()),
    Capabilities: z.array(z.array(z.string())),
    Options: z.record(z.string(), z.string()),
  })
  .partial();

export type ThrottleDevice = z.infer<typeof ThrottleDevice>;
export const ThrottleDevice = z.object({ Path: z.string(), Rate: z.number().int().min(0) }).partial();

export type Mount = z.infer<typeof Mount>;
export const Mount = z
  .object({
    Target: z.string(),
    Source: z.string(),
    Type: z.enum(["bind", "volume", "tmpfs", "npipe", "cluster"]),
    ReadOnly: z.boolean(),
    Consistency: z.string(),
    BindOptions: z
      .object({
        Propagation: z.enum(["private", "rprivate", "shared", "rshared", "slave", "rslave"]),
        NonRecursive: z.boolean(),
        CreateMountpoint: z.boolean(),
      })
      .partial(),
    VolumeOptions: z
      .object({
        NoCopy: z.boolean(),
        Labels: z.record(z.string(), z.string()),
        DriverConfig: z.object({ Name: z.string(), Options: z.record(z.string(), z.string()) }).partial(),
      })
      .partial(),
    TmpfsOptions: z.object({ SizeBytes: z.number().int(), Mode: z.number().int() }).partial(),
  })
  .partial();

export type RestartPolicy = z.infer<typeof RestartPolicy>;
export const RestartPolicy = z
  .object({ Name: z.enum(["", "no", "always", "unless-stopped", "on-failure"]), MaximumRetryCount: z.number().int() })
  .partial();

export type Resources = z.infer<typeof Resources>;
export const Resources = z
  .object({
    CpuShares: z.number().int(),
    Memory: z.number().int(),
    CgroupParent: z.string(),
    BlkioWeight: z.number().int().min(0).max(1000),
    BlkioWeightDevice: z.array(z.object({ Path: z.string(), Weight: z.number().int().min(0) }).partial()),
    BlkioDeviceReadBps: z.array(ThrottleDevice),
    BlkioDeviceWriteBps: z.array(ThrottleDevice),
    BlkioDeviceReadIOps: z.array(ThrottleDevice),
    BlkioDeviceWriteIOps: z.array(ThrottleDevice),
    CpuPeriod: z.number().int(),
    CpuQuota: z.number().int(),
    CpuRealtimePeriod: z.number().int(),
    CpuRealtimeRuntime: z.number().int(),
    CpusetCpus: z.string(),
    CpusetMems: z.string(),
    Devices: z.array(DeviceMapping),
    DeviceCgroupRules: z.array(z.string()),
    DeviceRequests: z.array(DeviceRequest),
    KernelMemoryTCP: z.number().int(),
    MemoryReservation: z.number().int(),
    MemorySwap: z.number().int(),
    MemorySwappiness: z.number().int().min(0).max(100),
    NanoCpus: z.number().int(),
    OomKillDisable: z.boolean(),
    Init: z.boolean().nullable(),
    PidsLimit: z.number().int().nullable(),
    Ulimits: z.array(z.object({ Name: z.string(), Soft: z.number().int(), Hard: z.number().int() }).partial()),
    CpuCount: z.number().int(),
    CpuPercent: z.number().int(),
    IOMaximumIOps: z.number().int(),
    IOMaximumBandwidth: z.number().int(),
  })
  .partial();

export type Limit = z.infer<typeof Limit>;
export const Limit = z
  .object({ NanoCPUs: z.number().int(), MemoryBytes: z.number().int(), Pids: z.number().int() })
  .partial();

export type GenericResources = z.infer<typeof GenericResources>;
export const GenericResources = z.array(
  z
    .object({
      NamedResourceSpec: z.object({ Kind: z.string(), Value: z.string() }).partial(),
      DiscreteResourceSpec: z.object({ Kind: z.string(), Value: z.number().int() }).partial(),
    })
    .partial(),
);

export type ResourceObject = z.infer<typeof ResourceObject>;
export const ResourceObject = z
  .object({ NanoCPUs: z.number().int(), MemoryBytes: z.number().int(), GenericResources: GenericResources })
  .partial();

export type HealthConfig = z.infer<typeof HealthConfig>;
export const HealthConfig = z
  .object({
    Test: z.array(z.string()),
    Interval: z.number().int(),
    Timeout: z.number().int(),
    Retries: z.number().int(),
    StartPeriod: z.number().int(),
  })
  .partial();

export type HealthcheckResult = z.infer<typeof HealthcheckResult>;
export const HealthcheckResult = z
  .object({ Start: z.string().datetime(), End: z.string(), ExitCode: z.number().int(), Output: z.string() })
  .partial()
  .nullable();

export type Health = z.infer<typeof Health>;
export const Health = z
  .object({
    Status: z.enum(["none", "starting", "healthy", "unhealthy"]),
    FailingStreak: z.number().int(),
    Log: z.array(HealthcheckResult),
  })
  .partial()
  .nullable();

export type PortBinding = z.infer<typeof PortBinding>;
export const PortBinding = z.object({ HostIp: z.string(), HostPort: z.string() }).partial();

export type PortMap = z.infer<typeof PortMap>;
export const PortMap = z.record(z.string(), z.array(PortBinding).nullable());

export type HostConfig = z.infer<typeof HostConfig>;
export const HostConfig = Resources.and(
  z
    .object({
      Binds: z.array(z.string()),
      ContainerIDFile: z.string(),
      LogConfig: z
        .object({
          Type: z.enum(["json-file", "syslog", "journald", "gelf", "fluentd", "awslogs", "splunk", "etwlogs", "none"]),
          Config: z.record(z.string(), z.string()),
        })
        .partial(),
      NetworkMode: z.string(),
      PortBindings: PortMap,
      RestartPolicy: RestartPolicy,
      AutoRemove: z.boolean(),
      VolumeDriver: z.string(),
      VolumesFrom: z.array(z.string()),
      Mounts: z.array(Mount),
      ConsoleSize: z.array(z.number().int().min(0)).min(2).max(2).nullable(),
      Annotations: z.record(z.string(), z.string()),
      CapAdd: z.array(z.string()),
      CapDrop: z.array(z.string()),
      CgroupnsMode: z.enum(["private", "host"]),
      Dns: z.array(z.string()),
      DnsOptions: z.array(z.string()),
      DnsSearch: z.array(z.string()),
      ExtraHosts: z.array(z.string()),
      GroupAdd: z.array(z.string()),
      IpcMode: z.string(),
      Cgroup: z.string(),
      Links: z.array(z.string()),
      OomScoreAdj: z.number().int(),
      PidMode: z.string(),
      Privileged: z.boolean(),
      PublishAllPorts: z.boolean(),
      ReadonlyRootfs: z.boolean(),
      SecurityOpt: z.array(z.string()),
      StorageOpt: z.record(z.string(), z.string()),
      Tmpfs: z.record(z.string(), z.string()),
      UTSMode: z.string(),
      UsernsMode: z.string(),
      ShmSize: z.number().int().min(0),
      Sysctls: z.record(z.string(), z.string()),
      Runtime: z.string(),
      Isolation: z.enum(["default", "process", "hyperv"]),
      MaskedPaths: z.array(z.string()),
      ReadonlyPaths: z.array(z.string()),
    })
    .partial(),
);

export type ContainerConfig = z.infer<typeof ContainerConfig>;
export const ContainerConfig = z
  .object({
    Hostname: z.string(),
    Domainname: z.string(),
    User: z.string(),
    AttachStdin: z.boolean(),
    AttachStdout: z.boolean(),
    AttachStderr: z.boolean(),
    ExposedPorts: z.record(z.string(), z.object({}).partial()).nullable(),
    Tty: z.boolean(),
    OpenStdin: z.boolean(),
    StdinOnce: z.boolean(),
    Env: z.array(z.string()),
    Cmd: z.array(z.string()),
    Healthcheck: HealthConfig,
    ArgsEscaped: z.boolean().nullable(),
    Image: z.string(),
    Volumes: z.record(z.string(), z.object({}).partial()),
    WorkingDir: z.string(),
    Entrypoint: z.array(z.string()),
    NetworkDisabled: z.boolean().nullable(),
    MacAddress: z.string().nullable(),
    OnBuild: z.array(z.string()).nullable(),
    Labels: z.record(z.string(), z.string()),
    StopSignal: z.string().nullable(),
    StopTimeout: z.number().int().nullable(),
    Shell: z.array(z.string()).nullable(),
  })
  .partial();

export type EndpointIPAMConfig = z.infer<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = z
  .object({ IPv4Address: z.string(), IPv6Address: z.string(), LinkLocalIPs: z.array(z.string()) })
  .partial()
  .nullable();

export type EndpointSettings = z.infer<typeof EndpointSettings>;
export const EndpointSettings = z
  .object({
    IPAMConfig: EndpointIPAMConfig,
    Links: z.array(z.string()),
    Aliases: z.array(z.string()),
    NetworkID: z.string(),
    EndpointID: z.string(),
    Gateway: z.string(),
    IPAddress: z.string(),
    IPPrefixLen: z.number().int(),
    IPv6Gateway: z.string(),
    GlobalIPv6Address: z.string(),
    GlobalIPv6PrefixLen: z.number().int(),
    MacAddress: z.string(),
    DriverOpts: z.record(z.string(), z.string()).nullable(),
  })
  .partial();

export type NetworkingConfig = z.infer<typeof NetworkingConfig>;
export const NetworkingConfig = z.object({ EndpointsConfig: z.record(z.string(), EndpointSettings) }).partial();

export type Address = z.infer<typeof Address>;
export const Address = z.object({ Addr: z.string(), PrefixLen: z.number().int() }).partial();

export type NetworkSettings = z.infer<typeof NetworkSettings>;
export const NetworkSettings = z
  .object({
    Bridge: z.string(),
    SandboxID: z.string(),
    HairpinMode: z.boolean(),
    LinkLocalIPv6Address: z.string(),
    LinkLocalIPv6PrefixLen: z.number().int(),
    Ports: PortMap,
    SandboxKey: z.string(),
    SecondaryIPAddresses: z.array(Address).nullable(),
    SecondaryIPv6Addresses: z.array(Address).nullable(),
    EndpointID: z.string(),
    Gateway: z.string(),
    GlobalIPv6Address: z.string(),
    GlobalIPv6PrefixLen: z.number().int(),
    IPAddress: z.string(),
    IPPrefixLen: z.number().int(),
    IPv6Gateway: z.string(),
    MacAddress: z.string(),
    Networks: z.record(z.string(), EndpointSettings),
  })
  .partial();

export type GraphDriverData = z.infer<typeof GraphDriverData>;
export const GraphDriverData = z.object({ Name: z.string(), Data: z.record(z.string(), z.string()) });

export type ChangeType = z.infer<typeof ChangeType>;
export const ChangeType = z.union([z.literal(0), z.literal(1), z.literal(2)]);

export type FilesystemChange = z.infer<typeof FilesystemChange>;
export const FilesystemChange = z.object({ Path: z.string(), Kind: ChangeType });

export type ImageInspect = z.infer<typeof ImageInspect>;
export const ImageInspect = z
  .object({
    Id: z.string(),
    RepoTags: z.array(z.string()),
    RepoDigests: z.array(z.string()),
    Parent: z.string(),
    Comment: z.string(),
    Created: z.string(),
    Container: z.string(),
    ContainerConfig: ContainerConfig,
    DockerVersion: z.string(),
    Author: z.string(),
    Config: ContainerConfig,
    Architecture: z.string(),
    Variant: z.string().nullable(),
    Os: z.string(),
    OsVersion: z.string().nullable(),
    Size: z.number().int(),
    VirtualSize: z.number().int(),
    GraphDriver: GraphDriverData,
    RootFS: z.object({ Type: z.string(), Layers: z.array(z.string()).optional() }),
    Metadata: z.object({ LastTagTime: z.string().nullable() }).partial(),
  })
  .partial();

export type ImageSummary = z.infer<typeof ImageSummary>;
export const ImageSummary = z.object({
  Id: z.string(),
  ParentId: z.string(),
  RepoTags: z.array(z.string()),
  RepoDigests: z.array(z.string()),
  Created: z.number().int(),
  Size: z.number().int(),
  SharedSize: z.number().int(),
  VirtualSize: z.number().int().optional(),
  Labels: z.record(z.string(), z.string()),
  Containers: z.number().int(),
});

export type AuthConfig = z.infer<typeof AuthConfig>;
export const AuthConfig = z
  .object({ username: z.string(), password: z.string(), email: z.string(), serveraddress: z.string() })
  .partial();

export type ProcessConfig = z.infer<typeof ProcessConfig>;
export const ProcessConfig = z
  .object({
    privileged: z.boolean(),
    user: z.string(),
    tty: z.boolean(),
    entrypoint: z.string(),
    arguments: z.array(z.string()),
  })
  .partial();

export type ObjectVersion = z.infer<typeof ObjectVersion>;
export const ObjectVersion = z.object({ Index: z.number().int() }).partial();

export type Topology = z.infer<typeof Topology>;
export const Topology = z.record(z.string(), z.string());

export type ClusterVolumeSpec = z.infer<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = z
  .object({
    Group: z.string(),
    AccessMode: z
      .object({
        Scope: z.enum(["single", "multi"]),
        Sharing: z.enum(["none", "readonly", "onewriter", "all"]),
        MountVolume: z.object({}).partial(),
        Secrets: z.array(z.object({ Key: z.string(), Secret: z.string() }).partial()),
        AccessibilityRequirements: z.object({ Requisite: z.array(Topology), Preferred: z.array(Topology) }).partial(),
        CapacityRange: z.object({ RequiredBytes: z.number().int(), LimitBytes: z.number().int() }).partial(),
        Availability: z.enum(["active", "pause", "drain"]),
      })
      .partial(),
  })
  .partial();

export type ClusterVolume = z.infer<typeof ClusterVolume>;
export const ClusterVolume = z
  .object({
    ID: z.string(),
    Version: ObjectVersion,
    CreatedAt: z.string(),
    UpdatedAt: z.string(),
    Spec: ClusterVolumeSpec,
    Info: z
      .object({
        CapacityBytes: z.number().int(),
        VolumeContext: z.record(z.string(), z.string()),
        VolumeID: z.string(),
        AccessibleTopology: z.array(Topology),
      })
      .partial(),
    PublishStatus: z.array(
      z
        .object({
          NodeID: z.string(),
          State: z.enum(["pending-publish", "published", "pending-node-unpublish", "pending-controller-unpublish"]),
          PublishContext: z.record(z.string(), z.string()),
        })
        .partial(),
    ),
  })
  .partial();

export type Volume = z.infer<typeof Volume>;
export const Volume = z.object({
  Name: z.string(),
  Driver: z.string(),
  Mountpoint: z.string(),
  CreatedAt: z.string().optional(),
  Status: z.record(z.string(), z.object({}).partial()).optional(),
  Labels: z.record(z.string(), z.string()),
  Scope: z.enum(["local", "global"]),
  ClusterVolume: ClusterVolume.optional(),
  Options: z.record(z.string(), z.string()),
  UsageData: z.object({ Size: z.number().int(), RefCount: z.number().int() }).nullable().optional(),
});

export type VolumeCreateOptions = z.infer<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = z
  .object({
    Name: z.string(),
    Driver: z.string(),
    DriverOpts: z.record(z.string(), z.string()),
    Labels: z.record(z.string(), z.string()),
    ClusterVolumeSpec: ClusterVolumeSpec,
  })
  .partial();

export type VolumeListResponse = z.infer<typeof VolumeListResponse>;
export const VolumeListResponse = z.object({ Volumes: z.array(Volume), Warnings: z.array(z.string()) }).partial();

export type IPAMConfig = z.infer<typeof IPAMConfig>;
export const IPAMConfig = z
  .object({
    Subnet: z.string(),
    IPRange: z.string(),
    Gateway: z.string(),
    AuxiliaryAddresses: z.record(z.string(), z.string()),
  })
  .partial();

export type IPAM = z.infer<typeof IPAM>;
export const IPAM = z
  .object({ Driver: z.string(), Config: z.array(IPAMConfig), Options: z.record(z.string(), z.string()) })
  .partial();

export type NetworkContainer = z.infer<typeof NetworkContainer>;
export const NetworkContainer = z
  .object({
    Name: z.string(),
    EndpointID: z.string(),
    MacAddress: z.string(),
    IPv4Address: z.string(),
    IPv6Address: z.string(),
  })
  .partial();

export type Network = z.infer<typeof Network>;
export const Network = z
  .object({
    Name: z.string(),
    Id: z.string(),
    Created: z.string(),
    Scope: z.string(),
    Driver: z.string(),
    EnableIPv6: z.boolean(),
    IPAM: IPAM,
    Internal: z.boolean(),
    Attachable: z.boolean(),
    Ingress: z.boolean(),
    Containers: z.record(z.string(), NetworkContainer),
    Options: z.record(z.string(), z.string()),
    Labels: z.record(z.string(), z.string()),
  })
  .partial();

export type ErrorDetail = z.infer<typeof ErrorDetail>;
export const ErrorDetail = z.object({ code: z.number().int(), message: z.string() }).partial();

export type ProgressDetail = z.infer<typeof ProgressDetail>;
export const ProgressDetail = z.object({ current: z.number().int(), total: z.number().int() }).partial();

export type ImageID = z.infer<typeof ImageID>;
export const ImageID = z.object({ ID: z.string() }).partial();

export type BuildInfo = z.infer<typeof BuildInfo>;
export const BuildInfo = z
  .object({
    id: z.string(),
    stream: z.string(),
    error: z.string(),
    errorDetail: ErrorDetail,
    status: z.string(),
    progress: z.string(),
    progressDetail: ProgressDetail,
    aux: ImageID,
  })
  .partial();

export type BuildCache = z.infer<typeof BuildCache>;
export const BuildCache = z
  .object({
    ID: z.string(),
    Parent: z.string().nullable(),
    Parents: z.array(z.string()).nullable(),
    Type: z.enum(["internal", "frontend", "source.local", "source.git.checkout", "exec.cachemount", "regular"]),
    Description: z.string(),
    InUse: z.boolean(),
    Shared: z.boolean(),
    Size: z.number().int(),
    CreatedAt: z.string(),
    LastUsedAt: z.string().nullable(),
    UsageCount: z.number().int(),
  })
  .partial();

export type CreateImageInfo = z.infer<typeof CreateImageInfo>;
export const CreateImageInfo = z
  .object({
    id: z.string(),
    error: z.string(),
    errorDetail: ErrorDetail,
    status: z.string(),
    progress: z.string(),
    progressDetail: ProgressDetail,
  })
  .partial();

export type PushImageInfo = z.infer<typeof PushImageInfo>;
export const PushImageInfo = z
  .object({ error: z.string(), status: z.string(), progress: z.string(), progressDetail: ProgressDetail })
  .partial();

export type ErrorResponse = z.infer<typeof ErrorResponse>;
export const ErrorResponse = z.object({ message: z.string() });

export type IdResponse = z.infer<typeof IdResponse>;
export const IdResponse = z.object({ Id: z.string() });

export type PluginMount = z.infer<typeof PluginMount>;
export const PluginMount = z.object({
  Name: z.string(),
  Description: z.string(),
  Settable: z.array(z.string()),
  Source: z.string(),
  Destination: z.string(),
  Type: z.string(),
  Options: z.array(z.string()),
});

export type PluginDevice = z.infer<typeof PluginDevice>;
export const PluginDevice = z.object({
  Name: z.string(),
  Description: z.string(),
  Settable: z.array(z.string()),
  Path: z.string(),
});

export type PluginEnv = z.infer<typeof PluginEnv>;
export const PluginEnv = z.object({
  Name: z.string(),
  Description: z.string(),
  Settable: z.array(z.string()),
  Value: z.string(),
});

export type PluginInterfaceType = z.infer<typeof PluginInterfaceType>;
export const PluginInterfaceType = z.object({ Prefix: z.string(), Capability: z.string(), Version: z.string() });

export type PluginPrivilege = z.infer<typeof PluginPrivilege>;
export const PluginPrivilege = z
  .object({ Name: z.string(), Description: z.string(), Value: z.array(z.string()) })
  .partial();

export type Plugin = z.infer<typeof Plugin>;
export const Plugin = z.object({
  Id: z.string().optional(),
  Name: z.string(),
  Enabled: z.boolean(),
  Settings: z.object({
    Mounts: z.array(PluginMount),
    Env: z.array(z.string()),
    Args: z.array(z.string()),
    Devices: z.array(PluginDevice),
  }),
  PluginReference: z.string().optional(),
  Config: z.object({
    DockerVersion: z.string().optional(),
    Description: z.string(),
    Documentation: z.string(),
    Interface: z.object({
      Types: z.array(PluginInterfaceType),
      Socket: z.string(),
      ProtocolScheme: z.enum(["", "moby.plugins.http/v1"]).optional(),
    }),
    Entrypoint: z.array(z.string()),
    WorkDir: z.string(),
    User: z.object({ UID: z.number().int(), GID: z.number().int() }).partial().optional(),
    Network: z.object({ Type: z.string() }),
    Linux: z.object({
      Capabilities: z.array(z.string()),
      AllowAllDevices: z.boolean(),
      Devices: z.array(PluginDevice),
    }),
    PropagatedMount: z.string(),
    IpcHost: z.boolean(),
    PidHost: z.boolean(),
    Mounts: z.array(PluginMount),
    Env: z.array(PluginEnv),
    Args: z.object({
      Name: z.string(),
      Description: z.string(),
      Settable: z.array(z.string()),
      Value: z.array(z.string()),
    }),
    rootfs: z
      .object({ type: z.string(), diff_ids: z.array(z.string()) })
      .partial()
      .optional(),
  }),
});

export type NodeSpec = z.infer<typeof NodeSpec>;
export const NodeSpec = z
  .object({
    Name: z.string(),
    Labels: z.record(z.string(), z.string()),
    Role: z.enum(["worker", "manager"]),
    Availability: z.enum(["active", "pause", "drain"]),
  })
  .partial();

export type Platform = z.infer<typeof Platform>;
export const Platform = z.object({ Architecture: z.string(), OS: z.string() }).partial();

export type EngineDescription = z.infer<typeof EngineDescription>;
export const EngineDescription = z
  .object({
    EngineVersion: z.string(),
    Labels: z.record(z.string(), z.string()),
    Plugins: z.array(z.object({ Type: z.string(), Name: z.string() }).partial()),
  })
  .partial();

export type TLSInfo = z.infer<typeof TLSInfo>;
export const TLSInfo = z
  .object({ TrustRoot: z.string(), CertIssuerSubject: z.string(), CertIssuerPublicKey: z.string() })
  .partial();

export type NodeDescription = z.infer<typeof NodeDescription>;
export const NodeDescription = z
  .object({
    Hostname: z.string(),
    Platform: Platform,
    Resources: ResourceObject,
    Engine: EngineDescription,
    TLSInfo: TLSInfo,
  })
  .partial();

export type NodeState = z.infer<typeof NodeState>;
export const NodeState = z.enum(["unknown", "down", "ready", "disconnected"]);

export type NodeStatus = z.infer<typeof NodeStatus>;
export const NodeStatus = z.object({ State: NodeState, Message: z.string(), Addr: z.string() }).partial();

export type Reachability = z.infer<typeof Reachability>;
export const Reachability = z.enum(["unknown", "unreachable", "reachable"]);

export type ManagerStatus = z.infer<typeof ManagerStatus>;
export const ManagerStatus = z
  .object({ Leader: z.boolean(), Reachability: Reachability, Addr: z.string() })
  .partial()
  .nullable();

export type Node = z.infer<typeof Node>;
export const Node = z
  .object({
    ID: z.string(),
    Version: ObjectVersion,
    CreatedAt: z.string(),
    UpdatedAt: z.string(),
    Spec: NodeSpec,
    Description: NodeDescription,
    Status: NodeStatus,
    ManagerStatus: ManagerStatus,
  })
  .partial();

export type SwarmSpec = z.infer<typeof SwarmSpec>;
export const SwarmSpec = z
  .object({
    Name: z.string(),
    Labels: z.record(z.string(), z.string()),
    Orchestration: z.object({ TaskHistoryRetentionLimit: z.number().int() }).partial().nullable(),
    Raft: z
      .object({
        SnapshotInterval: z.number().int(),
        KeepOldSnapshots: z.number().int(),
        LogEntriesForSlowFollowers: z.number().int(),
        ElectionTick: z.number().int(),
        HeartbeatTick: z.number().int(),
      })
      .partial(),
    Dispatcher: z.object({ HeartbeatPeriod: z.number().int() }).partial().nullable(),
    CAConfig: z
      .object({
        NodeCertExpiry: z.number().int(),
        ExternalCAs: z.array(
          z
            .object({
              Protocol: z.literal("cfssl"),
              URL: z.string(),
              Options: z.record(z.string(), z.string()),
              CACert: z.string(),
            })
            .partial(),
        ),
        SigningCACert: z.string(),
        SigningCAKey: z.string(),
        ForceRotate: z.number().int(),
      })
      .partial()
      .nullable(),
    EncryptionConfig: z.object({ AutoLockManagers: z.boolean() }).partial(),
    TaskDefaults: z
      .object({ LogDriver: z.object({ Name: z.string(), Options: z.record(z.string(), z.string()) }).partial() })
      .partial(),
  })
  .partial();

export type ClusterInfo = z.infer<typeof ClusterInfo>;
export const ClusterInfo = z
  .object({
    ID: z.string(),
    Version: ObjectVersion,
    CreatedAt: z.string(),
    UpdatedAt: z.string(),
    Spec: SwarmSpec,
    TLSInfo: TLSInfo,
    RootRotationInProgress: z.boolean(),
    DataPathPort: z.number().int(),
    DefaultAddrPool: z.array(z.string()),
    SubnetSize: z.number().int().max(29),
  })
  .partial()
  .nullable();

export type JoinTokens = z.infer<typeof JoinTokens>;
export const JoinTokens = z.object({ Worker: z.string(), Manager: z.string() }).partial();

export type Swarm = z.infer<typeof Swarm>;
export const Swarm = ClusterInfo.and(z.object({ JoinTokens: JoinTokens }).partial());

export type NetworkAttachmentConfig = z.infer<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = z
  .object({ Target: z.string(), Aliases: z.array(z.string()), DriverOpts: z.record(z.string(), z.string()) })
  .partial();

export type TaskSpec = z.infer<typeof TaskSpec>;
export const TaskSpec = z
  .object({
    PluginSpec: z
      .object({
        Name: z.string(),
        Remote: z.string(),
        Disabled: z.boolean(),
        PluginPrivilege: z.array(PluginPrivilege),
      })
      .partial(),
    ContainerSpec: z
      .object({
        Image: z.string(),
        Labels: z.record(z.string(), z.string()),
        Command: z.array(z.string()),
        Args: z.array(z.string()),
        Hostname: z.string(),
        Env: z.array(z.string()),
        Dir: z.string(),
        User: z.string(),
        Groups: z.array(z.string()),
        Privileges: z
          .object({
            CredentialSpec: z.object({ Config: z.string(), File: z.string(), Registry: z.string() }).partial(),
            SELinuxContext: z
              .object({ Disable: z.boolean(), User: z.string(), Role: z.string(), Type: z.string(), Level: z.string() })
              .partial(),
          })
          .partial(),
        TTY: z.boolean(),
        OpenStdin: z.boolean(),
        ReadOnly: z.boolean(),
        Mounts: z.array(Mount),
        StopSignal: z.string(),
        StopGracePeriod: z.number().int(),
        HealthCheck: HealthConfig,
        Hosts: z.array(z.string()),
        DNSConfig: z
          .object({ Nameservers: z.array(z.string()), Search: z.array(z.string()), Options: z.array(z.string()) })
          .partial(),
        Secrets: z.array(
          z
            .object({
              File: z.object({ Name: z.string(), UID: z.string(), GID: z.string(), Mode: z.number().int() }).partial(),
              SecretID: z.string(),
              SecretName: z.string(),
            })
            .partial(),
        ),
        Configs: z.array(
          z
            .object({
              File: z.object({ Name: z.string(), UID: z.string(), GID: z.string(), Mode: z.number().int() }).partial(),
              Runtime: z.object({}).partial(),
              ConfigID: z.string(),
              ConfigName: z.string(),
            })
            .partial(),
        ),
        Isolation: z.enum(["default", "process", "hyperv"]),
        Init: z.boolean().nullable(),
        Sysctls: z.record(z.string(), z.string()),
        CapabilityAdd: z.array(z.string()),
        CapabilityDrop: z.array(z.string()),
        Ulimits: z.array(z.object({ Name: z.string(), Soft: z.number().int(), Hard: z.number().int() }).partial()),
      })
      .partial(),
    NetworkAttachmentSpec: z.object({ ContainerID: z.string() }).partial(),
    Resources: z.object({ Limits: Limit, Reservations: ResourceObject }).partial(),
    RestartPolicy: z
      .object({
        Condition: z.enum(["none", "on-failure", "any"]),
        Delay: z.number().int(),
        MaxAttempts: z.number().int(),
        Window: z.number().int(),
      })
      .partial(),
    Placement: z
      .object({
        Constraints: z.array(z.string()),
        Preferences: z.array(z.object({ Spread: z.object({ SpreadDescriptor: z.string() }).partial() }).partial()),
        MaxReplicas: z.number().int(),
        Platforms: z.array(Platform),
      })
      .partial(),
    ForceUpdate: z.number().int(),
    Runtime: z.string(),
    Networks: z.array(NetworkAttachmentConfig),
    LogDriver: z.object({ Name: z.string(), Options: z.record(z.string(), z.string()) }).partial(),
  })
  .partial();

export type TaskState = z.infer<typeof TaskState>;
export const TaskState = z.enum([
  "new",
  "allocated",
  "pending",
  "assigned",
  "accepted",
  "preparing",
  "ready",
  "starting",
  "running",
  "complete",
  "shutdown",
  "failed",
  "rejected",
  "remove",
  "orphaned",
]);

export type Task = z.infer<typeof Task>;
export const Task = z
  .object({
    ID: z.string(),
    Version: ObjectVersion,
    CreatedAt: z.string(),
    UpdatedAt: z.string(),
    Name: z.string(),
    Labels: z.record(z.string(), z.string()),
    Spec: TaskSpec,
    ServiceID: z.string(),
    Slot: z.number().int(),
    NodeID: z.string(),
    AssignedGenericResources: GenericResources,
    Status: z
      .object({
        Timestamp: z.string(),
        State: TaskState,
        Message: z.string(),
        Err: z.string(),
        ContainerStatus: z
          .object({ ContainerID: z.string(), PID: z.number().int(), ExitCode: z.number().int() })
          .partial(),
      })
      .partial(),
    DesiredState: TaskState,
    JobIteration: ObjectVersion,
  })
  .partial();

export type EndpointPortConfig = z.infer<typeof EndpointPortConfig>;
export const EndpointPortConfig = z
  .object({
    Name: z.string(),
    Protocol: z.enum(["tcp", "udp", "sctp"]),
    TargetPort: z.number().int(),
    PublishedPort: z.number().int(),
    PublishMode: z.enum(["ingress", "host"]),
  })
  .partial();

export type EndpointSpec = z.infer<typeof EndpointSpec>;
export const EndpointSpec = z.object({ Mode: z.enum(["vip", "dnsrr"]), Ports: z.array(EndpointPortConfig) }).partial();

export type ServiceSpec = z.infer<typeof ServiceSpec>;
export const ServiceSpec = z
  .object({
    Name: z.string(),
    Labels: z.record(z.string(), z.string()),
    TaskTemplate: TaskSpec,
    Mode: z
      .object({
        Replicated: z.object({ Replicas: z.number().int() }).partial(),
        Global: z.object({}).partial(),
        ReplicatedJob: z.object({ MaxConcurrent: z.number().int(), TotalCompletions: z.number().int() }).partial(),
        GlobalJob: z.object({}).partial(),
      })
      .partial(),
    UpdateConfig: z
      .object({
        Parallelism: z.number().int(),
        Delay: z.number().int(),
        FailureAction: z.enum(["continue", "pause", "rollback"]),
        Monitor: z.number().int(),
        MaxFailureRatio: z.number(),
        Order: z.enum(["stop-first", "start-first"]),
      })
      .partial(),
    RollbackConfig: z
      .object({
        Parallelism: z.number().int(),
        Delay: z.number().int(),
        FailureAction: z.enum(["continue", "pause"]),
        Monitor: z.number().int(),
        MaxFailureRatio: z.number(),
        Order: z.enum(["stop-first", "start-first"]),
      })
      .partial(),
    Networks: z.array(NetworkAttachmentConfig),
    EndpointSpec: EndpointSpec,
  })
  .partial();

export type Service = z.infer<typeof Service>;
export const Service = z
  .object({
    ID: z.string(),
    Version: ObjectVersion,
    CreatedAt: z.string(),
    UpdatedAt: z.string(),
    Spec: ServiceSpec,
    Endpoint: z
      .object({
        Spec: EndpointSpec,
        Ports: z.array(EndpointPortConfig),
        VirtualIPs: z.array(z.object({ NetworkID: z.string(), Addr: z.string() }).partial()),
      })
      .partial(),
    UpdateStatus: z
      .object({
        State: z.enum(["updating", "paused", "completed"]),
        StartedAt: z.string(),
        CompletedAt: z.string(),
        Message: z.string(),
      })
      .partial(),
    ServiceStatus: z
      .object({ RunningTasks: z.number().int(), DesiredTasks: z.number().int(), CompletedTasks: z.number().int() })
      .partial(),
    JobStatus: z.object({ JobIteration: ObjectVersion, LastExecution: z.string() }).partial(),
  })
  .partial();

export type ImageDeleteResponseItem = z.infer<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = z.object({ Untagged: z.string(), Deleted: z.string() }).partial();

export type ServiceUpdateResponse = z.infer<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = z.object({ Warnings: z.array(z.string()) }).partial();

export type ContainerSummary = z.infer<typeof ContainerSummary>;
export const ContainerSummary = z
  .object({
    Id: z.string(),
    Names: z.array(z.string()),
    Image: z.string(),
    ImageID: z.string(),
    Command: z.string(),
    Created: z.number().int(),
    Ports: z.array(Port),
    SizeRw: z.number().int(),
    SizeRootFs: z.number().int(),
    Labels: z.record(z.string(), z.string()),
    State: z.string(),
    Status: z.string(),
    HostConfig: z.object({ NetworkMode: z.string() }).partial(),
    NetworkSettings: z.object({ Networks: z.record(z.string(), EndpointSettings) }).partial(),
    Mounts: z.array(MountPoint),
  })
  .partial();

export type Driver = z.infer<typeof Driver>;
export const Driver = z.object({ Name: z.string(), Options: z.record(z.string(), z.string()).optional() });

export type SecretSpec = z.infer<typeof SecretSpec>;
export const SecretSpec = z
  .object({
    Name: z.string(),
    Labels: z.record(z.string(), z.string()),
    Data: z.string(),
    Driver: Driver,
    Templating: Driver,
  })
  .partial();

export type Secret = z.infer<typeof Secret>;
export const Secret = z
  .object({ ID: z.string(), Version: ObjectVersion, CreatedAt: z.string(), UpdatedAt: z.string(), Spec: SecretSpec })
  .partial();

export type ConfigSpec = z.infer<typeof ConfigSpec>;
export const ConfigSpec = z
  .object({ Name: z.string(), Labels: z.record(z.string(), z.string()), Data: z.string(), Templating: Driver })
  .partial();

export type Config = z.infer<typeof Config>;
export const Config = z
  .object({ ID: z.string(), Version: ObjectVersion, CreatedAt: z.string(), UpdatedAt: z.string(), Spec: ConfigSpec })
  .partial();

export type ContainerState = z.infer<typeof ContainerState>;
export const ContainerState = z
  .object({
    Status: z.enum(["created", "running", "paused", "restarting", "removing", "exited", "dead"]),
    Running: z.boolean(),
    Paused: z.boolean(),
    Restarting: z.boolean(),
    OOMKilled: z.boolean(),
    Dead: z.boolean(),
    Pid: z.number().int(),
    ExitCode: z.number().int(),
    Error: z.string(),
    StartedAt: z.string(),
    FinishedAt: z.string(),
    Health: Health,
  })
  .partial()
  .nullable();

export type ContainerCreateResponse = z.infer<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = z.object({ Id: z.string(), Warnings: z.array(z.string()) });

export type ContainerWaitExitError = z.infer<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = z.object({ Message: z.string() }).partial();

export type ContainerWaitResponse = z.infer<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = z.object({
  StatusCode: z.number().int(),
  Error: ContainerWaitExitError.optional(),
});

export type SystemVersion = z.infer<typeof SystemVersion>;
export const SystemVersion = z
  .object({
    Platform: z.object({ Name: z.string() }),
    Components: z.array(
      z.object({ Name: z.string(), Version: z.string(), Details: z.object({}).partial().nullable().optional() }),
    ),
    Version: z.string(),
    ApiVersion: z.string(),
    MinAPIVersion: z.string(),
    GitCommit: z.string(),
    GoVersion: z.string(),
    Os: z.string(),
    Arch: z.string(),
    KernelVersion: z.string(),
    Experimental: z.boolean(),
    BuildTime: z.string(),
  })
  .partial();

export type PluginsInfo = z.infer<typeof PluginsInfo>;
export const PluginsInfo = z
  .object({
    Volume: z.array(z.string()),
    Network: z.array(z.string()),
    Authorization: z.array(z.string()),
    Log: z.array(z.string()),
  })
  .partial();

export type IndexInfo = z.infer<typeof IndexInfo>;
export const IndexInfo = z
  .object({ Name: z.string(), Mirrors: z.array(z.string()), Secure: z.boolean(), Official: z.boolean() })
  .partial()
  .nullable();

export type RegistryServiceConfig = z.infer<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = z
  .object({
    AllowNondistributableArtifactsCIDRs: z.array(z.string()),
    AllowNondistributableArtifactsHostnames: z.array(z.string()),
    InsecureRegistryCIDRs: z.array(z.string()),
    IndexConfigs: z.record(z.string(), IndexInfo),
    Mirrors: z.array(z.string()),
  })
  .partial()
  .nullable();

export type Runtime = z.infer<typeof Runtime>;
export const Runtime = z.object({ path: z.string(), runtimeArgs: z.array(z.string()).nullable() }).partial();

export type LocalNodeState = z.infer<typeof LocalNodeState>;
export const LocalNodeState = z.enum(["", "inactive", "pending", "active", "error", "locked"]);

export type PeerNode = z.infer<typeof PeerNode>;
export const PeerNode = z.object({ NodeID: z.string(), Addr: z.string() }).partial();

export type SwarmInfo = z.infer<typeof SwarmInfo>;
export const SwarmInfo = z
  .object({
    NodeID: z.string(),
    NodeAddr: z.string(),
    LocalNodeState: LocalNodeState,
    ControlAvailable: z.boolean(),
    Error: z.string(),
    RemoteManagers: z.array(PeerNode).nullable(),
    Nodes: z.number().int().nullable(),
    Managers: z.number().int().nullable(),
    Cluster: ClusterInfo,
  })
  .partial();

export type Commit = z.infer<typeof Commit>;
export const Commit = z.object({ ID: z.string(), Expected: z.string() }).partial();

export type SystemInfo = z.infer<typeof SystemInfo>;
export const SystemInfo = z
  .object({
    ID: z.string(),
    Containers: z.number().int(),
    ContainersRunning: z.number().int(),
    ContainersPaused: z.number().int(),
    ContainersStopped: z.number().int(),
    Images: z.number().int(),
    Driver: z.string(),
    DriverStatus: z.array(z.array(z.string())),
    DockerRootDir: z.string(),
    Plugins: PluginsInfo,
    MemoryLimit: z.boolean(),
    SwapLimit: z.boolean(),
    KernelMemoryTCP: z.boolean(),
    CpuCfsPeriod: z.boolean(),
    CpuCfsQuota: z.boolean(),
    CPUShares: z.boolean(),
    CPUSet: z.boolean(),
    PidsLimit: z.boolean(),
    OomKillDisable: z.boolean(),
    IPv4Forwarding: z.boolean(),
    BridgeNfIptables: z.boolean(),
    BridgeNfIp6tables: z.boolean(),
    Debug: z.boolean(),
    NFd: z.number().int(),
    NGoroutines: z.number().int(),
    SystemTime: z.string(),
    LoggingDriver: z.string(),
    CgroupDriver: z.enum(["cgroupfs", "systemd", "none"]),
    CgroupVersion: z.enum(["1", "2"]),
    NEventsListener: z.number().int(),
    KernelVersion: z.string(),
    OperatingSystem: z.string(),
    OSVersion: z.string(),
    OSType: z.string(),
    Architecture: z.string(),
    NCPU: z.number().int(),
    MemTotal: z.number().int(),
    IndexServerAddress: z.string(),
    RegistryConfig: RegistryServiceConfig,
    GenericResources: GenericResources,
    HttpProxy: z.string(),
    HttpsProxy: z.string(),
    NoProxy: z.string(),
    Name: z.string(),
    Labels: z.array(z.string()),
    ExperimentalBuild: z.boolean(),
    ServerVersion: z.string(),
    Runtimes: z.record(z.string(), Runtime),
    DefaultRuntime: z.string(),
    Swarm: SwarmInfo,
    LiveRestoreEnabled: z.boolean(),
    Isolation: z.enum(["default", "hyperv", "process"]),
    InitBinary: z.string(),
    ContainerdCommit: Commit,
    RuncCommit: Commit,
    InitCommit: Commit,
    SecurityOptions: z.array(z.string()),
    ProductLicense: z.string(),
    DefaultAddressPools: z.array(z.object({ Base: z.string(), Size: z.number().int() }).partial()),
    Warnings: z.array(z.string()),
  })
  .partial();

export type EventActor = z.infer<typeof EventActor>;
export const EventActor = z.object({ ID: z.string(), Attributes: z.record(z.string(), z.string()) }).partial();

export type EventMessage = z.infer<typeof EventMessage>;
export const EventMessage = z
  .object({
    Type: z.enum([
      "builder",
      "config",
      "container",
      "daemon",
      "image",
      "network",
      "node",
      "plugin",
      "secret",
      "service",
      "volume",
    ]),
    Action: z.string(),
    Actor: EventActor,
    scope: z.enum(["local", "swarm"]),
    time: z.number().int(),
    timeNano: z.number().int(),
  })
  .partial();

export type OCIDescriptor = z.infer<typeof OCIDescriptor>;
export const OCIDescriptor = z.object({ mediaType: z.string(), digest: z.string(), size: z.number().int() }).partial();

export type OCIPlatform = z.infer<typeof OCIPlatform>;
export const OCIPlatform = z
  .object({
    architecture: z.string(),
    os: z.string(),
    "os.version": z.string(),
    "os.features": z.array(z.string()),
    variant: z.string(),
  })
  .partial();

export type DistributionInspect = z.infer<typeof DistributionInspect>;
export const DistributionInspect = z.object({ Descriptor: OCIDescriptor, Platforms: z.array(OCIPlatform) });

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: z.literal("GET"),
  path: z.literal("/containers/json"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ all: z.boolean(), limit: z.number().int(), size: z.boolean(), filters: z.string() }).partial(),
  },
  responses: { 200: z.array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: z.literal("POST"),
  path: z.literal("/containers/create"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({ name: z.string().regex(new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$")), platform: z.string() })
      .partial(),
    body: ContainerConfig.and(z.object({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }).partial()),
  },
  responses: {
    201: ContainerCreateResponse,
    400: ErrorResponse,
    404: ErrorResponse,
    409: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/json"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ size: z.boolean() }).partial(), path: z.object({ id: z.string() }) },
  responses: {
    200: z
      .object({
        Id: z.string(),
        Created: z.string(),
        Path: z.string(),
        Args: z.array(z.string()),
        State: ContainerState,
        Image: z.string(),
        ResolvConfPath: z.string(),
        HostnamePath: z.string(),
        HostsPath: z.string(),
        LogPath: z.string(),
        Name: z.string(),
        RestartCount: z.number().int(),
        Driver: z.string(),
        Platform: z.string(),
        MountLabel: z.string(),
        ProcessLabel: z.string(),
        AppArmorProfile: z.string(),
        ExecIDs: z.array(z.string()).nullable(),
        HostConfig: HostConfig,
        GraphDriver: GraphDriverData,
        SizeRw: z.number().int(),
        SizeRootFs: z.number().int(),
        Mounts: z.array(MountPoint),
        Config: ContainerConfig,
        NetworkSettings: NetworkSettings,
      })
      .partial(),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/top"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ ps_args: z.string() }).partial(), path: z.object({ id: z.string() }) },
  responses: {
    200: z.object({ Titles: z.array(z.string()), Processes: z.array(z.array(z.string())) }).partial(),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/logs"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        follow: z.boolean(),
        stdout: z.boolean(),
        stderr: z.boolean(),
        since: z.number().int(),
        until: z.number().int(),
        timestamps: z.boolean(),
        tail: z.string(),
      })
      .partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.unknown(), 404: z.unknown(), 500: z.unknown() },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/changes"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: z.array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/export"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: z.unknown(), 404: z.unknown(), 500: z.unknown() },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/stats"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ stream: z.boolean(), "one-shot": z.boolean() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.record(z.string(), z.unknown()), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/resize"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ h: z.number().int(), w: z.number().int() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.unknown(), 404: z.unknown(), 500: z.unknown() },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/start"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ detachKeys: z.string() }).partial(), path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 304: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/stop"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ signal: z.string(), t: z.number().int() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 204: z.unknown(), 304: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/restart"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ signal: z.string(), t: z.number().int() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/kill"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ signal: z.string() }).partial(), path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/update"),
  requestFormat: z.literal("json"),
  parameters: {
    path: z.object({ id: z.string() }),
    body: Resources.and(z.object({ RestartPolicy: RestartPolicy }).partial()),
  },
  responses: { 200: z.object({ Warnings: z.array(z.string()) }).partial(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/rename"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ name: z.string() }), path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/pause"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/unpause"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/attach"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        detachKeys: z.string(),
        logs: z.boolean(),
        stream: z.boolean(),
        stdin: z.boolean(),
        stdout: z.boolean(),
        stderr: z.boolean(),
      })
      .partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 101: z.unknown(), 200: z.unknown(), 400: z.unknown(), 404: z.unknown(), 500: z.unknown() },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/attach/ws"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        detachKeys: z.string(),
        logs: z.boolean(),
        stream: z.boolean(),
        stdin: z.boolean(),
        stdout: z.boolean(),
        stderr: z.boolean(),
      })
      .partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 101: z.unknown(), 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/wait"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ condition: z.enum(["not-running", "next-exit", "removed"]) }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/containers/{id}"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ v: z.boolean(), force: z.boolean(), link: z.boolean() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 204: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/archive"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ path: z.string() }), path: z.object({ id: z.string() }) },
  responses: { 200: z.unknown(), 400: z.unknown(), 404: z.unknown(), 500: z.unknown() },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: z.literal("PUT"),
  path: z.literal("/containers/{id}/archive"),
  requestFormat: z.literal("binary"),
  parameters: {
    query: z.object({
      path: z.string(),
      noOverwriteDirNonDir: z.string().optional(),
      copyUIDGID: z.string().optional(),
    }),
    path: z.object({ id: z.string() }),
    body: z.string(),
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: z.literal("HEAD"),
  path: z.literal("/containers/{id}/archive"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ path: z.string() }), path: z.object({ id: z.string() }) },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: z.object({ "X-Docker-Container-Path-Stat": z.string() }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: z.literal("POST"),
  path: z.literal("/containers/prune"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: {
    200: z.object({ ContainersDeleted: z.array(z.string()), SpaceReclaimed: z.number().int() }).partial(),
    500: ErrorResponse,
  },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: z.literal("GET"),
  path: z.literal("/images/json"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({ all: z.boolean(), filters: z.string(), "shared-size": z.boolean(), digests: z.boolean() })
      .partial(),
  },
  responses: { 200: z.array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: z.literal("POST"),
  path: z.literal("/build"),
  requestFormat: z.literal("binary"),
  parameters: {
    query: z
      .object({
        dockerfile: z.string(),
        t: z.string(),
        extrahosts: z.string(),
        remote: z.string(),
        q: z.boolean(),
        nocache: z.boolean(),
        cachefrom: z.string(),
        pull: z.string(),
        rm: z.boolean(),
        forcerm: z.boolean(),
        memory: z.number().int(),
        memswap: z.number().int(),
        cpushares: z.number().int(),
        cpusetcpus: z.string(),
        cpuperiod: z.number().int(),
        cpuquota: z.number().int(),
        buildargs: z.string(),
        shmsize: z.number().int(),
        squash: z.boolean(),
        labels: z.string(),
        networkmode: z.string(),
        platform: z.string(),
        target: z.string(),
        outputs: z.string(),
      })
      .partial(),
    header: z.object({ "Content-type": z.literal("application/x-tar"), "X-Registry-Config": z.string() }).partial(),
    body: z.string(),
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: z.literal("POST"),
  path: z.literal("/build/prune"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ "keep-storage": z.number().int(), all: z.boolean(), filters: z.string() }).partial(),
  },
  responses: {
    200: z.object({ CachesDeleted: z.array(z.string()), SpaceReclaimed: z.number().int() }).partial(),
    500: ErrorResponse,
  },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: z.literal("POST"),
  path: z.literal("/images/create"),
  requestFormat: z.literal("text"),
  parameters: {
    query: z
      .object({
        fromImage: z.string(),
        fromSrc: z.string(),
        repo: z.string(),
        tag: z.string(),
        message: z.string(),
        changes: z.array(z.string()),
        platform: z.string(),
      })
      .partial(),
    header: z.object({ "X-Registry-Auth": z.string() }).partial(),
    body: z.string(),
  },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/json"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/history"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: {
    200: z.array(
      z.object({
        Id: z.string(),
        Created: z.number().int(),
        CreatedBy: z.string(),
        Tags: z.array(z.string()),
        Size: z.number().int(),
        Comment: z.string(),
      }),
    ),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: z.literal("POST"),
  path: z.literal("/images/{name}/push"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ tag: z.string() }).partial(),
    path: z.object({ name: z.string() }),
    header: z.object({ "X-Registry-Auth": z.string() }),
  },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: z.literal("POST"),
  path: z.literal("/images/{name}/tag"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ repo: z.string(), tag: z.string() }).partial(),
    path: z.object({ name: z.string() }),
  },
  responses: { 201: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/images/{name}"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ force: z.boolean(), noprune: z.boolean() }).partial(),
    path: z.object({ name: z.string() }),
  },
  responses: { 200: z.array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: z.literal("GET"),
  path: z.literal("/images/search"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ term: z.string(), limit: z.number().int().optional(), filters: z.string().optional() }),
  },
  responses: {
    200: z.array(
      z
        .object({
          description: z.string(),
          is_official: z.boolean(),
          is_automated: z.boolean(),
          name: z.string(),
          star_count: z.number().int(),
        })
        .partial(),
    ),
    500: ErrorResponse,
  },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: z.literal("POST"),
  path: z.literal("/images/prune"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: {
    200: z.object({ ImagesDeleted: z.array(ImageDeleteResponseItem), SpaceReclaimed: z.number().int() }).partial(),
    500: ErrorResponse,
  },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: z.literal("POST"),
  path: z.literal("/auth"),
  requestFormat: z.literal("json"),
  parameters: { body: AuthConfig },
  responses: {
    200: z.object({ Status: z.string(), IdentityToken: z.string().optional() }),
    204: z.unknown(),
    401: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: z.literal("GET"),
  path: z.literal("/info"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: z.literal("GET"),
  path: z.literal("/version"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: z.literal("GET"),
  path: z.literal("/_ping"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: z.unknown(), 500: z.unknown() },
  responseHeaders: {
    200: z.object({
      Swarm: z.enum(["inactive", "pending", "error", "locked", "active/worker", "active/manager"]),
      "Docker-Experimental": z.boolean(),
      "Cache-Control": z.string(),
      Pragma: z.string(),
      "API-Version": z.string(),
      "Builder-Version": z.string(),
    }),
    500: z.object({ "Cache-Control": z.string(), Pragma: z.string() }),
  },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: z.literal("HEAD"),
  path: z.literal("/_ping"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: z.unknown(), 500: z.unknown() },
  responseHeaders: {
    200: z.object({
      Swarm: z.enum(["inactive", "pending", "error", "locked", "active/worker", "active/manager"]),
      "Docker-Experimental": z.boolean(),
      "Cache-Control": z.string(),
      Pragma: z.string(),
      "API-Version": z.string(),
      "Builder-Version": z.string(),
    }),
  },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: z.literal("POST"),
  path: z.literal("/commit"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        container: z.string(),
        repo: z.string(),
        tag: z.string(),
        comment: z.string(),
        author: z.string(),
        pause: z.boolean(),
        changes: z.string(),
      })
      .partial(),
    body: ContainerConfig,
  },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: z.literal("GET"),
  path: z.literal("/events"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ since: z.string(), until: z.string(), filters: z.string() }).partial() },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: z.literal("GET"),
  path: z.literal("/system/df"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ type: z.array(z.enum(["container", "image", "volume", "build-cache"])) }).partial() },
  responses: {
    200: z
      .object({
        LayersSize: z.number().int(),
        Images: z.array(ImageSummary),
        Containers: z.array(ContainerSummary),
        Volumes: z.array(Volume),
        BuildCache: z.array(BuildCache),
      })
      .partial(),
    500: ErrorResponse,
  },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/get"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: z.unknown(), 500: z.unknown() },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: z.literal("GET"),
  path: z.literal("/images/get"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ names: z.array(z.string()) }).partial() },
  responses: { 200: z.unknown(), 500: z.unknown() },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: z.literal("POST"),
  path: z.literal("/images/load"),
  requestFormat: z.literal("text"),
  parameters: { query: z.object({ quiet: z.boolean() }).partial() },
  responses: { 200: z.unknown(), 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/exec"),
  requestFormat: z.literal("json"),
  parameters: {
    path: z.object({ id: z.string() }),
    body: z
      .object({
        AttachStdin: z.boolean(),
        AttachStdout: z.boolean(),
        AttachStderr: z.boolean(),
        ConsoleSize: z.array(z.number().int().min(0)).min(2).max(2).nullable(),
        DetachKeys: z.string(),
        Tty: z.boolean(),
        Env: z.array(z.string()),
        Cmd: z.array(z.string()),
        Privileged: z.boolean(),
        User: z.string(),
        WorkingDir: z.string(),
      })
      .partial(),
  },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: z.literal("POST"),
  path: z.literal("/exec/{id}/start"),
  requestFormat: z.literal("json"),
  parameters: {
    path: z.object({ id: z.string() }),
    body: z
      .object({
        Detach: z.boolean(),
        Tty: z.boolean(),
        ConsoleSize: z.array(z.number().int().min(0)).min(2).max(2).nullable(),
      })
      .partial(),
  },
  responses: { 200: z.unknown(), 404: z.unknown(), 409: z.unknown() },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: z.literal("POST"),
  path: z.literal("/exec/{id}/resize"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ h: z.number().int(), w: z.number().int() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: z.literal("GET"),
  path: z.literal("/exec/{id}/json"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: {
    200: z
      .object({
        CanRemove: z.boolean(),
        DetachKeys: z.string(),
        ID: z.string(),
        Running: z.boolean(),
        ExitCode: z.number().int(),
        ProcessConfig: ProcessConfig,
        OpenStdin: z.boolean(),
        OpenStderr: z.boolean(),
        OpenStdout: z.boolean(),
        ContainerID: z.string(),
        Pid: z.number().int(),
      })
      .partial(),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: z.literal("GET"),
  path: z.literal("/volumes"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: z.literal("POST"),
  path: z.literal("/volumes/create"),
  requestFormat: z.literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: z.literal("GET"),
  path: z.literal("/volumes/{name}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: z.literal("PUT"),
  path: z.literal("/volumes/{name}"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ version: z.number().int() }),
    path: z.object({ name: z.string() }),
    body: z.object({ Spec: ClusterVolumeSpec }).partial(),
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/volumes/{name}"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ force: z.boolean() }).partial(), path: z.object({ name: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: z.literal("POST"),
  path: z.literal("/volumes/prune"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: {
    200: z.object({ VolumesDeleted: z.array(z.string()), SpaceReclaimed: z.number().int() }).partial(),
    500: ErrorResponse,
  },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: z.literal("GET"),
  path: z.literal("/networks"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: z.literal("GET"),
  path: z.literal("/networks/{id}"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ verbose: z.boolean(), scope: z.string() }).partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/networks/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: z.literal("POST"),
  path: z.literal("/networks/create"),
  requestFormat: z.literal("json"),
  parameters: {
    body: z.object({
      Name: z.string(),
      CheckDuplicate: z.boolean().optional(),
      Driver: z.string().optional(),
      Internal: z.boolean().optional(),
      Attachable: z.boolean().optional(),
      Ingress: z.boolean().optional(),
      IPAM: IPAM.optional(),
      EnableIPv6: z.boolean().optional(),
      Options: z.record(z.string(), z.string()).optional(),
      Labels: z.record(z.string(), z.string()).optional(),
    }),
  },
  responses: {
    201: z.object({ Id: z.string(), Warning: z.string() }).partial(),
    403: ErrorResponse,
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: z.literal("POST"),
  path: z.literal("/networks/{id}/connect"),
  requestFormat: z.literal("json"),
  parameters: {
    path: z.object({ id: z.string() }),
    body: z.object({ Container: z.string(), EndpointConfig: EndpointSettings }).partial(),
  },
  responses: { 200: z.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: z.literal("POST"),
  path: z.literal("/networks/{id}/disconnect"),
  requestFormat: z.literal("json"),
  parameters: {
    path: z.object({ id: z.string() }),
    body: z.object({ Container: z.string(), Force: z.boolean() }).partial(),
  },
  responses: { 200: z.unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: z.literal("POST"),
  path: z.literal("/networks/prune"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.object({ NetworksDeleted: z.array(z.string()) }).partial(), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: z.literal("GET"),
  path: z.literal("/plugins"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: z.literal("GET"),
  path: z.literal("/plugins/privileges"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ remote: z.string() }) },
  responses: { 200: z.array(PluginPrivilege), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: z.literal("POST"),
  path: z.literal("/plugins/pull"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ remote: z.string(), name: z.string().optional() }),
    header: z.object({ "X-Registry-Auth": z.string() }).partial(),
    body: z.array(PluginPrivilege),
  },
  responses: { 204: z.unknown(), 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: z.literal("GET"),
  path: z.literal("/plugins/{name}/json"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/plugins/{name}"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ force: z.boolean() }).partial(), path: z.object({ name: z.string() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/enable"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ timeout: z.number().int() }).partial(), path: z.object({ name: z.string() }) },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/disable"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ force: z.boolean() }).partial(), path: z.object({ name: z.string() }) },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/upgrade"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ remote: z.string() }),
    path: z.object({ name: z.string() }),
    header: z.object({ "X-Registry-Auth": z.string() }).partial(),
    body: z.array(PluginPrivilege),
  },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: z.literal("POST"),
  path: z.literal("/plugins/create"),
  requestFormat: z.literal("text"),
  parameters: { query: z.object({ name: z.string() }) },
  responses: { 204: z.unknown(), 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/push"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/set"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }), body: z.array(z.string()) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: z.literal("GET"),
  path: z.literal("/nodes"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Node), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: z.literal("GET"),
  path: z.literal("/nodes/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/nodes/{id}"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ force: z.boolean() }).partial(), path: z.object({ id: z.string() }) },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: z.literal("POST"),
  path: z.literal("/nodes/{id}/update"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ version: z.number().int() }), path: z.object({ id: z.string() }), body: NodeSpec },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: z.literal("GET"),
  path: z.literal("/swarm"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: z.literal("POST"),
  path: z.literal("/swarm/init"),
  requestFormat: z.literal("json"),
  parameters: {
    body: z
      .object({
        ListenAddr: z.string(),
        AdvertiseAddr: z.string(),
        DataPathAddr: z.string(),
        DataPathPort: z.number().int(),
        DefaultAddrPool: z.array(z.string()),
        ForceNewCluster: z.boolean(),
        SubnetSize: z.number().int(),
        Spec: SwarmSpec,
      })
      .partial(),
  },
  responses: { 200: z.string(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: z.literal("POST"),
  path: z.literal("/swarm/join"),
  requestFormat: z.literal("json"),
  parameters: {
    body: z
      .object({
        ListenAddr: z.string(),
        AdvertiseAddr: z.string(),
        DataPathAddr: z.string(),
        RemoteAddrs: z.array(z.string()),
        JoinToken: z.string(),
      })
      .partial(),
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: z.literal("POST"),
  path: z.literal("/swarm/leave"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ force: z.boolean() }).partial() },
  responses: { 200: z.unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: z.literal("POST"),
  path: z.literal("/swarm/update"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({
      version: z.number().int(),
      rotateWorkerToken: z.boolean().optional(),
      rotateManagerToken: z.boolean().optional(),
      rotateManagerUnlockKey: z.boolean().optional(),
    }),
    body: SwarmSpec,
  },
  responses: { 200: z.unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: z.literal("GET"),
  path: z.literal("/swarm/unlockkey"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: z.object({ UnlockKey: z.string() }).partial(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: z.literal("POST"),
  path: z.literal("/swarm/unlock"),
  requestFormat: z.literal("json"),
  parameters: { body: z.object({ UnlockKey: z.string() }).partial() },
  responses: { 200: z.unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: z.literal("GET"),
  path: z.literal("/services"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string(), status: z.boolean() }).partial() },
  responses: { 200: z.array(Service), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: z.literal("POST"),
  path: z.literal("/services/create"),
  requestFormat: z.literal("json"),
  parameters: {
    header: z.object({ "X-Registry-Auth": z.string() }).partial(),
    body: ServiceSpec.and(z.record(z.string(), z.unknown())),
  },
  responses: {
    201: z.object({ ID: z.string(), Warning: z.string() }).partial(),
    400: ErrorResponse,
    403: ErrorResponse,
    409: ErrorResponse,
    500: ErrorResponse,
    503: ErrorResponse,
  },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: z.literal("GET"),
  path: z.literal("/services/{id}"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ insertDefaults: z.boolean() }).partial(), path: z.object({ id: z.string() }) },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/services/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: z.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: z.literal("POST"),
  path: z.literal("/services/{id}/update"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({
      version: z.number().int(),
      registryAuthFrom: z.enum(["spec", "previous-spec"]).optional(),
      rollback: z.string().optional(),
    }),
    path: z.object({ id: z.string() }),
    header: z.object({ "X-Registry-Auth": z.string() }).partial(),
    body: ServiceSpec.and(z.record(z.string(), z.unknown())),
  },
  responses: {
    200: ServiceUpdateResponse,
    400: ErrorResponse,
    404: ErrorResponse,
    500: ErrorResponse,
    503: ErrorResponse,
  },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: z.literal("GET"),
  path: z.literal("/services/{id}/logs"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        details: z.boolean(),
        follow: z.boolean(),
        stdout: z.boolean(),
        stderr: z.boolean(),
        since: z.number().int(),
        timestamps: z.boolean(),
        tail: z.string(),
      })
      .partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.unknown(), 404: z.unknown(), 500: z.unknown(), 503: z.unknown() },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: z.literal("GET"),
  path: z.literal("/tasks"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: z.literal("GET"),
  path: z.literal("/tasks/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: z.literal("GET"),
  path: z.literal("/tasks/{id}/logs"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z
      .object({
        details: z.boolean(),
        follow: z.boolean(),
        stdout: z.boolean(),
        stderr: z.boolean(),
        since: z.number().int(),
        timestamps: z.boolean(),
        tail: z.string(),
      })
      .partial(),
    path: z.object({ id: z.string() }),
  },
  responses: { 200: z.unknown(), 404: z.unknown(), 500: z.unknown(), 503: z.unknown() },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: z.literal("GET"),
  path: z.literal("/secrets"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: z.literal("POST"),
  path: z.literal("/secrets/create"),
  requestFormat: z.literal("json"),
  parameters: { body: SecretSpec.and(z.record(z.string(), z.unknown())) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: z.literal("GET"),
  path: z.literal("/secrets/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/secrets/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: z.literal("POST"),
  path: z.literal("/secrets/{id}/update"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ version: z.number().int() }), path: z.object({ id: z.string() }), body: SecretSpec },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: z.literal("GET"),
  path: z.literal("/configs"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ filters: z.string() }).partial() },
  responses: { 200: z.array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: z.literal("POST"),
  path: z.literal("/configs/create"),
  requestFormat: z.literal("json"),
  parameters: { body: ConfigSpec.and(z.record(z.string(), z.unknown())) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: z.literal("GET"),
  path: z.literal("/configs/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/configs/{id}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ id: z.string() }) },
  responses: { 204: z.unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: z.literal("POST"),
  path: z.literal("/configs/{id}/update"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ version: z.number().int() }), path: z.object({ id: z.string() }), body: ConfigSpec },
  responses: { 200: z.unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: z.literal("GET"),
  path: z.literal("/distribution/{name}/json"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ name: z.string() }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: z.literal("POST"),
  path: z.literal("/session"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 101: z.unknown(), 400: z.unknown(), 500: z.unknown() },
};

// </Endpoints>

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/containers/json": get_ContainerList,
    "/containers/{id}/json": get_ContainerInspect,
    "/containers/{id}/top": get_ContainerTop,
    "/containers/{id}/logs": get_ContainerLogs,
    "/containers/{id}/changes": get_ContainerChanges,
    "/containers/{id}/export": get_ContainerExport,
    "/containers/{id}/stats": get_ContainerStats,
    "/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
    "/containers/{id}/archive": get_ContainerArchive,
    "/images/json": get_ImageList,
    "/images/{name}/json": get_ImageInspect,
    "/images/{name}/history": get_ImageHistory,
    "/images/search": get_ImageSearch,
    "/info": get_SystemInfo,
    "/version": get_SystemVersion,
    "/_ping": get_SystemPing,
    "/events": get_SystemEvents,
    "/system/df": get_SystemDataUsage,
    "/images/{name}/get": get_ImageGet,
    "/images/get": get_ImageGetAll,
    "/exec/{id}/json": get_ExecInspect,
    "/volumes": get_VolumeList,
    "/volumes/{name}": get_VolumeInspect,
    "/networks": get_NetworkList,
    "/networks/{id}": get_NetworkInspect,
    "/plugins": get_PluginList,
    "/plugins/privileges": get_GetPluginPrivileges,
    "/plugins/{name}/json": get_PluginInspect,
    "/nodes": get_NodeList,
    "/nodes/{id}": get_NodeInspect,
    "/swarm": get_SwarmInspect,
    "/swarm/unlockkey": get_SwarmUnlockkey,
    "/services": get_ServiceList,
    "/services/{id}": get_ServiceInspect,
    "/services/{id}/logs": get_ServiceLogs,
    "/tasks": get_TaskList,
    "/tasks/{id}": get_TaskInspect,
    "/tasks/{id}/logs": get_TaskLogs,
    "/secrets": get_SecretList,
    "/secrets/{id}": get_SecretInspect,
    "/configs": get_ConfigList,
    "/configs/{id}": get_ConfigInspect,
    "/distribution/{name}/json": get_DistributionInspect,
  },
  post: {
    "/containers/create": post_ContainerCreate,
    "/containers/{id}/resize": post_ContainerResize,
    "/containers/{id}/start": post_ContainerStart,
    "/containers/{id}/stop": post_ContainerStop,
    "/containers/{id}/restart": post_ContainerRestart,
    "/containers/{id}/kill": post_ContainerKill,
    "/containers/{id}/update": post_ContainerUpdate,
    "/containers/{id}/rename": post_ContainerRename,
    "/containers/{id}/pause": post_ContainerPause,
    "/containers/{id}/unpause": post_ContainerUnpause,
    "/containers/{id}/attach": post_ContainerAttach,
    "/containers/{id}/wait": post_ContainerWait,
    "/containers/prune": post_ContainerPrune,
    "/build": post_ImageBuild,
    "/build/prune": post_BuildPrune,
    "/images/create": post_ImageCreate,
    "/images/{name}/push": post_ImagePush,
    "/images/{name}/tag": post_ImageTag,
    "/images/prune": post_ImagePrune,
    "/auth": post_SystemAuth,
    "/commit": post_ImageCommit,
    "/images/load": post_ImageLoad,
    "/containers/{id}/exec": post_ContainerExec,
    "/exec/{id}/start": post_ExecStart,
    "/exec/{id}/resize": post_ExecResize,
    "/volumes/create": post_VolumeCreate,
    "/volumes/prune": post_VolumePrune,
    "/networks/create": post_NetworkCreate,
    "/networks/{id}/connect": post_NetworkConnect,
    "/networks/{id}/disconnect": post_NetworkDisconnect,
    "/networks/prune": post_NetworkPrune,
    "/plugins/pull": post_PluginPull,
    "/plugins/{name}/enable": post_PluginEnable,
    "/plugins/{name}/disable": post_PluginDisable,
    "/plugins/{name}/upgrade": post_PluginUpgrade,
    "/plugins/create": post_PluginCreate,
    "/plugins/{name}/push": post_PluginPush,
    "/plugins/{name}/set": post_PluginSet,
    "/nodes/{id}/update": post_NodeUpdate,
    "/swarm/init": post_SwarmInit,
    "/swarm/join": post_SwarmJoin,
    "/swarm/leave": post_SwarmLeave,
    "/swarm/update": post_SwarmUpdate,
    "/swarm/unlock": post_SwarmUnlock,
    "/services/create": post_ServiceCreate,
    "/services/{id}/update": post_ServiceUpdate,
    "/secrets/create": post_SecretCreate,
    "/secrets/{id}/update": post_SecretUpdate,
    "/configs/create": post_ConfigCreate,
    "/configs/{id}/update": post_ConfigUpdate,
    "/session": post_Session,
  },
  delete: {
    "/containers/{id}": delete_ContainerDelete,
    "/images/{name}": delete_ImageDelete,
    "/volumes/{name}": delete_VolumeDelete,
    "/networks/{id}": delete_NetworkDelete,
    "/plugins/{name}": delete_PluginDelete,
    "/nodes/{id}": delete_NodeDelete,
    "/services/{id}": delete_ServiceDelete,
    "/secrets/{id}": delete_SecretDelete,
    "/configs/{id}": delete_ConfigDelete,
  },
  put: {
    "/containers/{id}/archive": put_PutContainerArchive,
    "/volumes/{name}": put_VolumeUpdate,
  },
  head: {
    "/containers/{id}/archive": head_ContainerArchiveInfo,
    "/_ping": head_SystemPingHead,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type PutEndpoints = EndpointByMethod["put"];
export type HeadEndpoints = EndpointByMethod["head"];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: Record<string, string>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<Response>;
  parseResponseData?: (response: Response) => Promise<unknown>;
}

export const successStatusCodes = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;
export type SuccessStatusCode = (typeof successStatusCodes)[number];

export const errorStatusCodes = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;
export type ErrorStatusCode = (typeof errorStatusCodes)[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<
  Headers,
  "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"
> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
  ) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[];
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  forEach: (
    callbackfn: (
      value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}),
      key: Extract<keyof TypedHeaderValues, string> | (string & {}),
      parent: TypedHeaders<TypedHeaderValues>,
    ) => void,
    thisArg?: any,
  ) => void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<
  Response,
  "ok" | "status" | "json" | "headers"
> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<
  Response,
  "ok" | "status" | "json" | "headers"
> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
      : never;
}[keyof TAllResponses];

type InferSchemaValue<T> = T extends z.ZodType
  ? z.infer<T>
  : T extends object
    ? { [K in keyof T]: InferSchemaValue<T[K]> }
    : T;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<
        InferSchemaValue<TResponses>,
        TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never
      >
    : never
  : never;

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<
  SafeApiResponse<TEndpoint>,
  { status: TStatusCode }
>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = "TypedStatusError";
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>

// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (schema as { parse: (v: unknown) => unknown }).parse(value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    this.onValidate = onValidate;
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: Record<string, string>): string => {
    return url
      .replace(/{(\w+)}/g, (_, key: string) => params[key] || `{${key}}`)
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => params[key] || `:${key}`);
  };

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: Record<string, unknown> | undefined): URLSearchParams | undefined => {
    if (!queryParams) return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  };

  defaultParseResponseData = async (response: Response): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.startsWith("text/")) {
      return await response.text();
    }

    if (contentType === "application/octet-stream") {
      return await response.arrayBuffer();
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
    ) {
      try {
        return await response.json();
      } catch {
        return undefined;
      }
    }

    return;
  };

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("get", path, ...params);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("post", path, ...params);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("delete", path, ...params);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("put", path, ...params);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  head<Path extends keyof HeadEndpoints, _TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("head", path, ...params);
  }
  // </ApiClient.head>

  // <ApiClient.request>
  /**
   * Generic request method with full type-safety for any endpoint
   */
  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: MaybeOptionalArg<any>): Promise<any> {
    return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const {
        withResponse: _,
        throwOnStatusError = withResponse ? false : true,
        overrides,
        validate: validateOverride,
        ...fetchParams
      } = requestParams || {};
      const validateSide: ValidateSide = validateOverride ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
      if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
      if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
      if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;

      const endpointSchema = (EndpointByMethod as any)[method]?.[path];
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema?.parameters && endpointSchema.parameters !== undefined) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path"] as const) {
          const schema = paramSchema[key];
          const value = (parametersToSend as any)[key];
          if (schema && value !== undefined) {
            (parametersToSend as any)[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              onValidate: this.onValidate,
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
        this.baseUrl + (path as string),
        (parametersToSend.path ?? {}) as Record<string, string>,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(
        parametersToSend.query,
      );

      const response = await this.fetcher.fetch({
        method: method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError,
      });
      let data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
      const shouldValidateOutput = validateSide === "output" || validateSide === "both";
      if (shouldValidateOutput && response.ok && endpointSchema?.responses) {
        const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {
          data = await runValidate({
            side: "output",
            method: String(method),
            path: String(path),
            schema: responseSchema,
            value: data,
            onValidate: this.onValidate,
          });
        }
      }
      const typedResponse = Object.assign(response, {
        data: data,
        json: () => Promise.resolve(data),
      }) as SafeApiResponse<TEndpoint>;

      if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
        throw new TypedStatusError(typedResponse as never);
      }

      return withResponse ? typedResponse : data;
    })() as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
  }
  // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>
