import z from "zod";

export type Port = z.infer<typeof Port>;
export const Port = z.object({
  IP: z.union([z.string(), z.undefined()]).optional(),
  PrivatePort: z.number(),
  PublicPort: z.union([z.number(), z.undefined()]).optional(),
  Type: z.union([z.literal("tcp"), z.literal("udp"), z.literal("sctp")]),
});

export type MountPoint = z.infer<typeof MountPoint>;
export const MountPoint = z.object({
  Type: z
    .union([z.literal("bind"), z.literal("volume"), z.literal("tmpfs"), z.literal("npipe"), z.literal("cluster")])
    .optional(),
  Name: z.string().optional(),
  Source: z.string().optional(),
  Destination: z.string().optional(),
  Driver: z.string().optional(),
  Mode: z.string().optional(),
  RW: z.boolean().optional(),
  Propagation: z.string().optional(),
});

export type DeviceMapping = z.infer<typeof DeviceMapping>;
export const DeviceMapping = z.object({
  PathOnHost: z.string().optional(),
  PathInContainer: z.string().optional(),
  CgroupPermissions: z.string().optional(),
});

export type DeviceRequest = z.infer<typeof DeviceRequest>;
export const DeviceRequest = z.object({
  Driver: z.string().optional(),
  Count: z.number().optional(),
  DeviceIDs: z.array(z.string()).optional(),
  Capabilities: z.array(z.array(z.string())).optional(),
  Options: z.unknown().optional(),
});

export type ThrottleDevice = z.infer<typeof ThrottleDevice>;
export const ThrottleDevice = z.object({
  Path: z.string().optional(),
  Rate: z.number().optional(),
});

export type Mount = z.infer<typeof Mount>;
export const Mount = z.object({
  Target: z.string().optional(),
  Source: z.string().optional(),
  Type: z
    .union([z.literal("bind"), z.literal("volume"), z.literal("tmpfs"), z.literal("npipe"), z.literal("cluster")])
    .optional(),
  ReadOnly: z.boolean().optional(),
  Consistency: z.string().optional(),
  BindOptions: z
    .object({
      Propagation: z
        .union([
          z.literal("private"),
          z.literal("rprivate"),
          z.literal("shared"),
          z.literal("rshared"),
          z.literal("slave"),
          z.literal("rslave"),
        ])
        .optional(),
      NonRecursive: z.boolean().optional(),
      CreateMountpoint: z.boolean().optional(),
    })
    .optional(),
  VolumeOptions: z
    .object({
      NoCopy: z.boolean().optional(),
      Labels: z.unknown().optional(),
      DriverConfig: z
        .object({
          Name: z.string().optional(),
          Options: z.unknown().optional(),
        })
        .optional(),
    })
    .optional(),
  TmpfsOptions: z
    .object({
      SizeBytes: z.number().optional(),
      Mode: z.number().optional(),
    })
    .optional(),
});

export type RestartPolicy = z.infer<typeof RestartPolicy>;
export const RestartPolicy = z.object({
  Name: z
    .union([z.literal(""), z.literal("no"), z.literal("always"), z.literal("unless-stopped"), z.literal("on-failure")])
    .optional(),
  MaximumRetryCount: z.number().optional(),
});

export type Resources = z.infer<typeof Resources>;
export const Resources = z.object({
  CpuShares: z.number().optional(),
  Memory: z.number().optional(),
  CgroupParent: z.string().optional(),
  BlkioWeight: z.number().optional(),
  BlkioWeightDevice: z
    .array(
      z.object({
        Path: z.string().optional(),
        Weight: z.number().optional(),
      }),
    )
    .optional(),
  BlkioDeviceReadBps: z.array(ThrottleDevice).optional(),
  BlkioDeviceWriteBps: z.array(ThrottleDevice).optional(),
  BlkioDeviceReadIOps: z.array(ThrottleDevice).optional(),
  BlkioDeviceWriteIOps: z.array(ThrottleDevice).optional(),
  CpuPeriod: z.number().optional(),
  CpuQuota: z.number().optional(),
  CpuRealtimePeriod: z.number().optional(),
  CpuRealtimeRuntime: z.number().optional(),
  CpusetCpus: z.string().optional(),
  CpusetMems: z.string().optional(),
  Devices: z.array(DeviceMapping).optional(),
  DeviceCgroupRules: z.array(z.string()).optional(),
  DeviceRequests: z.array(DeviceRequest).optional(),
  KernelMemoryTCP: z.number().optional(),
  MemoryReservation: z.number().optional(),
  MemorySwap: z.number().optional(),
  MemorySwappiness: z.number().optional(),
  NanoCpus: z.number().optional(),
  OomKillDisable: z.boolean().optional(),
  Init: z.union([z.boolean(), z.null()]).optional(),
  PidsLimit: z.union([z.number(), z.null()]).optional(),
  Ulimits: z
    .array(
      z.object({
        Name: z.string().optional(),
        Soft: z.number().optional(),
        Hard: z.number().optional(),
      }),
    )
    .optional(),
  CpuCount: z.number().optional(),
  CpuPercent: z.number().optional(),
  IOMaximumIOps: z.number().optional(),
  IOMaximumBandwidth: z.number().optional(),
});

export type Limit = z.infer<typeof Limit>;
export const Limit = z.object({
  NanoCPUs: z.number().optional(),
  MemoryBytes: z.number().optional(),
  Pids: z.number().optional(),
});

export type GenericResources = z.infer<typeof GenericResources>;
export const GenericResources = z.array(
  z.object({
    NamedResourceSpec: z
      .object({
        Kind: z.string().optional(),
        Value: z.string().optional(),
      })
      .optional(),
    DiscreteResourceSpec: z
      .object({
        Kind: z.string().optional(),
        Value: z.number().optional(),
      })
      .optional(),
  }),
);

export type ResourceObject = z.infer<typeof ResourceObject>;
export const ResourceObject = z.object({
  NanoCPUs: z.number().optional(),
  MemoryBytes: z.number().optional(),
  GenericResources: GenericResources.optional(),
});

export type HealthConfig = z.infer<typeof HealthConfig>;
export const HealthConfig = z.object({
  Test: z.array(z.string()).optional(),
  Interval: z.number().optional(),
  Timeout: z.number().optional(),
  Retries: z.number().optional(),
  StartPeriod: z.number().optional(),
});

export type HealthcheckResult = z.infer<typeof HealthcheckResult>;
export const HealthcheckResult = z.union([
  z.object({
    Start: z.string().optional(),
    End: z.string().optional(),
    ExitCode: z.number().optional(),
    Output: z.string().optional(),
  }),
  z.null(),
]);

export type Health = z.infer<typeof Health>;
export const Health = z.union([
  z.object({
    Status: z
      .union([z.literal("none"), z.literal("starting"), z.literal("healthy"), z.literal("unhealthy")])
      .optional(),
    FailingStreak: z.number().optional(),
    Log: z.array(HealthcheckResult).optional(),
  }),
  z.null(),
]);

export type PortBinding = z.infer<typeof PortBinding>;
export const PortBinding = z.object({
  HostIp: z.string().optional(),
  HostPort: z.string().optional(),
});

export type PortMap = z.infer<typeof PortMap>;
export const PortMap = z.unknown();

export type HostConfig = z.infer<typeof HostConfig>;
export const HostConfig = z.intersection(
  Resources,
  z.object({
    Binds: z.array(z.string()).optional(),
    ContainerIDFile: z.string().optional(),
    LogConfig: z
      .object({
        Type: z
          .union([
            z.literal("json-file"),
            z.literal("syslog"),
            z.literal("journald"),
            z.literal("gelf"),
            z.literal("fluentd"),
            z.literal("awslogs"),
            z.literal("splunk"),
            z.literal("etwlogs"),
            z.literal("none"),
          ])
          .optional(),
        Config: z.unknown().optional(),
      })
      .optional(),
    NetworkMode: z.string().optional(),
    PortBindings: PortMap.optional(),
    RestartPolicy: RestartPolicy.optional(),
    AutoRemove: z.boolean().optional(),
    VolumeDriver: z.string().optional(),
    VolumesFrom: z.array(z.string()).optional(),
    Mounts: z.array(Mount).optional(),
    ConsoleSize: z.union([z.array(z.number()), z.null()]).optional(),
    Annotations: z.unknown().optional(),
    CapAdd: z.array(z.string()).optional(),
    CapDrop: z.array(z.string()).optional(),
    CgroupnsMode: z.union([z.literal("private"), z.literal("host")]).optional(),
    Dns: z.array(z.string()).optional(),
    DnsOptions: z.array(z.string()).optional(),
    DnsSearch: z.array(z.string()).optional(),
    ExtraHosts: z.array(z.string()).optional(),
    GroupAdd: z.array(z.string()).optional(),
    IpcMode: z.string().optional(),
    Cgroup: z.string().optional(),
    Links: z.array(z.string()).optional(),
    OomScoreAdj: z.number().optional(),
    PidMode: z.string().optional(),
    Privileged: z.boolean().optional(),
    PublishAllPorts: z.boolean().optional(),
    ReadonlyRootfs: z.boolean().optional(),
    SecurityOpt: z.array(z.string()).optional(),
    StorageOpt: z.unknown().optional(),
    Tmpfs: z.unknown().optional(),
    UTSMode: z.string().optional(),
    UsernsMode: z.string().optional(),
    ShmSize: z.number().optional(),
    Sysctls: z.unknown().optional(),
    Runtime: z.string().optional(),
    Isolation: z.union([z.literal("default"), z.literal("process"), z.literal("hyperv")]).optional(),
    MaskedPaths: z.array(z.string()).optional(),
    ReadonlyPaths: z.array(z.string()).optional(),
  }),
);

export type ContainerConfig = z.infer<typeof ContainerConfig>;
export const ContainerConfig = z.object({
  Hostname: z.string().optional(),
  Domainname: z.string().optional(),
  User: z.string().optional(),
  AttachStdin: z.boolean().optional(),
  AttachStdout: z.boolean().optional(),
  AttachStderr: z.boolean().optional(),
  ExposedPorts: z.union([z.unknown(), z.null()]).optional(),
  Tty: z.boolean().optional(),
  OpenStdin: z.boolean().optional(),
  StdinOnce: z.boolean().optional(),
  Env: z.array(z.string()).optional(),
  Cmd: z.array(z.string()).optional(),
  Healthcheck: HealthConfig.optional(),
  ArgsEscaped: z.union([z.boolean(), z.null()]).optional(),
  Image: z.string().optional(),
  Volumes: z.unknown().optional(),
  WorkingDir: z.string().optional(),
  Entrypoint: z.array(z.string()).optional(),
  NetworkDisabled: z.union([z.boolean(), z.null()]).optional(),
  MacAddress: z.union([z.string(), z.null()]).optional(),
  OnBuild: z.union([z.array(z.string()), z.null()]).optional(),
  Labels: z.unknown().optional(),
  StopSignal: z.union([z.string(), z.null()]).optional(),
  StopTimeout: z.union([z.number(), z.null()]).optional(),
  Shell: z.union([z.array(z.string()), z.null()]).optional(),
});

export type EndpointIPAMConfig = z.infer<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = z.union([
  z.object({
    IPv4Address: z.string().optional(),
    IPv6Address: z.string().optional(),
    LinkLocalIPs: z.array(z.string()).optional(),
  }),
  z.null(),
]);

export type EndpointSettings = z.infer<typeof EndpointSettings>;
export const EndpointSettings = z.object({
  IPAMConfig: EndpointIPAMConfig.optional(),
  Links: z.array(z.string()).optional(),
  Aliases: z.array(z.string()).optional(),
  NetworkID: z.string().optional(),
  EndpointID: z.string().optional(),
  Gateway: z.string().optional(),
  IPAddress: z.string().optional(),
  IPPrefixLen: z.number().optional(),
  IPv6Gateway: z.string().optional(),
  GlobalIPv6Address: z.string().optional(),
  GlobalIPv6PrefixLen: z.number().optional(),
  MacAddress: z.string().optional(),
  DriverOpts: z.union([z.unknown(), z.null()]).optional(),
});

export type NetworkingConfig = z.infer<typeof NetworkingConfig>;
export const NetworkingConfig = z.object({
  EndpointsConfig: z.unknown().optional(),
});

export type Address = z.infer<typeof Address>;
export const Address = z.object({
  Addr: z.string().optional(),
  PrefixLen: z.number().optional(),
});

export type NetworkSettings = z.infer<typeof NetworkSettings>;
export const NetworkSettings = z.object({
  Bridge: z.string().optional(),
  SandboxID: z.string().optional(),
  HairpinMode: z.boolean().optional(),
  LinkLocalIPv6Address: z.string().optional(),
  LinkLocalIPv6PrefixLen: z.number().optional(),
  Ports: PortMap.optional(),
  SandboxKey: z.string().optional(),
  SecondaryIPAddresses: z.union([z.array(Address), z.null()]).optional(),
  SecondaryIPv6Addresses: z.union([z.array(Address), z.null()]).optional(),
  EndpointID: z.string().optional(),
  Gateway: z.string().optional(),
  GlobalIPv6Address: z.string().optional(),
  GlobalIPv6PrefixLen: z.number().optional(),
  IPAddress: z.string().optional(),
  IPPrefixLen: z.number().optional(),
  IPv6Gateway: z.string().optional(),
  MacAddress: z.string().optional(),
  Networks: z.unknown().optional(),
});

export type GraphDriverData = z.infer<typeof GraphDriverData>;
export const GraphDriverData = z.object({
  Name: z.string(),
  Data: z.unknown(),
});

export type ChangeType = z.infer<typeof ChangeType>;
export const ChangeType = z.union([z.literal(0), z.literal(1), z.literal(2)]);

export type FilesystemChange = z.infer<typeof FilesystemChange>;
export const FilesystemChange = z.object({
  Path: z.string(),
  Kind: ChangeType,
});

export type ImageInspect = z.infer<typeof ImageInspect>;
export const ImageInspect = z.object({
  Id: z.string().optional(),
  RepoTags: z.array(z.string()).optional(),
  RepoDigests: z.array(z.string()).optional(),
  Parent: z.string().optional(),
  Comment: z.string().optional(),
  Created: z.string().optional(),
  Container: z.string().optional(),
  ContainerConfig: ContainerConfig.optional(),
  DockerVersion: z.string().optional(),
  Author: z.string().optional(),
  Config: ContainerConfig.optional(),
  Architecture: z.string().optional(),
  Variant: z.union([z.string(), z.null()]).optional(),
  Os: z.string().optional(),
  OsVersion: z.union([z.string(), z.null()]).optional(),
  Size: z.number().optional(),
  VirtualSize: z.number().optional(),
  GraphDriver: GraphDriverData.optional(),
  RootFS: z
    .object({
      Type: z.string(),
      Layers: z.union([z.array(z.string()), z.undefined()]).optional(),
    })
    .optional(),
  Metadata: z
    .object({
      LastTagTime: z.union([z.string(), z.null()]).optional(),
    })
    .optional(),
});

export type ImageSummary = z.infer<typeof ImageSummary>;
export const ImageSummary = z.object({
  Id: z.string(),
  ParentId: z.string(),
  RepoTags: z.array(z.string()),
  RepoDigests: z.array(z.string()),
  Created: z.number(),
  Size: z.number(),
  SharedSize: z.number(),
  VirtualSize: z.union([z.number(), z.undefined()]).optional(),
  Labels: z.unknown(),
  Containers: z.number(),
});

export type AuthConfig = z.infer<typeof AuthConfig>;
export const AuthConfig = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
  email: z.string().optional(),
  serveraddress: z.string().optional(),
});

export type ProcessConfig = z.infer<typeof ProcessConfig>;
export const ProcessConfig = z.object({
  privileged: z.boolean().optional(),
  user: z.string().optional(),
  tty: z.boolean().optional(),
  entrypoint: z.string().optional(),
  arguments: z.array(z.string()).optional(),
});

export type ObjectVersion = z.infer<typeof ObjectVersion>;
export const ObjectVersion = z.object({
  Index: z.number().optional(),
});

export type Topology = z.infer<typeof Topology>;
export const Topology = z.unknown();

export type ClusterVolumeSpec = z.infer<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = z.object({
  Group: z.string().optional(),
  AccessMode: z
    .object({
      Scope: z.union([z.literal("single"), z.literal("multi")]).optional(),
      Sharing: z.union([z.literal("none"), z.literal("readonly"), z.literal("onewriter"), z.literal("all")]).optional(),
      MountVolume: z.object({}).optional(),
      Secrets: z
        .array(
          z.object({
            Key: z.string().optional(),
            Secret: z.string().optional(),
          }),
        )
        .optional(),
      AccessibilityRequirements: z
        .object({
          Requisite: z.array(Topology).optional(),
          Preferred: z.array(Topology).optional(),
        })
        .optional(),
      CapacityRange: z
        .object({
          RequiredBytes: z.number().optional(),
          LimitBytes: z.number().optional(),
        })
        .optional(),
      Availability: z.union([z.literal("active"), z.literal("pause"), z.literal("drain")]).optional(),
    })
    .optional(),
});

export type ClusterVolume = z.infer<typeof ClusterVolume>;
export const ClusterVolume = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Spec: ClusterVolumeSpec.optional(),
  Info: z
    .object({
      CapacityBytes: z.number().optional(),
      VolumeContext: z.unknown().optional(),
      VolumeID: z.string().optional(),
      AccessibleTopology: z.array(Topology).optional(),
    })
    .optional(),
  PublishStatus: z
    .array(
      z.object({
        NodeID: z.string().optional(),
        State: z
          .union([
            z.literal("pending-publish"),
            z.literal("published"),
            z.literal("pending-node-unpublish"),
            z.literal("pending-controller-unpublish"),
          ])
          .optional(),
        PublishContext: z.unknown().optional(),
      }),
    )
    .optional(),
});

export type Volume = z.infer<typeof Volume>;
export const Volume = z.object({
  Name: z.string(),
  Driver: z.string(),
  Mountpoint: z.string(),
  CreatedAt: z.union([z.string(), z.undefined()]).optional(),
  Status: z.union([z.unknown(), z.undefined()]).optional(),
  Labels: z.unknown(),
  Scope: z.union([z.literal("local"), z.literal("global")]),
  ClusterVolume: z.union([ClusterVolume, z.undefined()]).optional(),
  Options: z.unknown(),
  UsageData: z
    .union([
      z.object({
        Size: z.number(),
        RefCount: z.number(),
      }),
      z.null(),
      z.undefined(),
    ])
    .optional(),
});

export type VolumeCreateOptions = z.infer<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = z.object({
  Name: z.string().optional(),
  Driver: z.string().optional(),
  DriverOpts: z.unknown().optional(),
  Labels: z.unknown().optional(),
  ClusterVolumeSpec: ClusterVolumeSpec.optional(),
});

export type VolumeListResponse = z.infer<typeof VolumeListResponse>;
export const VolumeListResponse = z.object({
  Volumes: z.array(Volume).optional(),
  Warnings: z.array(z.string()).optional(),
});

export type IPAMConfig = z.infer<typeof IPAMConfig>;
export const IPAMConfig = z.object({
  Subnet: z.string().optional(),
  IPRange: z.string().optional(),
  Gateway: z.string().optional(),
  AuxiliaryAddresses: z.unknown().optional(),
});

export type IPAM = z.infer<typeof IPAM>;
export const IPAM = z.object({
  Driver: z.string().optional(),
  Config: z.array(IPAMConfig).optional(),
  Options: z.unknown().optional(),
});

export type NetworkContainer = z.infer<typeof NetworkContainer>;
export const NetworkContainer = z.object({
  Name: z.string().optional(),
  EndpointID: z.string().optional(),
  MacAddress: z.string().optional(),
  IPv4Address: z.string().optional(),
  IPv6Address: z.string().optional(),
});

export type Network = z.infer<typeof Network>;
export const Network = z.object({
  Name: z.string().optional(),
  Id: z.string().optional(),
  Created: z.string().optional(),
  Scope: z.string().optional(),
  Driver: z.string().optional(),
  EnableIPv6: z.boolean().optional(),
  IPAM: IPAM.optional(),
  Internal: z.boolean().optional(),
  Attachable: z.boolean().optional(),
  Ingress: z.boolean().optional(),
  Containers: z.unknown().optional(),
  Options: z.unknown().optional(),
  Labels: z.unknown().optional(),
});

export type ErrorDetail = z.infer<typeof ErrorDetail>;
export const ErrorDetail = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
});

export type ProgressDetail = z.infer<typeof ProgressDetail>;
export const ProgressDetail = z.object({
  current: z.number().optional(),
  total: z.number().optional(),
});

export type ImageID = z.infer<typeof ImageID>;
export const ImageID = z.object({
  ID: z.string().optional(),
});

export type BuildInfo = z.infer<typeof BuildInfo>;
export const BuildInfo = z.object({
  id: z.string().optional(),
  stream: z.string().optional(),
  error: z.string().optional(),
  errorDetail: ErrorDetail.optional(),
  status: z.string().optional(),
  progress: z.string().optional(),
  progressDetail: ProgressDetail.optional(),
  aux: ImageID.optional(),
});

export type BuildCache = z.infer<typeof BuildCache>;
export const BuildCache = z.object({
  ID: z.string().optional(),
  Parent: z.union([z.string(), z.null()]).optional(),
  Parents: z.union([z.array(z.string()), z.null()]).optional(),
  Type: z
    .union([
      z.literal("internal"),
      z.literal("frontend"),
      z.literal("source.local"),
      z.literal("source.git.checkout"),
      z.literal("exec.cachemount"),
      z.literal("regular"),
    ])
    .optional(),
  Description: z.string().optional(),
  InUse: z.boolean().optional(),
  Shared: z.boolean().optional(),
  Size: z.number().optional(),
  CreatedAt: z.string().optional(),
  LastUsedAt: z.union([z.string(), z.null()]).optional(),
  UsageCount: z.number().optional(),
});

export type CreateImageInfo = z.infer<typeof CreateImageInfo>;
export const CreateImageInfo = z.object({
  id: z.string().optional(),
  error: z.string().optional(),
  errorDetail: ErrorDetail.optional(),
  status: z.string().optional(),
  progress: z.string().optional(),
  progressDetail: ProgressDetail.optional(),
});

export type PushImageInfo = z.infer<typeof PushImageInfo>;
export const PushImageInfo = z.object({
  error: z.string().optional(),
  status: z.string().optional(),
  progress: z.string().optional(),
  progressDetail: ProgressDetail.optional(),
});

export type ErrorResponse = z.infer<typeof ErrorResponse>;
export const ErrorResponse = z.object({
  message: z.string(),
});

export type IdResponse = z.infer<typeof IdResponse>;
export const IdResponse = z.object({
  Id: z.string(),
});

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
export const PluginInterfaceType = z.object({
  Prefix: z.string(),
  Capability: z.string(),
  Version: z.string(),
});

export type PluginPrivilege = z.infer<typeof PluginPrivilege>;
export const PluginPrivilege = z.object({
  Name: z.string().optional(),
  Description: z.string().optional(),
  Value: z.array(z.string()).optional(),
});

export type Plugin = z.infer<typeof Plugin>;
export const Plugin = z.object({
  Id: z.union([z.string(), z.undefined()]).optional(),
  Name: z.string(),
  Enabled: z.boolean(),
  Settings: z.object({
    Mounts: z.array(PluginMount),
    Env: z.array(z.string()),
    Args: z.array(z.string()),
    Devices: z.array(PluginDevice),
  }),
  PluginReference: z.union([z.string(), z.undefined()]).optional(),
  Config: z.object({
    DockerVersion: z.union([z.string(), z.undefined()]).optional(),
    Description: z.string(),
    Documentation: z.string(),
    Interface: z.object({
      Types: z.array(PluginInterfaceType),
      Socket: z.string(),
      ProtocolScheme: z.union([z.literal(""), z.literal("moby.plugins.http/v1"), z.undefined()]).optional(),
    }),
    Entrypoint: z.array(z.string()),
    WorkDir: z.string(),
    User: z
      .union([
        z.object({
          UID: z.number().optional(),
          GID: z.number().optional(),
        }),
        z.undefined(),
      ])
      .optional(),
    Network: z.object({
      Type: z.string(),
    }),
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
      .union([
        z.object({
          type: z.string().optional(),
          diff_ids: z.array(z.string()).optional(),
        }),
        z.undefined(),
      ])
      .optional(),
  }),
});

export type NodeSpec = z.infer<typeof NodeSpec>;
export const NodeSpec = z.object({
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  Role: z.union([z.literal("worker"), z.literal("manager")]).optional(),
  Availability: z.union([z.literal("active"), z.literal("pause"), z.literal("drain")]).optional(),
});

export type Platform = z.infer<typeof Platform>;
export const Platform = z.object({
  Architecture: z.string().optional(),
  OS: z.string().optional(),
});

export type EngineDescription = z.infer<typeof EngineDescription>;
export const EngineDescription = z.object({
  EngineVersion: z.string().optional(),
  Labels: z.unknown().optional(),
  Plugins: z
    .array(
      z.object({
        Type: z.string().optional(),
        Name: z.string().optional(),
      }),
    )
    .optional(),
});

export type TLSInfo = z.infer<typeof TLSInfo>;
export const TLSInfo = z.object({
  TrustRoot: z.string().optional(),
  CertIssuerSubject: z.string().optional(),
  CertIssuerPublicKey: z.string().optional(),
});

export type NodeDescription = z.infer<typeof NodeDescription>;
export const NodeDescription = z.object({
  Hostname: z.string().optional(),
  Platform: Platform.optional(),
  Resources: ResourceObject.optional(),
  Engine: EngineDescription.optional(),
  TLSInfo: TLSInfo.optional(),
});

export type NodeState = z.infer<typeof NodeState>;
export const NodeState = z.union([
  z.literal("unknown"),
  z.literal("down"),
  z.literal("ready"),
  z.literal("disconnected"),
]);

export type NodeStatus = z.infer<typeof NodeStatus>;
export const NodeStatus = z.object({
  State: NodeState.optional(),
  Message: z.string().optional(),
  Addr: z.string().optional(),
});

export type Reachability = z.infer<typeof Reachability>;
export const Reachability = z.union([z.literal("unknown"), z.literal("unreachable"), z.literal("reachable")]);

export type ManagerStatus = z.infer<typeof ManagerStatus>;
export const ManagerStatus = z.union([
  z.object({
    Leader: z.boolean().optional(),
    Reachability: Reachability.optional(),
    Addr: z.string().optional(),
  }),
  z.null(),
]);

export type Node = z.infer<typeof Node>;
export const Node = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Spec: NodeSpec.optional(),
  Description: NodeDescription.optional(),
  Status: NodeStatus.optional(),
  ManagerStatus: ManagerStatus.optional(),
});

export type SwarmSpec = z.infer<typeof SwarmSpec>;
export const SwarmSpec = z.object({
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  Orchestration: z
    .union([
      z.object({
        TaskHistoryRetentionLimit: z.number().optional(),
      }),
      z.null(),
    ])
    .optional(),
  Raft: z
    .object({
      SnapshotInterval: z.number().optional(),
      KeepOldSnapshots: z.number().optional(),
      LogEntriesForSlowFollowers: z.number().optional(),
      ElectionTick: z.number().optional(),
      HeartbeatTick: z.number().optional(),
    })
    .optional(),
  Dispatcher: z
    .union([
      z.object({
        HeartbeatPeriod: z.number().optional(),
      }),
      z.null(),
    ])
    .optional(),
  CAConfig: z
    .union([
      z.object({
        NodeCertExpiry: z.number().optional(),
        ExternalCAs: z
          .array(
            z.object({
              Protocol: z.literal("cfssl").optional(),
              URL: z.string().optional(),
              Options: z.unknown().optional(),
              CACert: z.string().optional(),
            }),
          )
          .optional(),
        SigningCACert: z.string().optional(),
        SigningCAKey: z.string().optional(),
        ForceRotate: z.number().optional(),
      }),
      z.null(),
    ])
    .optional(),
  EncryptionConfig: z
    .object({
      AutoLockManagers: z.boolean().optional(),
    })
    .optional(),
  TaskDefaults: z
    .object({
      LogDriver: z
        .object({
          Name: z.string().optional(),
          Options: z.unknown().optional(),
        })
        .optional(),
    })
    .optional(),
});

export type ClusterInfo = z.infer<typeof ClusterInfo>;
export const ClusterInfo = z.union([
  z.object({
    ID: z.string().optional(),
    Version: ObjectVersion.optional(),
    CreatedAt: z.string().optional(),
    UpdatedAt: z.string().optional(),
    Spec: SwarmSpec.optional(),
    TLSInfo: TLSInfo.optional(),
    RootRotationInProgress: z.boolean().optional(),
    DataPathPort: z.number().optional(),
    DefaultAddrPool: z.array(z.string()).optional(),
    SubnetSize: z.number().optional(),
  }),
  z.null(),
]);

export type JoinTokens = z.infer<typeof JoinTokens>;
export const JoinTokens = z.object({
  Worker: z.string().optional(),
  Manager: z.string().optional(),
});

export type Swarm = z.infer<typeof Swarm>;
export const Swarm = z.intersection(
  ClusterInfo,
  z.object({
    JoinTokens: JoinTokens.optional(),
  }),
);

export type NetworkAttachmentConfig = z.infer<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = z.object({
  Target: z.string().optional(),
  Aliases: z.array(z.string()).optional(),
  DriverOpts: z.unknown().optional(),
});

export type TaskSpec = z.infer<typeof TaskSpec>;
export const TaskSpec = z.object({
  PluginSpec: z
    .object({
      Name: z.string().optional(),
      Remote: z.string().optional(),
      Disabled: z.boolean().optional(),
      PluginPrivilege: z.array(PluginPrivilege).optional(),
    })
    .optional(),
  ContainerSpec: z
    .object({
      Image: z.string().optional(),
      Labels: z.unknown().optional(),
      Command: z.array(z.string()).optional(),
      Args: z.array(z.string()).optional(),
      Hostname: z.string().optional(),
      Env: z.array(z.string()).optional(),
      Dir: z.string().optional(),
      User: z.string().optional(),
      Groups: z.array(z.string()).optional(),
      Privileges: z
        .object({
          CredentialSpec: z
            .object({
              Config: z.string().optional(),
              File: z.string().optional(),
              Registry: z.string().optional(),
            })
            .optional(),
          SELinuxContext: z
            .object({
              Disable: z.boolean().optional(),
              User: z.string().optional(),
              Role: z.string().optional(),
              Type: z.string().optional(),
              Level: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
      TTY: z.boolean().optional(),
      OpenStdin: z.boolean().optional(),
      ReadOnly: z.boolean().optional(),
      Mounts: z.array(Mount).optional(),
      StopSignal: z.string().optional(),
      StopGracePeriod: z.number().optional(),
      HealthCheck: HealthConfig.optional(),
      Hosts: z.array(z.string()).optional(),
      DNSConfig: z
        .object({
          Nameservers: z.array(z.string()).optional(),
          Search: z.array(z.string()).optional(),
          Options: z.array(z.string()).optional(),
        })
        .optional(),
      Secrets: z
        .array(
          z.object({
            File: z
              .object({
                Name: z.string().optional(),
                UID: z.string().optional(),
                GID: z.string().optional(),
                Mode: z.number().optional(),
              })
              .optional(),
            SecretID: z.string().optional(),
            SecretName: z.string().optional(),
          }),
        )
        .optional(),
      Configs: z
        .array(
          z.object({
            File: z
              .object({
                Name: z.string().optional(),
                UID: z.string().optional(),
                GID: z.string().optional(),
                Mode: z.number().optional(),
              })
              .optional(),
            Runtime: z.object({}).optional(),
            ConfigID: z.string().optional(),
            ConfigName: z.string().optional(),
          }),
        )
        .optional(),
      Isolation: z.union([z.literal("default"), z.literal("process"), z.literal("hyperv")]).optional(),
      Init: z.union([z.boolean(), z.null()]).optional(),
      Sysctls: z.unknown().optional(),
      CapabilityAdd: z.array(z.string()).optional(),
      CapabilityDrop: z.array(z.string()).optional(),
      Ulimits: z
        .array(
          z.object({
            Name: z.string().optional(),
            Soft: z.number().optional(),
            Hard: z.number().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  NetworkAttachmentSpec: z
    .object({
      ContainerID: z.string().optional(),
    })
    .optional(),
  Resources: z
    .object({
      Limits: Limit.optional(),
      Reservations: ResourceObject.optional(),
    })
    .optional(),
  RestartPolicy: z
    .object({
      Condition: z.union([z.literal("none"), z.literal("on-failure"), z.literal("any")]).optional(),
      Delay: z.number().optional(),
      MaxAttempts: z.number().optional(),
      Window: z.number().optional(),
    })
    .optional(),
  Placement: z
    .object({
      Constraints: z.array(z.string()).optional(),
      Preferences: z
        .array(
          z.object({
            Spread: z
              .object({
                SpreadDescriptor: z.string().optional(),
              })
              .optional(),
          }),
        )
        .optional(),
      MaxReplicas: z.number().optional(),
      Platforms: z.array(Platform).optional(),
    })
    .optional(),
  ForceUpdate: z.number().optional(),
  Runtime: z.string().optional(),
  Networks: z.array(NetworkAttachmentConfig).optional(),
  LogDriver: z
    .object({
      Name: z.string().optional(),
      Options: z.unknown().optional(),
    })
    .optional(),
});

export type TaskState = z.infer<typeof TaskState>;
export const TaskState = z.union([
  z.literal("new"),
  z.literal("allocated"),
  z.literal("pending"),
  z.literal("assigned"),
  z.literal("accepted"),
  z.literal("preparing"),
  z.literal("ready"),
  z.literal("starting"),
  z.literal("running"),
  z.literal("complete"),
  z.literal("shutdown"),
  z.literal("failed"),
  z.literal("rejected"),
  z.literal("remove"),
  z.literal("orphaned"),
]);

export type Task = z.infer<typeof Task>;
export const Task = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  Spec: TaskSpec.optional(),
  ServiceID: z.string().optional(),
  Slot: z.number().optional(),
  NodeID: z.string().optional(),
  AssignedGenericResources: GenericResources.optional(),
  Status: z
    .object({
      Timestamp: z.string().optional(),
      State: TaskState.optional(),
      Message: z.string().optional(),
      Err: z.string().optional(),
      ContainerStatus: z
        .object({
          ContainerID: z.string().optional(),
          PID: z.number().optional(),
          ExitCode: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
  DesiredState: TaskState.optional(),
  JobIteration: ObjectVersion.optional(),
});

export type EndpointPortConfig = z.infer<typeof EndpointPortConfig>;
export const EndpointPortConfig = z.object({
  Name: z.string().optional(),
  Protocol: z.union([z.literal("tcp"), z.literal("udp"), z.literal("sctp")]).optional(),
  TargetPort: z.number().optional(),
  PublishedPort: z.number().optional(),
  PublishMode: z.union([z.literal("ingress"), z.literal("host")]).optional(),
});

export type EndpointSpec = z.infer<typeof EndpointSpec>;
export const EndpointSpec = z.object({
  Mode: z.union([z.literal("vip"), z.literal("dnsrr")]).optional(),
  Ports: z.array(EndpointPortConfig).optional(),
});

export type ServiceSpec = z.infer<typeof ServiceSpec>;
export const ServiceSpec = z.object({
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  TaskTemplate: TaskSpec.optional(),
  Mode: z
    .object({
      Replicated: z
        .object({
          Replicas: z.number().optional(),
        })
        .optional(),
      Global: z.object({}).optional(),
      ReplicatedJob: z
        .object({
          MaxConcurrent: z.number().optional(),
          TotalCompletions: z.number().optional(),
        })
        .optional(),
      GlobalJob: z.object({}).optional(),
    })
    .optional(),
  UpdateConfig: z
    .object({
      Parallelism: z.number().optional(),
      Delay: z.number().optional(),
      FailureAction: z.union([z.literal("continue"), z.literal("pause"), z.literal("rollback")]).optional(),
      Monitor: z.number().optional(),
      MaxFailureRatio: z.number().optional(),
      Order: z.union([z.literal("stop-first"), z.literal("start-first")]).optional(),
    })
    .optional(),
  RollbackConfig: z
    .object({
      Parallelism: z.number().optional(),
      Delay: z.number().optional(),
      FailureAction: z.union([z.literal("continue"), z.literal("pause")]).optional(),
      Monitor: z.number().optional(),
      MaxFailureRatio: z.number().optional(),
      Order: z.union([z.literal("stop-first"), z.literal("start-first")]).optional(),
    })
    .optional(),
  Networks: z.array(NetworkAttachmentConfig).optional(),
  EndpointSpec: EndpointSpec.optional(),
});

export type Service = z.infer<typeof Service>;
export const Service = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Spec: ServiceSpec.optional(),
  Endpoint: z
    .object({
      Spec: EndpointSpec.optional(),
      Ports: z.array(EndpointPortConfig).optional(),
      VirtualIPs: z
        .array(
          z.object({
            NetworkID: z.string().optional(),
            Addr: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  UpdateStatus: z
    .object({
      State: z.union([z.literal("updating"), z.literal("paused"), z.literal("completed")]).optional(),
      StartedAt: z.string().optional(),
      CompletedAt: z.string().optional(),
      Message: z.string().optional(),
    })
    .optional(),
  ServiceStatus: z
    .object({
      RunningTasks: z.number().optional(),
      DesiredTasks: z.number().optional(),
      CompletedTasks: z.number().optional(),
    })
    .optional(),
  JobStatus: z
    .object({
      JobIteration: ObjectVersion.optional(),
      LastExecution: z.string().optional(),
    })
    .optional(),
});

export type ImageDeleteResponseItem = z.infer<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = z.object({
  Untagged: z.string().optional(),
  Deleted: z.string().optional(),
});

export type ServiceUpdateResponse = z.infer<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = z.object({
  Warnings: z.array(z.string()).optional(),
});

export type ContainerSummary = z.infer<typeof ContainerSummary>;
export const ContainerSummary = z.object({
  Id: z.string().optional(),
  Names: z.array(z.string()).optional(),
  Image: z.string().optional(),
  ImageID: z.string().optional(),
  Command: z.string().optional(),
  Created: z.number().optional(),
  Ports: z.array(Port).optional(),
  SizeRw: z.number().optional(),
  SizeRootFs: z.number().optional(),
  Labels: z.unknown().optional(),
  State: z.string().optional(),
  Status: z.string().optional(),
  HostConfig: z
    .object({
      NetworkMode: z.string().optional(),
    })
    .optional(),
  NetworkSettings: z
    .object({
      Networks: z.unknown().optional(),
    })
    .optional(),
  Mounts: z.array(MountPoint).optional(),
});

export type Driver = z.infer<typeof Driver>;
export const Driver = z.object({
  Name: z.string(),
  Options: z.union([z.unknown(), z.undefined()]).optional(),
});

export type SecretSpec = z.infer<typeof SecretSpec>;
export const SecretSpec = z.object({
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  Data: z.string().optional(),
  Driver: Driver.optional(),
  Templating: Driver.optional(),
});

export type Secret = z.infer<typeof Secret>;
export const Secret = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Spec: SecretSpec.optional(),
});

export type ConfigSpec = z.infer<typeof ConfigSpec>;
export const ConfigSpec = z.object({
  Name: z.string().optional(),
  Labels: z.unknown().optional(),
  Data: z.string().optional(),
  Templating: Driver.optional(),
});

export type Config = z.infer<typeof Config>;
export const Config = z.object({
  ID: z.string().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: z.string().optional(),
  UpdatedAt: z.string().optional(),
  Spec: ConfigSpec.optional(),
});

export type ContainerState = z.infer<typeof ContainerState>;
export const ContainerState = z.union([
  z.object({
    Status: z
      .union([
        z.literal("created"),
        z.literal("running"),
        z.literal("paused"),
        z.literal("restarting"),
        z.literal("removing"),
        z.literal("exited"),
        z.literal("dead"),
      ])
      .optional(),
    Running: z.boolean().optional(),
    Paused: z.boolean().optional(),
    Restarting: z.boolean().optional(),
    OOMKilled: z.boolean().optional(),
    Dead: z.boolean().optional(),
    Pid: z.number().optional(),
    ExitCode: z.number().optional(),
    Error: z.string().optional(),
    StartedAt: z.string().optional(),
    FinishedAt: z.string().optional(),
    Health: Health.optional(),
  }),
  z.null(),
]);

export type ContainerCreateResponse = z.infer<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = z.object({
  Id: z.string(),
  Warnings: z.array(z.string()),
});

export type ContainerWaitExitError = z.infer<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = z.object({
  Message: z.string().optional(),
});

export type ContainerWaitResponse = z.infer<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = z.object({
  StatusCode: z.number(),
  Error: z.union([ContainerWaitExitError, z.undefined()]).optional(),
});

export type SystemVersion = z.infer<typeof SystemVersion>;
export const SystemVersion = z.object({
  Platform: z
    .object({
      Name: z.string(),
    })
    .optional(),
  Components: z
    .array(
      z.object({
        Name: z.string(),
        Version: z.string(),
        Details: z.union([z.object({}), z.null(), z.undefined()]).optional(),
      }),
    )
    .optional(),
  Version: z.string().optional(),
  ApiVersion: z.string().optional(),
  MinAPIVersion: z.string().optional(),
  GitCommit: z.string().optional(),
  GoVersion: z.string().optional(),
  Os: z.string().optional(),
  Arch: z.string().optional(),
  KernelVersion: z.string().optional(),
  Experimental: z.boolean().optional(),
  BuildTime: z.string().optional(),
});

export type PluginsInfo = z.infer<typeof PluginsInfo>;
export const PluginsInfo = z.object({
  Volume: z.array(z.string()).optional(),
  Network: z.array(z.string()).optional(),
  Authorization: z.array(z.string()).optional(),
  Log: z.array(z.string()).optional(),
});

export type IndexInfo = z.infer<typeof IndexInfo>;
export const IndexInfo = z.union([
  z.object({
    Name: z.string().optional(),
    Mirrors: z.array(z.string()).optional(),
    Secure: z.boolean().optional(),
    Official: z.boolean().optional(),
  }),
  z.null(),
]);

export type RegistryServiceConfig = z.infer<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = z.union([
  z.object({
    AllowNondistributableArtifactsCIDRs: z.array(z.string()).optional(),
    AllowNondistributableArtifactsHostnames: z.array(z.string()).optional(),
    InsecureRegistryCIDRs: z.array(z.string()).optional(),
    IndexConfigs: z.unknown().optional(),
    Mirrors: z.array(z.string()).optional(),
  }),
  z.null(),
]);

export type Runtime = z.infer<typeof Runtime>;
export const Runtime = z.object({
  path: z.string().optional(),
  runtimeArgs: z.union([z.array(z.string()), z.null()]).optional(),
});

export type LocalNodeState = z.infer<typeof LocalNodeState>;
export const LocalNodeState = z.union([
  z.literal(""),
  z.literal("inactive"),
  z.literal("pending"),
  z.literal("active"),
  z.literal("error"),
  z.literal("locked"),
]);

export type PeerNode = z.infer<typeof PeerNode>;
export const PeerNode = z.object({
  NodeID: z.string().optional(),
  Addr: z.string().optional(),
});

export type SwarmInfo = z.infer<typeof SwarmInfo>;
export const SwarmInfo = z.object({
  NodeID: z.string().optional(),
  NodeAddr: z.string().optional(),
  LocalNodeState: LocalNodeState.optional(),
  ControlAvailable: z.boolean().optional(),
  Error: z.string().optional(),
  RemoteManagers: z.union([z.array(PeerNode), z.null()]).optional(),
  Nodes: z.union([z.number(), z.null()]).optional(),
  Managers: z.union([z.number(), z.null()]).optional(),
  Cluster: ClusterInfo.optional(),
});

export type Commit = z.infer<typeof Commit>;
export const Commit = z.object({
  ID: z.string().optional(),
  Expected: z.string().optional(),
});

export type SystemInfo = z.infer<typeof SystemInfo>;
export const SystemInfo = z.object({
  ID: z.string().optional(),
  Containers: z.number().optional(),
  ContainersRunning: z.number().optional(),
  ContainersPaused: z.number().optional(),
  ContainersStopped: z.number().optional(),
  Images: z.number().optional(),
  Driver: z.string().optional(),
  DriverStatus: z.array(z.array(z.string())).optional(),
  DockerRootDir: z.string().optional(),
  Plugins: PluginsInfo.optional(),
  MemoryLimit: z.boolean().optional(),
  SwapLimit: z.boolean().optional(),
  KernelMemoryTCP: z.boolean().optional(),
  CpuCfsPeriod: z.boolean().optional(),
  CpuCfsQuota: z.boolean().optional(),
  CPUShares: z.boolean().optional(),
  CPUSet: z.boolean().optional(),
  PidsLimit: z.boolean().optional(),
  OomKillDisable: z.boolean().optional(),
  IPv4Forwarding: z.boolean().optional(),
  BridgeNfIptables: z.boolean().optional(),
  BridgeNfIp6tables: z.boolean().optional(),
  Debug: z.boolean().optional(),
  NFd: z.number().optional(),
  NGoroutines: z.number().optional(),
  SystemTime: z.string().optional(),
  LoggingDriver: z.string().optional(),
  CgroupDriver: z.union([z.literal("cgroupfs"), z.literal("systemd"), z.literal("none")]).optional(),
  CgroupVersion: z.union([z.literal("1"), z.literal("2")]).optional(),
  NEventsListener: z.number().optional(),
  KernelVersion: z.string().optional(),
  OperatingSystem: z.string().optional(),
  OSVersion: z.string().optional(),
  OSType: z.string().optional(),
  Architecture: z.string().optional(),
  NCPU: z.number().optional(),
  MemTotal: z.number().optional(),
  IndexServerAddress: z.string().optional(),
  RegistryConfig: RegistryServiceConfig.optional(),
  GenericResources: GenericResources.optional(),
  HttpProxy: z.string().optional(),
  HttpsProxy: z.string().optional(),
  NoProxy: z.string().optional(),
  Name: z.string().optional(),
  Labels: z.array(z.string()).optional(),
  ExperimentalBuild: z.boolean().optional(),
  ServerVersion: z.string().optional(),
  Runtimes: z.unknown().optional(),
  DefaultRuntime: z.string().optional(),
  Swarm: SwarmInfo.optional(),
  LiveRestoreEnabled: z.boolean().optional(),
  Isolation: z.union([z.literal("default"), z.literal("hyperv"), z.literal("process")]).optional(),
  InitBinary: z.string().optional(),
  ContainerdCommit: Commit.optional(),
  RuncCommit: Commit.optional(),
  InitCommit: Commit.optional(),
  SecurityOptions: z.array(z.string()).optional(),
  ProductLicense: z.string().optional(),
  DefaultAddressPools: z
    .array(
      z.object({
        Base: z.string().optional(),
        Size: z.number().optional(),
      }),
    )
    .optional(),
  Warnings: z.array(z.string()).optional(),
});

export type EventActor = z.infer<typeof EventActor>;
export const EventActor = z.object({
  ID: z.string().optional(),
  Attributes: z.unknown().optional(),
});

export type EventMessage = z.infer<typeof EventMessage>;
export const EventMessage = z.object({
  Type: z
    .union([
      z.literal("builder"),
      z.literal("config"),
      z.literal("container"),
      z.literal("daemon"),
      z.literal("image"),
      z.literal("network"),
      z.literal("node"),
      z.literal("plugin"),
      z.literal("secret"),
      z.literal("service"),
      z.literal("volume"),
    ])
    .optional(),
  Action: z.string().optional(),
  Actor: EventActor.optional(),
  scope: z.union([z.literal("local"), z.literal("swarm")]).optional(),
  time: z.number().optional(),
  timeNano: z.number().optional(),
});

export type OCIDescriptor = z.infer<typeof OCIDescriptor>;
export const OCIDescriptor = z.object({
  mediaType: z.string().optional(),
  digest: z.string().optional(),
  size: z.number().optional(),
});

export type OCIPlatform = z.infer<typeof OCIPlatform>;
export const OCIPlatform = z.object({
  architecture: z.string().optional(),
  os: z.string().optional(),
  "os.version": z.string().optional(),
  "os.features": z.array(z.string()).optional(),
  variant: z.string().optional(),
});

export type DistributionInspect = z.infer<typeof DistributionInspect>;
export const DistributionInspect = z.object({
  Descriptor: OCIDescriptor,
  Platforms: z.array(OCIPlatform),
});

export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: z.literal("GET"),
  path: z.literal("/containers/json"),
  parameters: z.object({
    query: z.object({
      all: z.boolean().optional(),
      limit: z.number().optional(),
      size: z.boolean().optional(),
      filters: z.string().optional(),
    }),
  }),
  response: z.array(ContainerSummary),
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: z.literal("POST"),
  path: z.literal("/containers/create"),
  parameters: z.object({
    query: z.object({
      name: z.string().optional(),
      platform: z.string().optional(),
    }),
    body: z.intersection(
      ContainerConfig,
      z.object({
        HostConfig: HostConfig.optional(),
        NetworkingConfig: NetworkingConfig.optional(),
      }),
    ),
  }),
  response: ContainerCreateResponse,
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/json"),
  parameters: z.object({
    query: z.object({
      size: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.object({
    Id: z.string().optional(),
    Created: z.string().optional(),
    Path: z.string().optional(),
    Args: z.array(z.string()).optional(),
    State: ContainerState.optional(),
    Image: z.string().optional(),
    ResolvConfPath: z.string().optional(),
    HostnamePath: z.string().optional(),
    HostsPath: z.string().optional(),
    LogPath: z.string().optional(),
    Name: z.string().optional(),
    RestartCount: z.number().optional(),
    Driver: z.string().optional(),
    Platform: z.string().optional(),
    MountLabel: z.string().optional(),
    ProcessLabel: z.string().optional(),
    AppArmorProfile: z.string().optional(),
    ExecIDs: z.union([z.array(z.string()), z.null()]).optional(),
    HostConfig: HostConfig.optional(),
    GraphDriver: GraphDriverData.optional(),
    SizeRw: z.number().optional(),
    SizeRootFs: z.number().optional(),
    Mounts: z.array(MountPoint).optional(),
    Config: ContainerConfig.optional(),
    NetworkSettings: NetworkSettings.optional(),
  }),
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/top"),
  parameters: z.object({
    query: z.object({
      ps_args: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.object({
    Titles: z.array(z.string()).optional(),
    Processes: z.array(z.array(z.string())).optional(),
  }),
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/logs"),
  parameters: z.object({
    query: z.object({
      follow: z.boolean().optional(),
      stdout: z.boolean().optional(),
      stderr: z.boolean().optional(),
      since: z.number().optional(),
      until: z.number().optional(),
      timestamps: z.boolean().optional(),
      tail: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/changes"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.array(FilesystemChange),
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/export"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/stats"),
  parameters: z.object({
    query: z.object({
      stream: z.boolean().optional(),
      "one-shot": z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/resize"),
  parameters: z.object({
    query: z.object({
      h: z.number().optional(),
      w: z.number().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/start"),
  parameters: z.object({
    query: z.object({
      detachKeys: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/stop"),
  parameters: z.object({
    query: z.object({
      signal: z.string().optional(),
      t: z.number().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/restart"),
  parameters: z.object({
    query: z.object({
      signal: z.string().optional(),
      t: z.number().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/kill"),
  parameters: z.object({
    query: z.object({
      signal: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/update"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.intersection(
      Resources,
      z.object({
        RestartPolicy: RestartPolicy.optional(),
      }),
    ),
  }),
  response: z.object({
    Warnings: z.array(z.string()).optional(),
  }),
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/rename"),
  parameters: z.object({
    query: z.object({
      name: z.string(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/pause"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/unpause"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/attach"),
  parameters: z.object({
    query: z.object({
      detachKeys: z.string().optional(),
      logs: z.boolean().optional(),
      stream: z.boolean().optional(),
      stdin: z.boolean().optional(),
      stdout: z.boolean().optional(),
      stderr: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/attach/ws"),
  parameters: z.object({
    query: z.object({
      detachKeys: z.string().optional(),
      logs: z.boolean().optional(),
      stream: z.boolean().optional(),
      stdin: z.boolean().optional(),
      stdout: z.boolean().optional(),
      stderr: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/wait"),
  parameters: z.object({
    query: z.object({
      condition: z.union([z.literal("not-running"), z.literal("next-exit"), z.literal("removed")]).optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: ContainerWaitResponse,
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/containers/{id}"),
  parameters: z.object({
    query: z.object({
      v: z.boolean().optional(),
      force: z.boolean().optional(),
      link: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: z.literal("GET"),
  path: z.literal("/containers/{id}/archive"),
  parameters: z.object({
    query: z.object({
      path: z.string(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: z.literal("PUT"),
  path: z.literal("/containers/{id}/archive"),
  parameters: z.object({
    query: z.object({
      path: z.string(),
      noOverwriteDirNonDir: z.string(),
      copyUIDGID: z.string(),
    }),
    path: z.object({
      id: z.string(),
    }),
    body: z.string(),
  }),
  response: z.unknown(),
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: z.literal("HEAD"),
  path: z.literal("/containers/{id}/archive"),
  parameters: z.object({
    query: z.object({
      path: z.string(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: z.literal("POST"),
  path: z.literal("/containers/prune"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.object({
    ContainersDeleted: z.array(z.string()).optional(),
    SpaceReclaimed: z.number().optional(),
  }),
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: z.literal("GET"),
  path: z.literal("/images/json"),
  parameters: z.object({
    query: z.object({
      all: z.boolean().optional(),
      filters: z.string().optional(),
      "shared-size": z.boolean().optional(),
      digests: z.boolean().optional(),
    }),
  }),
  response: z.array(ImageSummary),
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: z.literal("POST"),
  path: z.literal("/build"),
  parameters: z.object({
    query: z.object({
      dockerfile: z.string().optional(),
      t: z.string().optional(),
      extrahosts: z.string().optional(),
      remote: z.string().optional(),
      q: z.boolean().optional(),
      nocache: z.boolean().optional(),
      cachefrom: z.string().optional(),
      pull: z.string().optional(),
      rm: z.boolean().optional(),
      forcerm: z.boolean().optional(),
      memory: z.number().optional(),
      memswap: z.number().optional(),
      cpushares: z.number().optional(),
      cpusetcpus: z.string().optional(),
      cpuperiod: z.number().optional(),
      cpuquota: z.number().optional(),
      buildargs: z.string().optional(),
      shmsize: z.number().optional(),
      squash: z.boolean().optional(),
      labels: z.string().optional(),
      networkmode: z.string().optional(),
      platform: z.string().optional(),
      target: z.string().optional(),
      outputs: z.string().optional(),
    }),
    header: z.object({
      "Content-type": z.literal("application/x-tar").optional(),
      "X-Registry-Config": z.string().optional(),
    }),
    body: z.string(),
  }),
  response: z.unknown(),
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: z.literal("POST"),
  path: z.literal("/build/prune"),
  parameters: z.object({
    query: z.object({
      "keep-storage": z.number().optional(),
      all: z.boolean().optional(),
      filters: z.string().optional(),
    }),
  }),
  response: z.object({
    CachesDeleted: z.array(z.string()).optional(),
    SpaceReclaimed: z.number().optional(),
  }),
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: z.literal("POST"),
  path: z.literal("/images/create"),
  parameters: z.object({
    query: z.object({
      fromImage: z.string().optional(),
      fromSrc: z.string().optional(),
      repo: z.string().optional(),
      tag: z.string().optional(),
      message: z.string().optional(),
      changes: z.array(z.string()).optional(),
      platform: z.string().optional(),
    }),
    header: z.object({
      "X-Registry-Auth": z.string().optional(),
    }),
    body: z.string(),
  }),
  response: z.unknown(),
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/json"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: ImageInspect,
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/history"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.array(
    z.object({
      Id: z.string(),
      Created: z.number(),
      CreatedBy: z.string(),
      Tags: z.array(z.string()),
      Size: z.number(),
      Comment: z.string(),
    }),
  ),
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: z.literal("POST"),
  path: z.literal("/images/{name}/push"),
  parameters: z.object({
    query: z.object({
      tag: z.string().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
    header: z.object({
      "X-Registry-Auth": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: z.literal("POST"),
  path: z.literal("/images/{name}/tag"),
  parameters: z.object({
    query: z.object({
      repo: z.string().optional(),
      tag: z.string().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/images/{name}"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
      noprune: z.boolean().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.array(ImageDeleteResponseItem),
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: z.literal("GET"),
  path: z.literal("/images/search"),
  parameters: z.object({
    query: z.object({
      term: z.string(),
      limit: z.number(),
      filters: z.string(),
    }),
  }),
  response: z.array(
    z.object({
      description: z.string().optional(),
      is_official: z.boolean().optional(),
      is_automated: z.boolean().optional(),
      name: z.string().optional(),
      star_count: z.number().optional(),
    }),
  ),
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: z.literal("POST"),
  path: z.literal("/images/prune"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.object({
    ImagesDeleted: z.array(ImageDeleteResponseItem).optional(),
    SpaceReclaimed: z.number().optional(),
  }),
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: z.literal("POST"),
  path: z.literal("/auth"),
  parameters: z.object({
    body: AuthConfig,
  }),
  response: z.unknown(),
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: z.literal("GET"),
  path: z.literal("/info"),
  parameters: z.never(),
  response: SystemInfo,
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: z.literal("GET"),
  path: z.literal("/version"),
  parameters: z.never(),
  response: SystemVersion,
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: z.literal("GET"),
  path: z.literal("/_ping"),
  parameters: z.never(),
  response: z.unknown(),
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: z.literal("HEAD"),
  path: z.literal("/_ping"),
  parameters: z.never(),
  response: z.unknown(),
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: z.literal("POST"),
  path: z.literal("/commit"),
  parameters: z.object({
    query: z.object({
      container: z.string().optional(),
      repo: z.string().optional(),
      tag: z.string().optional(),
      comment: z.string().optional(),
      author: z.string().optional(),
      pause: z.boolean().optional(),
      changes: z.string().optional(),
    }),
    body: ContainerConfig,
  }),
  response: IdResponse,
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: z.literal("GET"),
  path: z.literal("/events"),
  parameters: z.object({
    query: z.object({
      since: z.string().optional(),
      until: z.string().optional(),
      filters: z.string().optional(),
    }),
  }),
  response: EventMessage,
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: z.literal("GET"),
  path: z.literal("/system/df"),
  parameters: z.object({
    query: z.object({
      type: z
        .array(z.union([z.literal("container"), z.literal("image"), z.literal("volume"), z.literal("build-cache")]))
        .optional(),
    }),
  }),
  response: z.object({
    LayersSize: z.number().optional(),
    Images: z.array(ImageSummary).optional(),
    Containers: z.array(ContainerSummary).optional(),
    Volumes: z.array(Volume).optional(),
    BuildCache: z.array(BuildCache).optional(),
  }),
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: z.literal("GET"),
  path: z.literal("/images/{name}/get"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: z.literal("GET"),
  path: z.literal("/images/get"),
  parameters: z.object({
    query: z.object({
      names: z.array(z.string()).optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: z.literal("POST"),
  path: z.literal("/images/load"),
  parameters: z.object({
    query: z.object({
      quiet: z.boolean().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: z.literal("POST"),
  path: z.literal("/containers/{id}/exec"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.object({
      AttachStdin: z.boolean().optional(),
      AttachStdout: z.boolean().optional(),
      AttachStderr: z.boolean().optional(),
      ConsoleSize: z.union([z.array(z.number()), z.null()]).optional(),
      DetachKeys: z.string().optional(),
      Tty: z.boolean().optional(),
      Env: z.array(z.string()).optional(),
      Cmd: z.array(z.string()).optional(),
      Privileged: z.boolean().optional(),
      User: z.string().optional(),
      WorkingDir: z.string().optional(),
    }),
  }),
  response: IdResponse,
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: z.literal("POST"),
  path: z.literal("/exec/{id}/start"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.object({
      Detach: z.boolean().optional(),
      Tty: z.boolean().optional(),
      ConsoleSize: z.union([z.array(z.number()), z.null()]).optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: z.literal("POST"),
  path: z.literal("/exec/{id}/resize"),
  parameters: z.object({
    query: z.object({
      h: z.number().optional(),
      w: z.number().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: z.literal("GET"),
  path: z.literal("/exec/{id}/json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.object({
    CanRemove: z.boolean().optional(),
    DetachKeys: z.string().optional(),
    ID: z.string().optional(),
    Running: z.boolean().optional(),
    ExitCode: z.number().optional(),
    ProcessConfig: ProcessConfig.optional(),
    OpenStdin: z.boolean().optional(),
    OpenStderr: z.boolean().optional(),
    OpenStdout: z.boolean().optional(),
    ContainerID: z.string().optional(),
    Pid: z.number().optional(),
  }),
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: z.literal("GET"),
  path: z.literal("/volumes"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: VolumeListResponse,
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: z.literal("POST"),
  path: z.literal("/volumes/create"),
  parameters: z.object({
    body: VolumeCreateOptions,
  }),
  response: Volume,
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: z.literal("GET"),
  path: z.literal("/volumes/{name}"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: Volume,
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: z.literal("PUT"),
  path: z.literal("/volumes/{name}"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
    }),
    path: z.object({
      name: z.string(),
    }),
    body: z.object({
      Spec: ClusterVolumeSpec.optional(),
    }),
  }),
  response: z.unknown(),
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/volumes/{name}"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: z.literal("POST"),
  path: z.literal("/volumes/prune"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.object({
    VolumesDeleted: z.array(z.string()).optional(),
    SpaceReclaimed: z.number().optional(),
  }),
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: z.literal("GET"),
  path: z.literal("/networks"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Network),
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: z.literal("GET"),
  path: z.literal("/networks/{id}"),
  parameters: z.object({
    query: z.object({
      verbose: z.boolean().optional(),
      scope: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Network,
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/networks/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: z.literal("POST"),
  path: z.literal("/networks/create"),
  parameters: z.object({
    body: z.object({
      Name: z.string(),
      CheckDuplicate: z.union([z.boolean(), z.undefined()]).optional(),
      Driver: z.union([z.string(), z.undefined()]).optional(),
      Internal: z.union([z.boolean(), z.undefined()]).optional(),
      Attachable: z.union([z.boolean(), z.undefined()]).optional(),
      Ingress: z.union([z.boolean(), z.undefined()]).optional(),
      IPAM: z.union([IPAM, z.undefined()]).optional(),
      EnableIPv6: z.union([z.boolean(), z.undefined()]).optional(),
      Options: z.union([z.unknown(), z.undefined()]).optional(),
      Labels: z.union([z.unknown(), z.undefined()]).optional(),
    }),
  }),
  response: z.object({
    Id: z.string().optional(),
    Warning: z.string().optional(),
  }),
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: z.literal("POST"),
  path: z.literal("/networks/{id}/connect"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.object({
      Container: z.string().optional(),
      EndpointConfig: EndpointSettings.optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: z.literal("POST"),
  path: z.literal("/networks/{id}/disconnect"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.object({
      Container: z.string().optional(),
      Force: z.boolean().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: z.literal("POST"),
  path: z.literal("/networks/prune"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.object({
    NetworksDeleted: z.array(z.string()).optional(),
  }),
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: z.literal("GET"),
  path: z.literal("/plugins"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Plugin),
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: z.literal("GET"),
  path: z.literal("/plugins/privileges"),
  parameters: z.object({
    query: z.object({
      remote: z.string(),
    }),
  }),
  response: z.array(PluginPrivilege),
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: z.literal("POST"),
  path: z.literal("/plugins/pull"),
  parameters: z.object({
    query: z.object({
      remote: z.string(),
      name: z.string(),
    }),
    header: z.object({
      "X-Registry-Auth": z.string().optional(),
    }),
    body: z.array(PluginPrivilege),
  }),
  response: z.unknown(),
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: z.literal("GET"),
  path: z.literal("/plugins/{name}/json"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: Plugin,
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/plugins/{name}"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: Plugin,
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/enable"),
  parameters: z.object({
    query: z.object({
      timeout: z.number().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/disable"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
    }),
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/upgrade"),
  parameters: z.object({
    query: z.object({
      remote: z.string(),
    }),
    path: z.object({
      name: z.string(),
    }),
    header: z.object({
      "X-Registry-Auth": z.string().optional(),
    }),
    body: z.array(PluginPrivilege),
  }),
  response: z.unknown(),
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: z.literal("POST"),
  path: z.literal("/plugins/create"),
  parameters: z.object({
    query: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/push"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: z.literal("POST"),
  path: z.literal("/plugins/{name}/set"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
    body: z.array(z.string()),
  }),
  response: z.unknown(),
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: z.literal("GET"),
  path: z.literal("/nodes"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Node),
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: z.literal("GET"),
  path: z.literal("/nodes/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Node,
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/nodes/{id}"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: z.literal("POST"),
  path: z.literal("/nodes/{id}/update"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
    }),
    path: z.object({
      id: z.string(),
    }),
    body: NodeSpec,
  }),
  response: z.unknown(),
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: z.literal("GET"),
  path: z.literal("/swarm"),
  parameters: z.never(),
  response: Swarm,
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: z.literal("POST"),
  path: z.literal("/swarm/init"),
  parameters: z.object({
    body: z.object({
      ListenAddr: z.string().optional(),
      AdvertiseAddr: z.string().optional(),
      DataPathAddr: z.string().optional(),
      DataPathPort: z.number().optional(),
      DefaultAddrPool: z.array(z.string()).optional(),
      ForceNewCluster: z.boolean().optional(),
      SubnetSize: z.number().optional(),
      Spec: SwarmSpec.optional(),
    }),
  }),
  response: z.string(),
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: z.literal("POST"),
  path: z.literal("/swarm/join"),
  parameters: z.object({
    body: z.object({
      ListenAddr: z.string().optional(),
      AdvertiseAddr: z.string().optional(),
      DataPathAddr: z.string().optional(),
      RemoteAddrs: z.array(z.string()).optional(),
      JoinToken: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: z.literal("POST"),
  path: z.literal("/swarm/leave"),
  parameters: z.object({
    query: z.object({
      force: z.boolean().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: z.literal("POST"),
  path: z.literal("/swarm/update"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
      rotateWorkerToken: z.boolean(),
      rotateManagerToken: z.boolean(),
      rotateManagerUnlockKey: z.boolean(),
    }),
    body: SwarmSpec,
  }),
  response: z.unknown(),
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: z.literal("GET"),
  path: z.literal("/swarm/unlockkey"),
  parameters: z.never(),
  response: z.object({
    UnlockKey: z.string().optional(),
  }),
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: z.literal("POST"),
  path: z.literal("/swarm/unlock"),
  parameters: z.object({
    body: z.object({
      UnlockKey: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: z.literal("GET"),
  path: z.literal("/services"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
      status: z.boolean().optional(),
    }),
  }),
  response: z.array(Service),
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: z.literal("POST"),
  path: z.literal("/services/create"),
  parameters: z.object({
    header: z.object({
      "X-Registry-Auth": z.string().optional(),
    }),
    body: z.intersection(ServiceSpec, z.unknown()),
  }),
  response: z.object({
    ID: z.string().optional(),
    Warning: z.string().optional(),
  }),
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: z.literal("GET"),
  path: z.literal("/services/{id}"),
  parameters: z.object({
    query: z.object({
      insertDefaults: z.boolean().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Service,
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/services/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: z.literal("POST"),
  path: z.literal("/services/{id}/update"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
      registryAuthFrom: z.union([z.literal("spec"), z.literal("previous-spec")]),
      rollback: z.string(),
    }),
    path: z.object({
      id: z.string(),
    }),
    header: z.object({
      "X-Registry-Auth": z.string().optional(),
    }),
    body: z.intersection(ServiceSpec, z.unknown()),
  }),
  response: ServiceUpdateResponse,
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: z.literal("GET"),
  path: z.literal("/services/{id}/logs"),
  parameters: z.object({
    query: z.object({
      details: z.boolean().optional(),
      follow: z.boolean().optional(),
      stdout: z.boolean().optional(),
      stderr: z.boolean().optional(),
      since: z.number().optional(),
      timestamps: z.boolean().optional(),
      tail: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: z.literal("GET"),
  path: z.literal("/tasks"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Task),
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: z.literal("GET"),
  path: z.literal("/tasks/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Task,
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: z.literal("GET"),
  path: z.literal("/tasks/{id}/logs"),
  parameters: z.object({
    query: z.object({
      details: z.boolean().optional(),
      follow: z.boolean().optional(),
      stdout: z.boolean().optional(),
      stderr: z.boolean().optional(),
      since: z.number().optional(),
      timestamps: z.boolean().optional(),
      tail: z.string().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: z.literal("GET"),
  path: z.literal("/secrets"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Secret),
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: z.literal("POST"),
  path: z.literal("/secrets/create"),
  parameters: z.object({
    body: z.intersection(SecretSpec, z.unknown()),
  }),
  response: IdResponse,
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: z.literal("GET"),
  path: z.literal("/secrets/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Secret,
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/secrets/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: z.literal("POST"),
  path: z.literal("/secrets/{id}/update"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
    }),
    path: z.object({
      id: z.string(),
    }),
    body: SecretSpec,
  }),
  response: z.unknown(),
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: z.literal("GET"),
  path: z.literal("/configs"),
  parameters: z.object({
    query: z.object({
      filters: z.string().optional(),
    }),
  }),
  response: z.array(Config),
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: z.literal("POST"),
  path: z.literal("/configs/create"),
  parameters: z.object({
    body: z.intersection(ConfigSpec, z.unknown()),
  }),
  response: IdResponse,
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: z.literal("GET"),
  path: z.literal("/configs/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: Config,
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: z.literal("DELETE"),
  path: z.literal("/configs/{id}"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: z.literal("POST"),
  path: z.literal("/configs/{id}/update"),
  parameters: z.object({
    query: z.object({
      version: z.number(),
    }),
    path: z.object({
      id: z.string(),
    }),
    body: ConfigSpec,
  }),
  response: z.unknown(),
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: z.literal("GET"),
  path: z.literal("/distribution/{name}/json"),
  parameters: z.object({
    path: z.object({
      name: z.string(),
    }),
  }),
  response: DistributionInspect,
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: z.literal("POST"),
  path: z.literal("/session"),
  parameters: z.never(),
  response: z.unknown(),
};

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
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("head", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.head>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
