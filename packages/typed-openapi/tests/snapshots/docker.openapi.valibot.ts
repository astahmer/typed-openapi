import v from "valibot";

export type Port = v.Output<typeof Port>;
export const Port = v.object({
  IP: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  PrivatePort: v.number(),
  PublicPort: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Type: v.union([v.literal("tcp"), v.literal("udp"), v.literal("sctp")]),
});

export type MountPoint = v.Output<typeof MountPoint>;
export const MountPoint = v.object({
  Type: v.optional(
    v.union([v.literal("bind"), v.literal("volume"), v.literal("tmpfs"), v.literal("npipe"), v.literal("cluster")]),
  ),
  Name: v.optional(v.string()),
  Source: v.optional(v.string()),
  Destination: v.optional(v.string()),
  Driver: v.optional(v.string()),
  Mode: v.optional(v.string()),
  RW: v.optional(v.boolean()),
  Propagation: v.optional(v.string()),
});

export type DeviceMapping = v.Output<typeof DeviceMapping>;
export const DeviceMapping = v.object({
  PathOnHost: v.optional(v.string()),
  PathInContainer: v.optional(v.string()),
  CgroupPermissions: v.optional(v.string()),
});

export type DeviceRequest = v.Output<typeof DeviceRequest>;
export const DeviceRequest = v.object({
  Driver: v.optional(v.string()),
  Count: v.optional(v.number()),
  DeviceIDs: v.optional(v.array(v.string())),
  Capabilities: v.optional(v.array(v.array(v.string()))),
  Options: v.optional(v.unknown()),
});

export type ThrottleDevice = v.Output<typeof ThrottleDevice>;
export const ThrottleDevice = v.object({
  Path: v.optional(v.string()),
  Rate: v.optional(v.number()),
});

export type Mount = v.Output<typeof Mount>;
export const Mount = v.object({
  Target: v.optional(v.string()),
  Source: v.optional(v.string()),
  Type: v.optional(
    v.union([v.literal("bind"), v.literal("volume"), v.literal("tmpfs"), v.literal("npipe"), v.literal("cluster")]),
  ),
  ReadOnly: v.optional(v.boolean()),
  Consistency: v.optional(v.string()),
  BindOptions: v.optional(
    v.object({
      Propagation: v.optional(
        v.union([
          v.literal("private"),
          v.literal("rprivate"),
          v.literal("shared"),
          v.literal("rshared"),
          v.literal("slave"),
          v.literal("rslave"),
        ]),
      ),
      NonRecursive: v.optional(v.boolean()),
      CreateMountpoint: v.optional(v.boolean()),
    }),
  ),
  VolumeOptions: v.optional(
    v.object({
      NoCopy: v.optional(v.boolean()),
      Labels: v.optional(v.unknown()),
      DriverConfig: v.optional(
        v.object({
          Name: v.optional(v.string()),
          Options: v.optional(v.unknown()),
        }),
      ),
    }),
  ),
  TmpfsOptions: v.optional(
    v.object({
      SizeBytes: v.optional(v.number()),
      Mode: v.optional(v.number()),
    }),
  ),
});

export type RestartPolicy = v.Output<typeof RestartPolicy>;
export const RestartPolicy = v.object({
  Name: v.optional(
    v.union([
      v.literal(""),
      v.literal("no"),
      v.literal("always"),
      v.literal("unless-stopped"),
      v.literal("on-failure"),
    ]),
  ),
  MaximumRetryCount: v.optional(v.number()),
});

export type Resources = v.Output<typeof Resources>;
export const Resources = v.object({
  CpuShares: v.optional(v.number()),
  Memory: v.optional(v.number()),
  CgroupParent: v.optional(v.string()),
  BlkioWeight: v.optional(v.number()),
  BlkioWeightDevice: v.optional(
    v.array(
      v.object({
        Path: v.optional(v.string()),
        Weight: v.optional(v.number()),
      }),
    ),
  ),
  BlkioDeviceReadBps: v.optional(v.array(ThrottleDevice)),
  BlkioDeviceWriteBps: v.optional(v.array(ThrottleDevice)),
  BlkioDeviceReadIOps: v.optional(v.array(ThrottleDevice)),
  BlkioDeviceWriteIOps: v.optional(v.array(ThrottleDevice)),
  CpuPeriod: v.optional(v.number()),
  CpuQuota: v.optional(v.number()),
  CpuRealtimePeriod: v.optional(v.number()),
  CpuRealtimeRuntime: v.optional(v.number()),
  CpusetCpus: v.optional(v.string()),
  CpusetMems: v.optional(v.string()),
  Devices: v.optional(v.array(DeviceMapping)),
  DeviceCgroupRules: v.optional(v.array(v.string())),
  DeviceRequests: v.optional(v.array(DeviceRequest)),
  KernelMemoryTCP: v.optional(v.number()),
  MemoryReservation: v.optional(v.number()),
  MemorySwap: v.optional(v.number()),
  MemorySwappiness: v.optional(v.number()),
  NanoCpus: v.optional(v.number()),
  OomKillDisable: v.optional(v.boolean()),
  Init: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
  PidsLimit: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Ulimits: v.optional(
    v.array(
      v.object({
        Name: v.optional(v.string()),
        Soft: v.optional(v.number()),
        Hard: v.optional(v.number()),
      }),
    ),
  ),
  CpuCount: v.optional(v.number()),
  CpuPercent: v.optional(v.number()),
  IOMaximumIOps: v.optional(v.number()),
  IOMaximumBandwidth: v.optional(v.number()),
});

export type Limit = v.Output<typeof Limit>;
export const Limit = v.object({
  NanoCPUs: v.optional(v.number()),
  MemoryBytes: v.optional(v.number()),
  Pids: v.optional(v.number()),
});

export type GenericResources = v.Output<typeof GenericResources>;
export const GenericResources = v.array(
  v.object({
    NamedResourceSpec: v.optional(
      v.object({
        Kind: v.optional(v.string()),
        Value: v.optional(v.string()),
      }),
    ),
    DiscreteResourceSpec: v.optional(
      v.object({
        Kind: v.optional(v.string()),
        Value: v.optional(v.number()),
      }),
    ),
  }),
);

export type ResourceObject = v.Output<typeof ResourceObject>;
export const ResourceObject = v.object({
  NanoCPUs: v.optional(v.number()),
  MemoryBytes: v.optional(v.number()),
  GenericResources: v.optional(GenericResources),
});

export type HealthConfig = v.Output<typeof HealthConfig>;
export const HealthConfig = v.object({
  Test: v.optional(v.array(v.string())),
  Interval: v.optional(v.number()),
  Timeout: v.optional(v.number()),
  Retries: v.optional(v.number()),
  StartPeriod: v.optional(v.number()),
});

export type HealthcheckResult = v.Output<typeof HealthcheckResult>;
export const HealthcheckResult = v.union([
  v.object({
    Start: v.optional(v.string()),
    End: v.optional(v.string()),
    ExitCode: v.optional(v.number()),
    Output: v.optional(v.string()),
  }),
  v.any(/* unsupported */),
]);

export type Health = v.Output<typeof Health>;
export const Health = v.union([
  v.object({
    Status: v.optional(
      v.union([v.literal("none"), v.literal("starting"), v.literal("healthy"), v.literal("unhealthy")]),
    ),
    FailingStreak: v.optional(v.number()),
    Log: v.optional(v.array(HealthcheckResult)),
  }),
  v.any(/* unsupported */),
]);

export type PortBinding = v.Output<typeof PortBinding>;
export const PortBinding = v.object({
  HostIp: v.optional(v.string()),
  HostPort: v.optional(v.string()),
});

export type PortMap = v.Output<typeof PortMap>;
export const PortMap = v.unknown();

export type HostConfig = v.Output<typeof HostConfig>;
export const HostConfig = v.merge([
  Resources,
  v.object({
    Binds: v.optional(v.array(v.string())),
    ContainerIDFile: v.optional(v.string()),
    LogConfig: v.optional(
      v.object({
        Type: v.optional(
          v.union([
            v.literal("json-file"),
            v.literal("syslog"),
            v.literal("journald"),
            v.literal("gelf"),
            v.literal("fluentd"),
            v.literal("awslogs"),
            v.literal("splunk"),
            v.literal("etwlogs"),
            v.literal("none"),
          ]),
        ),
        Config: v.optional(v.unknown()),
      }),
    ),
    NetworkMode: v.optional(v.string()),
    PortBindings: v.optional(PortMap),
    RestartPolicy: v.optional(RestartPolicy),
    AutoRemove: v.optional(v.boolean()),
    VolumeDriver: v.optional(v.string()),
    VolumesFrom: v.optional(v.array(v.string())),
    Mounts: v.optional(v.array(Mount)),
    ConsoleSize: v.optional(v.union([v.array(v.number()), v.any(/* unsupported */)])),
    Annotations: v.optional(v.unknown()),
    CapAdd: v.optional(v.array(v.string())),
    CapDrop: v.optional(v.array(v.string())),
    CgroupnsMode: v.optional(v.union([v.literal("private"), v.literal("host")])),
    Dns: v.optional(v.array(v.string())),
    DnsOptions: v.optional(v.array(v.string())),
    DnsSearch: v.optional(v.array(v.string())),
    ExtraHosts: v.optional(v.array(v.string())),
    GroupAdd: v.optional(v.array(v.string())),
    IpcMode: v.optional(v.string()),
    Cgroup: v.optional(v.string()),
    Links: v.optional(v.array(v.string())),
    OomScoreAdj: v.optional(v.number()),
    PidMode: v.optional(v.string()),
    Privileged: v.optional(v.boolean()),
    PublishAllPorts: v.optional(v.boolean()),
    ReadonlyRootfs: v.optional(v.boolean()),
    SecurityOpt: v.optional(v.array(v.string())),
    StorageOpt: v.optional(v.unknown()),
    Tmpfs: v.optional(v.unknown()),
    UTSMode: v.optional(v.string()),
    UsernsMode: v.optional(v.string()),
    ShmSize: v.optional(v.number()),
    Sysctls: v.optional(v.unknown()),
    Runtime: v.optional(v.string()),
    Isolation: v.optional(v.union([v.literal("default"), v.literal("process"), v.literal("hyperv")])),
    MaskedPaths: v.optional(v.array(v.string())),
    ReadonlyPaths: v.optional(v.array(v.string())),
  }),
]);

export type ContainerConfig = v.Output<typeof ContainerConfig>;
export const ContainerConfig = v.object({
  Hostname: v.optional(v.string()),
  Domainname: v.optional(v.string()),
  User: v.optional(v.string()),
  AttachStdin: v.optional(v.boolean()),
  AttachStdout: v.optional(v.boolean()),
  AttachStderr: v.optional(v.boolean()),
  ExposedPorts: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
  Tty: v.optional(v.boolean()),
  OpenStdin: v.optional(v.boolean()),
  StdinOnce: v.optional(v.boolean()),
  Env: v.optional(v.array(v.string())),
  Cmd: v.optional(v.array(v.string())),
  Healthcheck: v.optional(HealthConfig),
  ArgsEscaped: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
  Image: v.optional(v.string()),
  Volumes: v.optional(v.unknown()),
  WorkingDir: v.optional(v.string()),
  Entrypoint: v.optional(v.array(v.string())),
  NetworkDisabled: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
  MacAddress: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  OnBuild: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
  Labels: v.optional(v.unknown()),
  StopSignal: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  StopTimeout: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Shell: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
});

export type EndpointIPAMConfig = v.Output<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = v.union([
  v.object({
    IPv4Address: v.optional(v.string()),
    IPv6Address: v.optional(v.string()),
    LinkLocalIPs: v.optional(v.array(v.string())),
  }),
  v.any(/* unsupported */),
]);

export type EndpointSettings = v.Output<typeof EndpointSettings>;
export const EndpointSettings = v.object({
  IPAMConfig: v.optional(EndpointIPAMConfig),
  Links: v.optional(v.array(v.string())),
  Aliases: v.optional(v.array(v.string())),
  NetworkID: v.optional(v.string()),
  EndpointID: v.optional(v.string()),
  Gateway: v.optional(v.string()),
  IPAddress: v.optional(v.string()),
  IPPrefixLen: v.optional(v.number()),
  IPv6Gateway: v.optional(v.string()),
  GlobalIPv6Address: v.optional(v.string()),
  GlobalIPv6PrefixLen: v.optional(v.number()),
  MacAddress: v.optional(v.string()),
  DriverOpts: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
});

export type NetworkingConfig = v.Output<typeof NetworkingConfig>;
export const NetworkingConfig = v.object({
  EndpointsConfig: v.optional(v.unknown()),
});

export type Address = v.Output<typeof Address>;
export const Address = v.object({
  Addr: v.optional(v.string()),
  PrefixLen: v.optional(v.number()),
});

export type NetworkSettings = v.Output<typeof NetworkSettings>;
export const NetworkSettings = v.object({
  Bridge: v.optional(v.string()),
  SandboxID: v.optional(v.string()),
  HairpinMode: v.optional(v.boolean()),
  LinkLocalIPv6Address: v.optional(v.string()),
  LinkLocalIPv6PrefixLen: v.optional(v.number()),
  Ports: v.optional(PortMap),
  SandboxKey: v.optional(v.string()),
  SecondaryIPAddresses: v.optional(v.union([v.array(Address), v.any(/* unsupported */)])),
  SecondaryIPv6Addresses: v.optional(v.union([v.array(Address), v.any(/* unsupported */)])),
  EndpointID: v.optional(v.string()),
  Gateway: v.optional(v.string()),
  GlobalIPv6Address: v.optional(v.string()),
  GlobalIPv6PrefixLen: v.optional(v.number()),
  IPAddress: v.optional(v.string()),
  IPPrefixLen: v.optional(v.number()),
  IPv6Gateway: v.optional(v.string()),
  MacAddress: v.optional(v.string()),
  Networks: v.optional(v.unknown()),
});

export type GraphDriverData = v.Output<typeof GraphDriverData>;
export const GraphDriverData = v.object({
  Name: v.string(),
  Data: v.unknown(),
});

export type ChangeType = v.Output<typeof ChangeType>;
export const ChangeType = v.union([v.literal(0), v.literal(1), v.literal(2)]);

export type FilesystemChange = v.Output<typeof FilesystemChange>;
export const FilesystemChange = v.object({
  Path: v.string(),
  Kind: ChangeType,
});

export type ImageInspect = v.Output<typeof ImageInspect>;
export const ImageInspect = v.object({
  Id: v.optional(v.string()),
  RepoTags: v.optional(v.array(v.string())),
  RepoDigests: v.optional(v.array(v.string())),
  Parent: v.optional(v.string()),
  Comment: v.optional(v.string()),
  Created: v.optional(v.string()),
  Container: v.optional(v.string()),
  ContainerConfig: v.optional(ContainerConfig),
  DockerVersion: v.optional(v.string()),
  Author: v.optional(v.string()),
  Config: v.optional(ContainerConfig),
  Architecture: v.optional(v.string()),
  Variant: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Os: v.optional(v.string()),
  OsVersion: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Size: v.optional(v.number()),
  VirtualSize: v.optional(v.number()),
  GraphDriver: v.optional(GraphDriverData),
  RootFS: v.optional(
    v.object({
      Type: v.string(),
      Layers: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
    }),
  ),
  Metadata: v.optional(
    v.object({
      LastTagTime: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
    }),
  ),
});

export type ImageSummary = v.Output<typeof ImageSummary>;
export const ImageSummary = v.object({
  Id: v.string(),
  ParentId: v.string(),
  RepoTags: v.array(v.string()),
  RepoDigests: v.array(v.string()),
  Created: v.number(),
  Size: v.number(),
  SharedSize: v.number(),
  VirtualSize: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Labels: v.unknown(),
  Containers: v.number(),
});

export type AuthConfig = v.Output<typeof AuthConfig>;
export const AuthConfig = v.object({
  username: v.optional(v.string()),
  password: v.optional(v.string()),
  email: v.optional(v.string()),
  serveraddress: v.optional(v.string()),
});

export type ProcessConfig = v.Output<typeof ProcessConfig>;
export const ProcessConfig = v.object({
  privileged: v.optional(v.boolean()),
  user: v.optional(v.string()),
  tty: v.optional(v.boolean()),
  entrypoint: v.optional(v.string()),
  arguments: v.optional(v.array(v.string())),
});

export type ObjectVersion = v.Output<typeof ObjectVersion>;
export const ObjectVersion = v.object({
  Index: v.optional(v.number()),
});

export type Topology = v.Output<typeof Topology>;
export const Topology = v.unknown();

export type ClusterVolumeSpec = v.Output<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = v.object({
  Group: v.optional(v.string()),
  AccessMode: v.optional(
    v.object({
      Scope: v.optional(v.union([v.literal("single"), v.literal("multi")])),
      Sharing: v.optional(
        v.union([v.literal("none"), v.literal("readonly"), v.literal("onewriter"), v.literal("all")]),
      ),
      MountVolume: v.optional(v.object({})),
      Secrets: v.optional(
        v.array(
          v.object({
            Key: v.optional(v.string()),
            Secret: v.optional(v.string()),
          }),
        ),
      ),
      AccessibilityRequirements: v.optional(
        v.object({
          Requisite: v.optional(v.array(Topology)),
          Preferred: v.optional(v.array(Topology)),
        }),
      ),
      CapacityRange: v.optional(
        v.object({
          RequiredBytes: v.optional(v.number()),
          LimitBytes: v.optional(v.number()),
        }),
      ),
      Availability: v.optional(v.union([v.literal("active"), v.literal("pause"), v.literal("drain")])),
    }),
  ),
});

export type ClusterVolume = v.Output<typeof ClusterVolume>;
export const ClusterVolume = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Spec: v.optional(ClusterVolumeSpec),
  Info: v.optional(
    v.object({
      CapacityBytes: v.optional(v.number()),
      VolumeContext: v.optional(v.unknown()),
      VolumeID: v.optional(v.string()),
      AccessibleTopology: v.optional(v.array(Topology)),
    }),
  ),
  PublishStatus: v.optional(
    v.array(
      v.object({
        NodeID: v.optional(v.string()),
        State: v.optional(
          v.union([
            v.literal("pending-publish"),
            v.literal("published"),
            v.literal("pending-node-unpublish"),
            v.literal("pending-controller-unpublish"),
          ]),
        ),
        PublishContext: v.optional(v.unknown()),
      }),
    ),
  ),
});

export type Volume = v.Output<typeof Volume>;
export const Volume = v.object({
  Name: v.string(),
  Driver: v.string(),
  Mountpoint: v.string(),
  CreatedAt: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Status: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
  Labels: v.unknown(),
  Scope: v.union([v.literal("local"), v.literal("global")]),
  ClusterVolume: v.optional(v.union([ClusterVolume, v.any(/* unsupported */)])),
  Options: v.unknown(),
  UsageData: v.optional(
    v.union([
      v.object({
        Size: v.number(),
        RefCount: v.number(),
      }),
      v.any(/* unsupported */),
      v.any(/* unsupported */),
    ]),
  ),
});

export type VolumeCreateOptions = v.Output<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = v.object({
  Name: v.optional(v.string()),
  Driver: v.optional(v.string()),
  DriverOpts: v.optional(v.unknown()),
  Labels: v.optional(v.unknown()),
  ClusterVolumeSpec: v.optional(ClusterVolumeSpec),
});

export type VolumeListResponse = v.Output<typeof VolumeListResponse>;
export const VolumeListResponse = v.object({
  Volumes: v.optional(v.array(Volume)),
  Warnings: v.optional(v.array(v.string())),
});

export type IPAMConfig = v.Output<typeof IPAMConfig>;
export const IPAMConfig = v.object({
  Subnet: v.optional(v.string()),
  IPRange: v.optional(v.string()),
  Gateway: v.optional(v.string()),
  AuxiliaryAddresses: v.optional(v.unknown()),
});

export type IPAM = v.Output<typeof IPAM>;
export const IPAM = v.object({
  Driver: v.optional(v.string()),
  Config: v.optional(v.array(IPAMConfig)),
  Options: v.optional(v.unknown()),
});

export type NetworkContainer = v.Output<typeof NetworkContainer>;
export const NetworkContainer = v.object({
  Name: v.optional(v.string()),
  EndpointID: v.optional(v.string()),
  MacAddress: v.optional(v.string()),
  IPv4Address: v.optional(v.string()),
  IPv6Address: v.optional(v.string()),
});

export type Network = v.Output<typeof Network>;
export const Network = v.object({
  Name: v.optional(v.string()),
  Id: v.optional(v.string()),
  Created: v.optional(v.string()),
  Scope: v.optional(v.string()),
  Driver: v.optional(v.string()),
  EnableIPv6: v.optional(v.boolean()),
  IPAM: v.optional(IPAM),
  Internal: v.optional(v.boolean()),
  Attachable: v.optional(v.boolean()),
  Ingress: v.optional(v.boolean()),
  Containers: v.optional(v.unknown()),
  Options: v.optional(v.unknown()),
  Labels: v.optional(v.unknown()),
});

export type ErrorDetail = v.Output<typeof ErrorDetail>;
export const ErrorDetail = v.object({
  code: v.optional(v.number()),
  message: v.optional(v.string()),
});

export type ProgressDetail = v.Output<typeof ProgressDetail>;
export const ProgressDetail = v.object({
  current: v.optional(v.number()),
  total: v.optional(v.number()),
});

export type ImageID = v.Output<typeof ImageID>;
export const ImageID = v.object({
  ID: v.optional(v.string()),
});

export type BuildInfo = v.Output<typeof BuildInfo>;
export const BuildInfo = v.object({
  id: v.optional(v.string()),
  stream: v.optional(v.string()),
  error: v.optional(v.string()),
  errorDetail: v.optional(ErrorDetail),
  status: v.optional(v.string()),
  progress: v.optional(v.string()),
  progressDetail: v.optional(ProgressDetail),
  aux: v.optional(ImageID),
});

export type BuildCache = v.Output<typeof BuildCache>;
export const BuildCache = v.object({
  ID: v.optional(v.string()),
  Parent: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Parents: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
  Type: v.optional(
    v.union([
      v.literal("internal"),
      v.literal("frontend"),
      v.literal("source.local"),
      v.literal("source.git.checkout"),
      v.literal("exec.cachemount"),
      v.literal("regular"),
    ]),
  ),
  Description: v.optional(v.string()),
  InUse: v.optional(v.boolean()),
  Shared: v.optional(v.boolean()),
  Size: v.optional(v.number()),
  CreatedAt: v.optional(v.string()),
  LastUsedAt: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  UsageCount: v.optional(v.number()),
});

export type CreateImageInfo = v.Output<typeof CreateImageInfo>;
export const CreateImageInfo = v.object({
  id: v.optional(v.string()),
  error: v.optional(v.string()),
  errorDetail: v.optional(ErrorDetail),
  status: v.optional(v.string()),
  progress: v.optional(v.string()),
  progressDetail: v.optional(ProgressDetail),
});

export type PushImageInfo = v.Output<typeof PushImageInfo>;
export const PushImageInfo = v.object({
  error: v.optional(v.string()),
  status: v.optional(v.string()),
  progress: v.optional(v.string()),
  progressDetail: v.optional(ProgressDetail),
});

export type ErrorResponse = v.Output<typeof ErrorResponse>;
export const ErrorResponse = v.object({
  message: v.string(),
});

export type IdResponse = v.Output<typeof IdResponse>;
export const IdResponse = v.object({
  Id: v.string(),
});

export type PluginMount = v.Output<typeof PluginMount>;
export const PluginMount = v.object({
  Name: v.string(),
  Description: v.string(),
  Settable: v.array(v.string()),
  Source: v.string(),
  Destination: v.string(),
  Type: v.string(),
  Options: v.array(v.string()),
});

export type PluginDevice = v.Output<typeof PluginDevice>;
export const PluginDevice = v.object({
  Name: v.string(),
  Description: v.string(),
  Settable: v.array(v.string()),
  Path: v.string(),
});

export type PluginEnv = v.Output<typeof PluginEnv>;
export const PluginEnv = v.object({
  Name: v.string(),
  Description: v.string(),
  Settable: v.array(v.string()),
  Value: v.string(),
});

export type PluginInterfaceType = v.Output<typeof PluginInterfaceType>;
export const PluginInterfaceType = v.object({
  Prefix: v.string(),
  Capability: v.string(),
  Version: v.string(),
});

export type PluginPrivilege = v.Output<typeof PluginPrivilege>;
export const PluginPrivilege = v.object({
  Name: v.optional(v.string()),
  Description: v.optional(v.string()),
  Value: v.optional(v.array(v.string())),
});

export type Plugin = v.Output<typeof Plugin>;
export const Plugin = v.object({
  Id: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Name: v.string(),
  Enabled: v.boolean(),
  Settings: v.object({
    Mounts: v.array(PluginMount),
    Env: v.array(v.string()),
    Args: v.array(v.string()),
    Devices: v.array(PluginDevice),
  }),
  PluginReference: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
  Config: v.object({
    DockerVersion: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
    Description: v.string(),
    Documentation: v.string(),
    Interface: v.object({
      Types: v.array(PluginInterfaceType),
      Socket: v.string(),
      ProtocolScheme: v.optional(v.union([v.literal(""), v.literal("moby.plugins.http/v1"), v.any(/* unsupported */)])),
    }),
    Entrypoint: v.array(v.string()),
    WorkDir: v.string(),
    User: v.optional(
      v.union([
        v.object({
          UID: v.optional(v.number()),
          GID: v.optional(v.number()),
        }),
        v.any(/* unsupported */),
      ]),
    ),
    Network: v.object({
      Type: v.string(),
    }),
    Linux: v.object({
      Capabilities: v.array(v.string()),
      AllowAllDevices: v.boolean(),
      Devices: v.array(PluginDevice),
    }),
    PropagatedMount: v.string(),
    IpcHost: v.boolean(),
    PidHost: v.boolean(),
    Mounts: v.array(PluginMount),
    Env: v.array(PluginEnv),
    Args: v.object({
      Name: v.string(),
      Description: v.string(),
      Settable: v.array(v.string()),
      Value: v.array(v.string()),
    }),
    rootfs: v.optional(
      v.union([
        v.object({
          type: v.optional(v.string()),
          diff_ids: v.optional(v.array(v.string())),
        }),
        v.any(/* unsupported */),
      ]),
    ),
  }),
});

export type NodeSpec = v.Output<typeof NodeSpec>;
export const NodeSpec = v.object({
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Role: v.optional(v.union([v.literal("worker"), v.literal("manager")])),
  Availability: v.optional(v.union([v.literal("active"), v.literal("pause"), v.literal("drain")])),
});

export type Platform = v.Output<typeof Platform>;
export const Platform = v.object({
  Architecture: v.optional(v.string()),
  OS: v.optional(v.string()),
});

export type EngineDescription = v.Output<typeof EngineDescription>;
export const EngineDescription = v.object({
  EngineVersion: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Plugins: v.optional(
    v.array(
      v.object({
        Type: v.optional(v.string()),
        Name: v.optional(v.string()),
      }),
    ),
  ),
});

export type TLSInfo = v.Output<typeof TLSInfo>;
export const TLSInfo = v.object({
  TrustRoot: v.optional(v.string()),
  CertIssuerSubject: v.optional(v.string()),
  CertIssuerPublicKey: v.optional(v.string()),
});

export type NodeDescription = v.Output<typeof NodeDescription>;
export const NodeDescription = v.object({
  Hostname: v.optional(v.string()),
  Platform: v.optional(Platform),
  Resources: v.optional(ResourceObject),
  Engine: v.optional(EngineDescription),
  TLSInfo: v.optional(TLSInfo),
});

export type NodeState = v.Output<typeof NodeState>;
export const NodeState = v.union([
  v.literal("unknown"),
  v.literal("down"),
  v.literal("ready"),
  v.literal("disconnected"),
]);

export type NodeStatus = v.Output<typeof NodeStatus>;
export const NodeStatus = v.object({
  State: v.optional(NodeState),
  Message: v.optional(v.string()),
  Addr: v.optional(v.string()),
});

export type Reachability = v.Output<typeof Reachability>;
export const Reachability = v.union([v.literal("unknown"), v.literal("unreachable"), v.literal("reachable")]);

export type ManagerStatus = v.Output<typeof ManagerStatus>;
export const ManagerStatus = v.union([
  v.object({
    Leader: v.optional(v.boolean()),
    Reachability: v.optional(Reachability),
    Addr: v.optional(v.string()),
  }),
  v.any(/* unsupported */),
]);

export type Node = v.Output<typeof Node>;
export const Node = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Spec: v.optional(NodeSpec),
  Description: v.optional(NodeDescription),
  Status: v.optional(NodeStatus),
  ManagerStatus: v.optional(ManagerStatus),
});

export type SwarmSpec = v.Output<typeof SwarmSpec>;
export const SwarmSpec = v.object({
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Orchestration: v.optional(
    v.union([
      v.object({
        TaskHistoryRetentionLimit: v.optional(v.number()),
      }),
      v.any(/* unsupported */),
    ]),
  ),
  Raft: v.optional(
    v.object({
      SnapshotInterval: v.optional(v.number()),
      KeepOldSnapshots: v.optional(v.number()),
      LogEntriesForSlowFollowers: v.optional(v.number()),
      ElectionTick: v.optional(v.number()),
      HeartbeatTick: v.optional(v.number()),
    }),
  ),
  Dispatcher: v.optional(
    v.union([
      v.object({
        HeartbeatPeriod: v.optional(v.number()),
      }),
      v.any(/* unsupported */),
    ]),
  ),
  CAConfig: v.optional(
    v.union([
      v.object({
        NodeCertExpiry: v.optional(v.number()),
        ExternalCAs: v.optional(
          v.array(
            v.object({
              Protocol: v.optional(v.literal("cfssl")),
              URL: v.optional(v.string()),
              Options: v.optional(v.unknown()),
              CACert: v.optional(v.string()),
            }),
          ),
        ),
        SigningCACert: v.optional(v.string()),
        SigningCAKey: v.optional(v.string()),
        ForceRotate: v.optional(v.number()),
      }),
      v.any(/* unsupported */),
    ]),
  ),
  EncryptionConfig: v.optional(
    v.object({
      AutoLockManagers: v.optional(v.boolean()),
    }),
  ),
  TaskDefaults: v.optional(
    v.object({
      LogDriver: v.optional(
        v.object({
          Name: v.optional(v.string()),
          Options: v.optional(v.unknown()),
        }),
      ),
    }),
  ),
});

export type ClusterInfo = v.Output<typeof ClusterInfo>;
export const ClusterInfo = v.union([
  v.object({
    ID: v.optional(v.string()),
    Version: v.optional(ObjectVersion),
    CreatedAt: v.optional(v.string()),
    UpdatedAt: v.optional(v.string()),
    Spec: v.optional(SwarmSpec),
    TLSInfo: v.optional(TLSInfo),
    RootRotationInProgress: v.optional(v.boolean()),
    DataPathPort: v.optional(v.number()),
    DefaultAddrPool: v.optional(v.array(v.string())),
    SubnetSize: v.optional(v.number()),
  }),
  v.any(/* unsupported */),
]);

export type JoinTokens = v.Output<typeof JoinTokens>;
export const JoinTokens = v.object({
  Worker: v.optional(v.string()),
  Manager: v.optional(v.string()),
});

export type Swarm = v.Output<typeof Swarm>;
export const Swarm = v.merge([
  ClusterInfo,
  v.object({
    JoinTokens: v.optional(JoinTokens),
  }),
]);

export type NetworkAttachmentConfig = v.Output<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = v.object({
  Target: v.optional(v.string()),
  Aliases: v.optional(v.array(v.string())),
  DriverOpts: v.optional(v.unknown()),
});

export type TaskSpec = v.Output<typeof TaskSpec>;
export const TaskSpec = v.object({
  PluginSpec: v.optional(
    v.object({
      Name: v.optional(v.string()),
      Remote: v.optional(v.string()),
      Disabled: v.optional(v.boolean()),
      PluginPrivilege: v.optional(v.array(PluginPrivilege)),
    }),
  ),
  ContainerSpec: v.optional(
    v.object({
      Image: v.optional(v.string()),
      Labels: v.optional(v.unknown()),
      Command: v.optional(v.array(v.string())),
      Args: v.optional(v.array(v.string())),
      Hostname: v.optional(v.string()),
      Env: v.optional(v.array(v.string())),
      Dir: v.optional(v.string()),
      User: v.optional(v.string()),
      Groups: v.optional(v.array(v.string())),
      Privileges: v.optional(
        v.object({
          CredentialSpec: v.optional(
            v.object({
              Config: v.optional(v.string()),
              File: v.optional(v.string()),
              Registry: v.optional(v.string()),
            }),
          ),
          SELinuxContext: v.optional(
            v.object({
              Disable: v.optional(v.boolean()),
              User: v.optional(v.string()),
              Role: v.optional(v.string()),
              Type: v.optional(v.string()),
              Level: v.optional(v.string()),
            }),
          ),
        }),
      ),
      TTY: v.optional(v.boolean()),
      OpenStdin: v.optional(v.boolean()),
      ReadOnly: v.optional(v.boolean()),
      Mounts: v.optional(v.array(Mount)),
      StopSignal: v.optional(v.string()),
      StopGracePeriod: v.optional(v.number()),
      HealthCheck: v.optional(HealthConfig),
      Hosts: v.optional(v.array(v.string())),
      DNSConfig: v.optional(
        v.object({
          Nameservers: v.optional(v.array(v.string())),
          Search: v.optional(v.array(v.string())),
          Options: v.optional(v.array(v.string())),
        }),
      ),
      Secrets: v.optional(
        v.array(
          v.object({
            File: v.optional(
              v.object({
                Name: v.optional(v.string()),
                UID: v.optional(v.string()),
                GID: v.optional(v.string()),
                Mode: v.optional(v.number()),
              }),
            ),
            SecretID: v.optional(v.string()),
            SecretName: v.optional(v.string()),
          }),
        ),
      ),
      Configs: v.optional(
        v.array(
          v.object({
            File: v.optional(
              v.object({
                Name: v.optional(v.string()),
                UID: v.optional(v.string()),
                GID: v.optional(v.string()),
                Mode: v.optional(v.number()),
              }),
            ),
            Runtime: v.optional(v.object({})),
            ConfigID: v.optional(v.string()),
            ConfigName: v.optional(v.string()),
          }),
        ),
      ),
      Isolation: v.optional(v.union([v.literal("default"), v.literal("process"), v.literal("hyperv")])),
      Init: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      Sysctls: v.optional(v.unknown()),
      CapabilityAdd: v.optional(v.array(v.string())),
      CapabilityDrop: v.optional(v.array(v.string())),
      Ulimits: v.optional(
        v.array(
          v.object({
            Name: v.optional(v.string()),
            Soft: v.optional(v.number()),
            Hard: v.optional(v.number()),
          }),
        ),
      ),
    }),
  ),
  NetworkAttachmentSpec: v.optional(
    v.object({
      ContainerID: v.optional(v.string()),
    }),
  ),
  Resources: v.optional(
    v.object({
      Limits: v.optional(Limit),
      Reservations: v.optional(ResourceObject),
    }),
  ),
  RestartPolicy: v.optional(
    v.object({
      Condition: v.optional(v.union([v.literal("none"), v.literal("on-failure"), v.literal("any")])),
      Delay: v.optional(v.number()),
      MaxAttempts: v.optional(v.number()),
      Window: v.optional(v.number()),
    }),
  ),
  Placement: v.optional(
    v.object({
      Constraints: v.optional(v.array(v.string())),
      Preferences: v.optional(
        v.array(
          v.object({
            Spread: v.optional(
              v.object({
                SpreadDescriptor: v.optional(v.string()),
              }),
            ),
          }),
        ),
      ),
      MaxReplicas: v.optional(v.number()),
      Platforms: v.optional(v.array(Platform)),
    }),
  ),
  ForceUpdate: v.optional(v.number()),
  Runtime: v.optional(v.string()),
  Networks: v.optional(v.array(NetworkAttachmentConfig)),
  LogDriver: v.optional(
    v.object({
      Name: v.optional(v.string()),
      Options: v.optional(v.unknown()),
    }),
  ),
});

export type TaskState = v.Output<typeof TaskState>;
export const TaskState = v.union([
  v.literal("new"),
  v.literal("allocated"),
  v.literal("pending"),
  v.literal("assigned"),
  v.literal("accepted"),
  v.literal("preparing"),
  v.literal("ready"),
  v.literal("starting"),
  v.literal("running"),
  v.literal("complete"),
  v.literal("shutdown"),
  v.literal("failed"),
  v.literal("rejected"),
  v.literal("remove"),
  v.literal("orphaned"),
]);

export type Task = v.Output<typeof Task>;
export const Task = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Spec: v.optional(TaskSpec),
  ServiceID: v.optional(v.string()),
  Slot: v.optional(v.number()),
  NodeID: v.optional(v.string()),
  AssignedGenericResources: v.optional(GenericResources),
  Status: v.optional(
    v.object({
      Timestamp: v.optional(v.string()),
      State: v.optional(TaskState),
      Message: v.optional(v.string()),
      Err: v.optional(v.string()),
      ContainerStatus: v.optional(
        v.object({
          ContainerID: v.optional(v.string()),
          PID: v.optional(v.number()),
          ExitCode: v.optional(v.number()),
        }),
      ),
    }),
  ),
  DesiredState: v.optional(TaskState),
  JobIteration: v.optional(ObjectVersion),
});

export type EndpointPortConfig = v.Output<typeof EndpointPortConfig>;
export const EndpointPortConfig = v.object({
  Name: v.optional(v.string()),
  Protocol: v.optional(v.union([v.literal("tcp"), v.literal("udp"), v.literal("sctp")])),
  TargetPort: v.optional(v.number()),
  PublishedPort: v.optional(v.number()),
  PublishMode: v.optional(v.union([v.literal("ingress"), v.literal("host")])),
});

export type EndpointSpec = v.Output<typeof EndpointSpec>;
export const EndpointSpec = v.object({
  Mode: v.optional(v.union([v.literal("vip"), v.literal("dnsrr")])),
  Ports: v.optional(v.array(EndpointPortConfig)),
});

export type ServiceSpec = v.Output<typeof ServiceSpec>;
export const ServiceSpec = v.object({
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  TaskTemplate: v.optional(TaskSpec),
  Mode: v.optional(
    v.object({
      Replicated: v.optional(
        v.object({
          Replicas: v.optional(v.number()),
        }),
      ),
      Global: v.optional(v.object({})),
      ReplicatedJob: v.optional(
        v.object({
          MaxConcurrent: v.optional(v.number()),
          TotalCompletions: v.optional(v.number()),
        }),
      ),
      GlobalJob: v.optional(v.object({})),
    }),
  ),
  UpdateConfig: v.optional(
    v.object({
      Parallelism: v.optional(v.number()),
      Delay: v.optional(v.number()),
      FailureAction: v.optional(v.union([v.literal("continue"), v.literal("pause"), v.literal("rollback")])),
      Monitor: v.optional(v.number()),
      MaxFailureRatio: v.optional(v.number()),
      Order: v.optional(v.union([v.literal("stop-first"), v.literal("start-first")])),
    }),
  ),
  RollbackConfig: v.optional(
    v.object({
      Parallelism: v.optional(v.number()),
      Delay: v.optional(v.number()),
      FailureAction: v.optional(v.union([v.literal("continue"), v.literal("pause")])),
      Monitor: v.optional(v.number()),
      MaxFailureRatio: v.optional(v.number()),
      Order: v.optional(v.union([v.literal("stop-first"), v.literal("start-first")])),
    }),
  ),
  Networks: v.optional(v.array(NetworkAttachmentConfig)),
  EndpointSpec: v.optional(EndpointSpec),
});

export type Service = v.Output<typeof Service>;
export const Service = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Spec: v.optional(ServiceSpec),
  Endpoint: v.optional(
    v.object({
      Spec: v.optional(EndpointSpec),
      Ports: v.optional(v.array(EndpointPortConfig)),
      VirtualIPs: v.optional(
        v.array(
          v.object({
            NetworkID: v.optional(v.string()),
            Addr: v.optional(v.string()),
          }),
        ),
      ),
    }),
  ),
  UpdateStatus: v.optional(
    v.object({
      State: v.optional(v.union([v.literal("updating"), v.literal("paused"), v.literal("completed")])),
      StartedAt: v.optional(v.string()),
      CompletedAt: v.optional(v.string()),
      Message: v.optional(v.string()),
    }),
  ),
  ServiceStatus: v.optional(
    v.object({
      RunningTasks: v.optional(v.number()),
      DesiredTasks: v.optional(v.number()),
      CompletedTasks: v.optional(v.number()),
    }),
  ),
  JobStatus: v.optional(
    v.object({
      JobIteration: v.optional(ObjectVersion),
      LastExecution: v.optional(v.string()),
    }),
  ),
});

export type ImageDeleteResponseItem = v.Output<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = v.object({
  Untagged: v.optional(v.string()),
  Deleted: v.optional(v.string()),
});

export type ServiceUpdateResponse = v.Output<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = v.object({
  Warnings: v.optional(v.array(v.string())),
});

export type ContainerSummary = v.Output<typeof ContainerSummary>;
export const ContainerSummary = v.object({
  Id: v.optional(v.string()),
  Names: v.optional(v.array(v.string())),
  Image: v.optional(v.string()),
  ImageID: v.optional(v.string()),
  Command: v.optional(v.string()),
  Created: v.optional(v.number()),
  Ports: v.optional(v.array(Port)),
  SizeRw: v.optional(v.number()),
  SizeRootFs: v.optional(v.number()),
  Labels: v.optional(v.unknown()),
  State: v.optional(v.string()),
  Status: v.optional(v.string()),
  HostConfig: v.optional(
    v.object({
      NetworkMode: v.optional(v.string()),
    }),
  ),
  NetworkSettings: v.optional(
    v.object({
      Networks: v.optional(v.unknown()),
    }),
  ),
  Mounts: v.optional(v.array(MountPoint)),
});

export type Driver = v.Output<typeof Driver>;
export const Driver = v.object({
  Name: v.string(),
  Options: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
});

export type SecretSpec = v.Output<typeof SecretSpec>;
export const SecretSpec = v.object({
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Data: v.optional(v.string()),
  Driver: v.optional(Driver),
  Templating: v.optional(Driver),
});

export type Secret = v.Output<typeof Secret>;
export const Secret = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Spec: v.optional(SecretSpec),
});

export type ConfigSpec = v.Output<typeof ConfigSpec>;
export const ConfigSpec = v.object({
  Name: v.optional(v.string()),
  Labels: v.optional(v.unknown()),
  Data: v.optional(v.string()),
  Templating: v.optional(Driver),
});

export type Config = v.Output<typeof Config>;
export const Config = v.object({
  ID: v.optional(v.string()),
  Version: v.optional(ObjectVersion),
  CreatedAt: v.optional(v.string()),
  UpdatedAt: v.optional(v.string()),
  Spec: v.optional(ConfigSpec),
});

export type ContainerState = v.Output<typeof ContainerState>;
export const ContainerState = v.union([
  v.object({
    Status: v.optional(
      v.union([
        v.literal("created"),
        v.literal("running"),
        v.literal("paused"),
        v.literal("restarting"),
        v.literal("removing"),
        v.literal("exited"),
        v.literal("dead"),
      ]),
    ),
    Running: v.optional(v.boolean()),
    Paused: v.optional(v.boolean()),
    Restarting: v.optional(v.boolean()),
    OOMKilled: v.optional(v.boolean()),
    Dead: v.optional(v.boolean()),
    Pid: v.optional(v.number()),
    ExitCode: v.optional(v.number()),
    Error: v.optional(v.string()),
    StartedAt: v.optional(v.string()),
    FinishedAt: v.optional(v.string()),
    Health: v.optional(Health),
  }),
  v.any(/* unsupported */),
]);

export type ContainerCreateResponse = v.Output<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = v.object({
  Id: v.string(),
  Warnings: v.array(v.string()),
});

export type ContainerWaitExitError = v.Output<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = v.object({
  Message: v.optional(v.string()),
});

export type ContainerWaitResponse = v.Output<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = v.object({
  StatusCode: v.number(),
  Error: v.optional(v.union([ContainerWaitExitError, v.any(/* unsupported */)])),
});

export type SystemVersion = v.Output<typeof SystemVersion>;
export const SystemVersion = v.object({
  Platform: v.optional(
    v.object({
      Name: v.string(),
    }),
  ),
  Components: v.optional(
    v.array(
      v.object({
        Name: v.string(),
        Version: v.string(),
        Details: v.optional(v.union([v.object({}), v.any(/* unsupported */), v.any(/* unsupported */)])),
      }),
    ),
  ),
  Version: v.optional(v.string()),
  ApiVersion: v.optional(v.string()),
  MinAPIVersion: v.optional(v.string()),
  GitCommit: v.optional(v.string()),
  GoVersion: v.optional(v.string()),
  Os: v.optional(v.string()),
  Arch: v.optional(v.string()),
  KernelVersion: v.optional(v.string()),
  Experimental: v.optional(v.boolean()),
  BuildTime: v.optional(v.string()),
});

export type PluginsInfo = v.Output<typeof PluginsInfo>;
export const PluginsInfo = v.object({
  Volume: v.optional(v.array(v.string())),
  Network: v.optional(v.array(v.string())),
  Authorization: v.optional(v.array(v.string())),
  Log: v.optional(v.array(v.string())),
});

export type IndexInfo = v.Output<typeof IndexInfo>;
export const IndexInfo = v.union([
  v.object({
    Name: v.optional(v.string()),
    Mirrors: v.optional(v.array(v.string())),
    Secure: v.optional(v.boolean()),
    Official: v.optional(v.boolean()),
  }),
  v.any(/* unsupported */),
]);

export type RegistryServiceConfig = v.Output<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = v.union([
  v.object({
    AllowNondistributableArtifactsCIDRs: v.optional(v.array(v.string())),
    AllowNondistributableArtifactsHostnames: v.optional(v.array(v.string())),
    InsecureRegistryCIDRs: v.optional(v.array(v.string())),
    IndexConfigs: v.optional(v.unknown()),
    Mirrors: v.optional(v.array(v.string())),
  }),
  v.any(/* unsupported */),
]);

export type Runtime = v.Output<typeof Runtime>;
export const Runtime = v.object({
  path: v.optional(v.string()),
  runtimeArgs: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
});

export type LocalNodeState = v.Output<typeof LocalNodeState>;
export const LocalNodeState = v.union([
  v.literal(""),
  v.literal("inactive"),
  v.literal("pending"),
  v.literal("active"),
  v.literal("error"),
  v.literal("locked"),
]);

export type PeerNode = v.Output<typeof PeerNode>;
export const PeerNode = v.object({
  NodeID: v.optional(v.string()),
  Addr: v.optional(v.string()),
});

export type SwarmInfo = v.Output<typeof SwarmInfo>;
export const SwarmInfo = v.object({
  NodeID: v.optional(v.string()),
  NodeAddr: v.optional(v.string()),
  LocalNodeState: v.optional(LocalNodeState),
  ControlAvailable: v.optional(v.boolean()),
  Error: v.optional(v.string()),
  RemoteManagers: v.optional(v.union([v.array(PeerNode), v.any(/* unsupported */)])),
  Nodes: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Managers: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  Cluster: v.optional(ClusterInfo),
});

export type Commit = v.Output<typeof Commit>;
export const Commit = v.object({
  ID: v.optional(v.string()),
  Expected: v.optional(v.string()),
});

export type SystemInfo = v.Output<typeof SystemInfo>;
export const SystemInfo = v.object({
  ID: v.optional(v.string()),
  Containers: v.optional(v.number()),
  ContainersRunning: v.optional(v.number()),
  ContainersPaused: v.optional(v.number()),
  ContainersStopped: v.optional(v.number()),
  Images: v.optional(v.number()),
  Driver: v.optional(v.string()),
  DriverStatus: v.optional(v.array(v.array(v.string()))),
  DockerRootDir: v.optional(v.string()),
  Plugins: v.optional(PluginsInfo),
  MemoryLimit: v.optional(v.boolean()),
  SwapLimit: v.optional(v.boolean()),
  KernelMemoryTCP: v.optional(v.boolean()),
  CpuCfsPeriod: v.optional(v.boolean()),
  CpuCfsQuota: v.optional(v.boolean()),
  CPUShares: v.optional(v.boolean()),
  CPUSet: v.optional(v.boolean()),
  PidsLimit: v.optional(v.boolean()),
  OomKillDisable: v.optional(v.boolean()),
  IPv4Forwarding: v.optional(v.boolean()),
  BridgeNfIptables: v.optional(v.boolean()),
  BridgeNfIp6tables: v.optional(v.boolean()),
  Debug: v.optional(v.boolean()),
  NFd: v.optional(v.number()),
  NGoroutines: v.optional(v.number()),
  SystemTime: v.optional(v.string()),
  LoggingDriver: v.optional(v.string()),
  CgroupDriver: v.optional(v.union([v.literal("cgroupfs"), v.literal("systemd"), v.literal("none")])),
  CgroupVersion: v.optional(v.union([v.literal("1"), v.literal("2")])),
  NEventsListener: v.optional(v.number()),
  KernelVersion: v.optional(v.string()),
  OperatingSystem: v.optional(v.string()),
  OSVersion: v.optional(v.string()),
  OSType: v.optional(v.string()),
  Architecture: v.optional(v.string()),
  NCPU: v.optional(v.number()),
  MemTotal: v.optional(v.number()),
  IndexServerAddress: v.optional(v.string()),
  RegistryConfig: v.optional(RegistryServiceConfig),
  GenericResources: v.optional(GenericResources),
  HttpProxy: v.optional(v.string()),
  HttpsProxy: v.optional(v.string()),
  NoProxy: v.optional(v.string()),
  Name: v.optional(v.string()),
  Labels: v.optional(v.array(v.string())),
  ExperimentalBuild: v.optional(v.boolean()),
  ServerVersion: v.optional(v.string()),
  Runtimes: v.optional(v.unknown()),
  DefaultRuntime: v.optional(v.string()),
  Swarm: v.optional(SwarmInfo),
  LiveRestoreEnabled: v.optional(v.boolean()),
  Isolation: v.optional(v.union([v.literal("default"), v.literal("hyperv"), v.literal("process")])),
  InitBinary: v.optional(v.string()),
  ContainerdCommit: v.optional(Commit),
  RuncCommit: v.optional(Commit),
  InitCommit: v.optional(Commit),
  SecurityOptions: v.optional(v.array(v.string())),
  ProductLicense: v.optional(v.string()),
  DefaultAddressPools: v.optional(
    v.array(
      v.object({
        Base: v.optional(v.string()),
        Size: v.optional(v.number()),
      }),
    ),
  ),
  Warnings: v.optional(v.array(v.string())),
});

export type EventActor = v.Output<typeof EventActor>;
export const EventActor = v.object({
  ID: v.optional(v.string()),
  Attributes: v.optional(v.unknown()),
});

export type EventMessage = v.Output<typeof EventMessage>;
export const EventMessage = v.object({
  Type: v.optional(
    v.union([
      v.literal("builder"),
      v.literal("config"),
      v.literal("container"),
      v.literal("daemon"),
      v.literal("image"),
      v.literal("network"),
      v.literal("node"),
      v.literal("plugin"),
      v.literal("secret"),
      v.literal("service"),
      v.literal("volume"),
    ]),
  ),
  Action: v.optional(v.string()),
  Actor: v.optional(EventActor),
  scope: v.optional(v.union([v.literal("local"), v.literal("swarm")])),
  time: v.optional(v.number()),
  timeNano: v.optional(v.number()),
});

export type OCIDescriptor = v.Output<typeof OCIDescriptor>;
export const OCIDescriptor = v.object({
  mediaType: v.optional(v.string()),
  digest: v.optional(v.string()),
  size: v.optional(v.number()),
});

export type OCIPlatform = v.Output<typeof OCIPlatform>;
export const OCIPlatform = v.object({
  architecture: v.optional(v.string()),
  os: v.optional(v.string()),
  "os.version": v.optional(v.string()),
  "os.features": v.optional(v.array(v.string())),
  variant: v.optional(v.string()),
});

export type DistributionInspect = v.Output<typeof DistributionInspect>;
export const DistributionInspect = v.object({
  Descriptor: OCIDescriptor,
  Platforms: v.array(OCIPlatform),
});

export type __ENDPOINTS_START__ = v.Output<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = v.object({});

export type get_ContainerList = v.Output<typeof get_ContainerList>;
export const get_ContainerList = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/json"),
  parameters: v.object({
    query: v.object({
      all: v.optional(v.boolean()),
      limit: v.optional(v.number()),
      size: v.optional(v.boolean()),
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(ContainerSummary),
});

export type post_ContainerCreate = v.Output<typeof post_ContainerCreate>;
export const post_ContainerCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/create"),
  parameters: v.object({
    query: v.object({
      name: v.optional(v.string()),
      platform: v.optional(v.string()),
    }),
    body: v.merge([
      ContainerConfig,
      v.object({
        HostConfig: v.optional(HostConfig),
        NetworkingConfig: v.optional(NetworkingConfig),
      }),
    ]),
  }),
  response: ContainerCreateResponse,
});

export type get_ContainerInspect = v.Output<typeof get_ContainerInspect>;
export const get_ContainerInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/json"),
  parameters: v.object({
    query: v.object({
      size: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.object({
    Id: v.optional(v.string()),
    Created: v.optional(v.string()),
    Path: v.optional(v.string()),
    Args: v.optional(v.array(v.string())),
    State: v.optional(ContainerState),
    Image: v.optional(v.string()),
    ResolvConfPath: v.optional(v.string()),
    HostnamePath: v.optional(v.string()),
    HostsPath: v.optional(v.string()),
    LogPath: v.optional(v.string()),
    Name: v.optional(v.string()),
    RestartCount: v.optional(v.number()),
    Driver: v.optional(v.string()),
    Platform: v.optional(v.string()),
    MountLabel: v.optional(v.string()),
    ProcessLabel: v.optional(v.string()),
    AppArmorProfile: v.optional(v.string()),
    ExecIDs: v.optional(v.union([v.array(v.string()), v.any(/* unsupported */)])),
    HostConfig: v.optional(HostConfig),
    GraphDriver: v.optional(GraphDriverData),
    SizeRw: v.optional(v.number()),
    SizeRootFs: v.optional(v.number()),
    Mounts: v.optional(v.array(MountPoint)),
    Config: v.optional(ContainerConfig),
    NetworkSettings: v.optional(NetworkSettings),
  }),
});

export type get_ContainerTop = v.Output<typeof get_ContainerTop>;
export const get_ContainerTop = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/top"),
  parameters: v.object({
    query: v.object({
      ps_args: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.object({
    Titles: v.optional(v.array(v.string())),
    Processes: v.optional(v.array(v.array(v.string()))),
  }),
});

export type get_ContainerLogs = v.Output<typeof get_ContainerLogs>;
export const get_ContainerLogs = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/logs"),
  parameters: v.object({
    query: v.object({
      follow: v.optional(v.boolean()),
      stdout: v.optional(v.boolean()),
      stderr: v.optional(v.boolean()),
      since: v.optional(v.number()),
      until: v.optional(v.number()),
      timestamps: v.optional(v.boolean()),
      tail: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ContainerChanges = v.Output<typeof get_ContainerChanges>;
export const get_ContainerChanges = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/changes"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.array(FilesystemChange),
});

export type get_ContainerExport = v.Output<typeof get_ContainerExport>;
export const get_ContainerExport = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/export"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ContainerStats = v.Output<typeof get_ContainerStats>;
export const get_ContainerStats = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/stats"),
  parameters: v.object({
    query: v.object({
      stream: v.optional(v.boolean()),
      "one-shot": v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerResize = v.Output<typeof post_ContainerResize>;
export const post_ContainerResize = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/resize"),
  parameters: v.object({
    query: v.object({
      h: v.optional(v.number()),
      w: v.optional(v.number()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerStart = v.Output<typeof post_ContainerStart>;
export const post_ContainerStart = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/start"),
  parameters: v.object({
    query: v.object({
      detachKeys: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerStop = v.Output<typeof post_ContainerStop>;
export const post_ContainerStop = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/stop"),
  parameters: v.object({
    query: v.object({
      signal: v.optional(v.string()),
      t: v.optional(v.number()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerRestart = v.Output<typeof post_ContainerRestart>;
export const post_ContainerRestart = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/restart"),
  parameters: v.object({
    query: v.object({
      signal: v.optional(v.string()),
      t: v.optional(v.number()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerKill = v.Output<typeof post_ContainerKill>;
export const post_ContainerKill = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/kill"),
  parameters: v.object({
    query: v.object({
      signal: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerUpdate = v.Output<typeof post_ContainerUpdate>;
export const post_ContainerUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/update"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
    body: v.merge([
      Resources,
      v.object({
        RestartPolicy: v.optional(RestartPolicy),
      }),
    ]),
  }),
  response: v.object({
    Warnings: v.optional(v.array(v.string())),
  }),
});

export type post_ContainerRename = v.Output<typeof post_ContainerRename>;
export const post_ContainerRename = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/rename"),
  parameters: v.object({
    query: v.object({
      name: v.string(),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerPause = v.Output<typeof post_ContainerPause>;
export const post_ContainerPause = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/pause"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerUnpause = v.Output<typeof post_ContainerUnpause>;
export const post_ContainerUnpause = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/unpause"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerAttach = v.Output<typeof post_ContainerAttach>;
export const post_ContainerAttach = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/attach"),
  parameters: v.object({
    query: v.object({
      detachKeys: v.optional(v.string()),
      logs: v.optional(v.boolean()),
      stream: v.optional(v.boolean()),
      stdin: v.optional(v.boolean()),
      stdout: v.optional(v.boolean()),
      stderr: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ContainerAttachWebsocket = v.Output<typeof get_ContainerAttachWebsocket>;
export const get_ContainerAttachWebsocket = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/attach/ws"),
  parameters: v.object({
    query: v.object({
      detachKeys: v.optional(v.string()),
      logs: v.optional(v.boolean()),
      stream: v.optional(v.boolean()),
      stdin: v.optional(v.boolean()),
      stdout: v.optional(v.boolean()),
      stderr: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerWait = v.Output<typeof post_ContainerWait>;
export const post_ContainerWait = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/wait"),
  parameters: v.object({
    query: v.object({
      condition: v.optional(v.union([v.literal("not-running"), v.literal("next-exit"), v.literal("removed")])),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: ContainerWaitResponse,
});

export type delete_ContainerDelete = v.Output<typeof delete_ContainerDelete>;
export const delete_ContainerDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/containers/{id}"),
  parameters: v.object({
    query: v.object({
      v: v.optional(v.boolean()),
      force: v.optional(v.boolean()),
      link: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ContainerArchive = v.Output<typeof get_ContainerArchive>;
export const get_ContainerArchive = v.object({
  method: v.literal("GET"),
  path: v.literal("/containers/{id}/archive"),
  parameters: v.object({
    query: v.object({
      path: v.string(),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type put_PutContainerArchive = v.Output<typeof put_PutContainerArchive>;
export const put_PutContainerArchive = v.object({
  method: v.literal("PUT"),
  path: v.literal("/containers/{id}/archive"),
  parameters: v.object({
    query: v.object({
      path: v.string(),
      noOverwriteDirNonDir: v.string(),
      copyUIDGID: v.string(),
    }),
    path: v.object({
      id: v.string(),
    }),
    body: v.string(),
  }),
  response: v.unknown(),
});

export type head_ContainerArchiveInfo = v.Output<typeof head_ContainerArchiveInfo>;
export const head_ContainerArchiveInfo = v.object({
  method: v.literal("HEAD"),
  path: v.literal("/containers/{id}/archive"),
  parameters: v.object({
    query: v.object({
      path: v.string(),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerPrune = v.Output<typeof post_ContainerPrune>;
export const post_ContainerPrune = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/prune"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.object({
    ContainersDeleted: v.optional(v.array(v.string())),
    SpaceReclaimed: v.optional(v.number()),
  }),
});

export type get_ImageList = v.Output<typeof get_ImageList>;
export const get_ImageList = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/json"),
  parameters: v.object({
    query: v.object({
      all: v.optional(v.boolean()),
      filters: v.optional(v.string()),
      "shared-size": v.optional(v.boolean()),
      digests: v.optional(v.boolean()),
    }),
  }),
  response: v.array(ImageSummary),
});

export type post_ImageBuild = v.Output<typeof post_ImageBuild>;
export const post_ImageBuild = v.object({
  method: v.literal("POST"),
  path: v.literal("/build"),
  parameters: v.object({
    query: v.object({
      dockerfile: v.optional(v.string()),
      t: v.optional(v.string()),
      extrahosts: v.optional(v.string()),
      remote: v.optional(v.string()),
      q: v.optional(v.boolean()),
      nocache: v.optional(v.boolean()),
      cachefrom: v.optional(v.string()),
      pull: v.optional(v.string()),
      rm: v.optional(v.boolean()),
      forcerm: v.optional(v.boolean()),
      memory: v.optional(v.number()),
      memswap: v.optional(v.number()),
      cpushares: v.optional(v.number()),
      cpusetcpus: v.optional(v.string()),
      cpuperiod: v.optional(v.number()),
      cpuquota: v.optional(v.number()),
      buildargs: v.optional(v.string()),
      shmsize: v.optional(v.number()),
      squash: v.optional(v.boolean()),
      labels: v.optional(v.string()),
      networkmode: v.optional(v.string()),
      platform: v.optional(v.string()),
      target: v.optional(v.string()),
      outputs: v.optional(v.string()),
    }),
    header: v.object({
      "Content-type": v.optional(v.literal("application/x-tar")),
      "X-Registry-Config": v.optional(v.string()),
    }),
    body: v.string(),
  }),
  response: v.unknown(),
});

export type post_BuildPrune = v.Output<typeof post_BuildPrune>;
export const post_BuildPrune = v.object({
  method: v.literal("POST"),
  path: v.literal("/build/prune"),
  parameters: v.object({
    query: v.object({
      "keep-storage": v.optional(v.number()),
      all: v.optional(v.boolean()),
      filters: v.optional(v.string()),
    }),
  }),
  response: v.object({
    CachesDeleted: v.optional(v.array(v.string())),
    SpaceReclaimed: v.optional(v.number()),
  }),
});

export type post_ImageCreate = v.Output<typeof post_ImageCreate>;
export const post_ImageCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/images/create"),
  parameters: v.object({
    query: v.object({
      fromImage: v.optional(v.string()),
      fromSrc: v.optional(v.string()),
      repo: v.optional(v.string()),
      tag: v.optional(v.string()),
      message: v.optional(v.string()),
      changes: v.optional(v.array(v.string())),
      platform: v.optional(v.string()),
    }),
    header: v.object({
      "X-Registry-Auth": v.optional(v.string()),
    }),
    body: v.string(),
  }),
  response: v.unknown(),
});

export type get_ImageInspect = v.Output<typeof get_ImageInspect>;
export const get_ImageInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/{name}/json"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: ImageInspect,
});

export type get_ImageHistory = v.Output<typeof get_ImageHistory>;
export const get_ImageHistory = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/{name}/history"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.array(
    v.object({
      Id: v.string(),
      Created: v.number(),
      CreatedBy: v.string(),
      Tags: v.array(v.string()),
      Size: v.number(),
      Comment: v.string(),
    }),
  ),
});

export type post_ImagePush = v.Output<typeof post_ImagePush>;
export const post_ImagePush = v.object({
  method: v.literal("POST"),
  path: v.literal("/images/{name}/push"),
  parameters: v.object({
    query: v.object({
      tag: v.optional(v.string()),
    }),
    path: v.object({
      name: v.string(),
    }),
    header: v.object({
      "X-Registry-Auth": v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ImageTag = v.Output<typeof post_ImageTag>;
export const post_ImageTag = v.object({
  method: v.literal("POST"),
  path: v.literal("/images/{name}/tag"),
  parameters: v.object({
    query: v.object({
      repo: v.optional(v.string()),
      tag: v.optional(v.string()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type delete_ImageDelete = v.Output<typeof delete_ImageDelete>;
export const delete_ImageDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/images/{name}"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
      noprune: v.optional(v.boolean()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.array(ImageDeleteResponseItem),
});

export type get_ImageSearch = v.Output<typeof get_ImageSearch>;
export const get_ImageSearch = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/search"),
  parameters: v.object({
    query: v.object({
      term: v.string(),
      limit: v.number(),
      filters: v.string(),
    }),
  }),
  response: v.array(
    v.object({
      description: v.optional(v.string()),
      is_official: v.optional(v.boolean()),
      is_automated: v.optional(v.boolean()),
      name: v.optional(v.string()),
      star_count: v.optional(v.number()),
    }),
  ),
});

export type post_ImagePrune = v.Output<typeof post_ImagePrune>;
export const post_ImagePrune = v.object({
  method: v.literal("POST"),
  path: v.literal("/images/prune"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.object({
    ImagesDeleted: v.optional(v.array(ImageDeleteResponseItem)),
    SpaceReclaimed: v.optional(v.number()),
  }),
});

export type post_SystemAuth = v.Output<typeof post_SystemAuth>;
export const post_SystemAuth = v.object({
  method: v.literal("POST"),
  path: v.literal("/auth"),
  parameters: v.object({
    body: AuthConfig,
  }),
  response: v.unknown(),
});

export type get_SystemInfo = v.Output<typeof get_SystemInfo>;
export const get_SystemInfo = v.object({
  method: v.literal("GET"),
  path: v.literal("/info"),
  parameters: v.never(),
  response: SystemInfo,
});

export type get_SystemVersion = v.Output<typeof get_SystemVersion>;
export const get_SystemVersion = v.object({
  method: v.literal("GET"),
  path: v.literal("/version"),
  parameters: v.never(),
  response: SystemVersion,
});

export type get_SystemPing = v.Output<typeof get_SystemPing>;
export const get_SystemPing = v.object({
  method: v.literal("GET"),
  path: v.literal("/_ping"),
  parameters: v.never(),
  response: v.unknown(),
});

export type head_SystemPingHead = v.Output<typeof head_SystemPingHead>;
export const head_SystemPingHead = v.object({
  method: v.literal("HEAD"),
  path: v.literal("/_ping"),
  parameters: v.never(),
  response: v.unknown(),
});

export type post_ImageCommit = v.Output<typeof post_ImageCommit>;
export const post_ImageCommit = v.object({
  method: v.literal("POST"),
  path: v.literal("/commit"),
  parameters: v.object({
    query: v.object({
      container: v.optional(v.string()),
      repo: v.optional(v.string()),
      tag: v.optional(v.string()),
      comment: v.optional(v.string()),
      author: v.optional(v.string()),
      pause: v.optional(v.boolean()),
      changes: v.optional(v.string()),
    }),
    body: ContainerConfig,
  }),
  response: IdResponse,
});

export type get_SystemEvents = v.Output<typeof get_SystemEvents>;
export const get_SystemEvents = v.object({
  method: v.literal("GET"),
  path: v.literal("/events"),
  parameters: v.object({
    query: v.object({
      since: v.optional(v.string()),
      until: v.optional(v.string()),
      filters: v.optional(v.string()),
    }),
  }),
  response: EventMessage,
});

export type get_SystemDataUsage = v.Output<typeof get_SystemDataUsage>;
export const get_SystemDataUsage = v.object({
  method: v.literal("GET"),
  path: v.literal("/system/df"),
  parameters: v.object({
    query: v.object({
      type: v.optional(
        v.array(v.union([v.literal("container"), v.literal("image"), v.literal("volume"), v.literal("build-cache")])),
      ),
    }),
  }),
  response: v.object({
    LayersSize: v.optional(v.number()),
    Images: v.optional(v.array(ImageSummary)),
    Containers: v.optional(v.array(ContainerSummary)),
    Volumes: v.optional(v.array(Volume)),
    BuildCache: v.optional(v.array(BuildCache)),
  }),
});

export type get_ImageGet = v.Output<typeof get_ImageGet>;
export const get_ImageGet = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/{name}/get"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ImageGetAll = v.Output<typeof get_ImageGetAll>;
export const get_ImageGetAll = v.object({
  method: v.literal("GET"),
  path: v.literal("/images/get"),
  parameters: v.object({
    query: v.object({
      names: v.optional(v.array(v.string())),
    }),
  }),
  response: v.unknown(),
});

export type post_ImageLoad = v.Output<typeof post_ImageLoad>;
export const post_ImageLoad = v.object({
  method: v.literal("POST"),
  path: v.literal("/images/load"),
  parameters: v.object({
    query: v.object({
      quiet: v.optional(v.boolean()),
    }),
  }),
  response: v.unknown(),
});

export type post_ContainerExec = v.Output<typeof post_ContainerExec>;
export const post_ContainerExec = v.object({
  method: v.literal("POST"),
  path: v.literal("/containers/{id}/exec"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
    body: v.object({
      AttachStdin: v.optional(v.boolean()),
      AttachStdout: v.optional(v.boolean()),
      AttachStderr: v.optional(v.boolean()),
      ConsoleSize: v.optional(v.union([v.array(v.number()), v.any(/* unsupported */)])),
      DetachKeys: v.optional(v.string()),
      Tty: v.optional(v.boolean()),
      Env: v.optional(v.array(v.string())),
      Cmd: v.optional(v.array(v.string())),
      Privileged: v.optional(v.boolean()),
      User: v.optional(v.string()),
      WorkingDir: v.optional(v.string()),
    }),
  }),
  response: IdResponse,
});

export type post_ExecStart = v.Output<typeof post_ExecStart>;
export const post_ExecStart = v.object({
  method: v.literal("POST"),
  path: v.literal("/exec/{id}/start"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
    body: v.object({
      Detach: v.optional(v.boolean()),
      Tty: v.optional(v.boolean()),
      ConsoleSize: v.optional(v.union([v.array(v.number()), v.any(/* unsupported */)])),
    }),
  }),
  response: v.unknown(),
});

export type post_ExecResize = v.Output<typeof post_ExecResize>;
export const post_ExecResize = v.object({
  method: v.literal("POST"),
  path: v.literal("/exec/{id}/resize"),
  parameters: v.object({
    query: v.object({
      h: v.optional(v.number()),
      w: v.optional(v.number()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_ExecInspect = v.Output<typeof get_ExecInspect>;
export const get_ExecInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/exec/{id}/json"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.object({
    CanRemove: v.optional(v.boolean()),
    DetachKeys: v.optional(v.string()),
    ID: v.optional(v.string()),
    Running: v.optional(v.boolean()),
    ExitCode: v.optional(v.number()),
    ProcessConfig: v.optional(ProcessConfig),
    OpenStdin: v.optional(v.boolean()),
    OpenStderr: v.optional(v.boolean()),
    OpenStdout: v.optional(v.boolean()),
    ContainerID: v.optional(v.string()),
    Pid: v.optional(v.number()),
  }),
});

export type get_VolumeList = v.Output<typeof get_VolumeList>;
export const get_VolumeList = v.object({
  method: v.literal("GET"),
  path: v.literal("/volumes"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: VolumeListResponse,
});

export type post_VolumeCreate = v.Output<typeof post_VolumeCreate>;
export const post_VolumeCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/volumes/create"),
  parameters: v.object({
    body: VolumeCreateOptions,
  }),
  response: Volume,
});

export type get_VolumeInspect = v.Output<typeof get_VolumeInspect>;
export const get_VolumeInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/volumes/{name}"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: Volume,
});

export type put_VolumeUpdate = v.Output<typeof put_VolumeUpdate>;
export const put_VolumeUpdate = v.object({
  method: v.literal("PUT"),
  path: v.literal("/volumes/{name}"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
    }),
    path: v.object({
      name: v.string(),
    }),
    body: v.object({
      Spec: v.optional(ClusterVolumeSpec),
    }),
  }),
  response: v.unknown(),
});

export type delete_VolumeDelete = v.Output<typeof delete_VolumeDelete>;
export const delete_VolumeDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/volumes/{name}"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_VolumePrune = v.Output<typeof post_VolumePrune>;
export const post_VolumePrune = v.object({
  method: v.literal("POST"),
  path: v.literal("/volumes/prune"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.object({
    VolumesDeleted: v.optional(v.array(v.string())),
    SpaceReclaimed: v.optional(v.number()),
  }),
});

export type get_NetworkList = v.Output<typeof get_NetworkList>;
export const get_NetworkList = v.object({
  method: v.literal("GET"),
  path: v.literal("/networks"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Network),
});

export type get_NetworkInspect = v.Output<typeof get_NetworkInspect>;
export const get_NetworkInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/networks/{id}"),
  parameters: v.object({
    query: v.object({
      verbose: v.optional(v.boolean()),
      scope: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Network,
});

export type delete_NetworkDelete = v.Output<typeof delete_NetworkDelete>;
export const delete_NetworkDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/networks/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_NetworkCreate = v.Output<typeof post_NetworkCreate>;
export const post_NetworkCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/networks/create"),
  parameters: v.object({
    body: v.object({
      Name: v.string(),
      CheckDuplicate: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      Driver: v.optional(v.union([v.string(), v.any(/* unsupported */)])),
      Internal: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      Attachable: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      Ingress: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      IPAM: v.optional(v.union([IPAM, v.any(/* unsupported */)])),
      EnableIPv6: v.optional(v.union([v.boolean(), v.any(/* unsupported */)])),
      Options: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
      Labels: v.optional(v.union([v.unknown(), v.any(/* unsupported */)])),
    }),
  }),
  response: v.object({
    Id: v.optional(v.string()),
    Warning: v.optional(v.string()),
  }),
});

export type post_NetworkConnect = v.Output<typeof post_NetworkConnect>;
export const post_NetworkConnect = v.object({
  method: v.literal("POST"),
  path: v.literal("/networks/{id}/connect"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
    body: v.object({
      Container: v.optional(v.string()),
      EndpointConfig: v.optional(EndpointSettings),
    }),
  }),
  response: v.unknown(),
});

export type post_NetworkDisconnect = v.Output<typeof post_NetworkDisconnect>;
export const post_NetworkDisconnect = v.object({
  method: v.literal("POST"),
  path: v.literal("/networks/{id}/disconnect"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
    body: v.object({
      Container: v.optional(v.string()),
      Force: v.optional(v.boolean()),
    }),
  }),
  response: v.unknown(),
});

export type post_NetworkPrune = v.Output<typeof post_NetworkPrune>;
export const post_NetworkPrune = v.object({
  method: v.literal("POST"),
  path: v.literal("/networks/prune"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.object({
    NetworksDeleted: v.optional(v.array(v.string())),
  }),
});

export type get_PluginList = v.Output<typeof get_PluginList>;
export const get_PluginList = v.object({
  method: v.literal("GET"),
  path: v.literal("/plugins"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Plugin),
});

export type get_GetPluginPrivileges = v.Output<typeof get_GetPluginPrivileges>;
export const get_GetPluginPrivileges = v.object({
  method: v.literal("GET"),
  path: v.literal("/plugins/privileges"),
  parameters: v.object({
    query: v.object({
      remote: v.string(),
    }),
  }),
  response: v.array(PluginPrivilege),
});

export type post_PluginPull = v.Output<typeof post_PluginPull>;
export const post_PluginPull = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/pull"),
  parameters: v.object({
    query: v.object({
      remote: v.string(),
      name: v.string(),
    }),
    header: v.object({
      "X-Registry-Auth": v.optional(v.string()),
    }),
    body: v.array(PluginPrivilege),
  }),
  response: v.unknown(),
});

export type get_PluginInspect = v.Output<typeof get_PluginInspect>;
export const get_PluginInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/plugins/{name}/json"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: Plugin,
});

export type delete_PluginDelete = v.Output<typeof delete_PluginDelete>;
export const delete_PluginDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/plugins/{name}"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: Plugin,
});

export type post_PluginEnable = v.Output<typeof post_PluginEnable>;
export const post_PluginEnable = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/enable"),
  parameters: v.object({
    query: v.object({
      timeout: v.optional(v.number()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_PluginDisable = v.Output<typeof post_PluginDisable>;
export const post_PluginDisable = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/disable"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
    }),
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_PluginUpgrade = v.Output<typeof post_PluginUpgrade>;
export const post_PluginUpgrade = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/upgrade"),
  parameters: v.object({
    query: v.object({
      remote: v.string(),
    }),
    path: v.object({
      name: v.string(),
    }),
    header: v.object({
      "X-Registry-Auth": v.optional(v.string()),
    }),
    body: v.array(PluginPrivilege),
  }),
  response: v.unknown(),
});

export type post_PluginCreate = v.Output<typeof post_PluginCreate>;
export const post_PluginCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/create"),
  parameters: v.object({
    query: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_PluginPush = v.Output<typeof post_PluginPush>;
export const post_PluginPush = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/push"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_PluginSet = v.Output<typeof post_PluginSet>;
export const post_PluginSet = v.object({
  method: v.literal("POST"),
  path: v.literal("/plugins/{name}/set"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
    body: v.array(v.string()),
  }),
  response: v.unknown(),
});

export type get_NodeList = v.Output<typeof get_NodeList>;
export const get_NodeList = v.object({
  method: v.literal("GET"),
  path: v.literal("/nodes"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Node),
});

export type get_NodeInspect = v.Output<typeof get_NodeInspect>;
export const get_NodeInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/nodes/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Node,
});

export type delete_NodeDelete = v.Output<typeof delete_NodeDelete>;
export const delete_NodeDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/nodes/{id}"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_NodeUpdate = v.Output<typeof post_NodeUpdate>;
export const post_NodeUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/nodes/{id}/update"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
    }),
    path: v.object({
      id: v.string(),
    }),
    body: NodeSpec,
  }),
  response: v.unknown(),
});

export type get_SwarmInspect = v.Output<typeof get_SwarmInspect>;
export const get_SwarmInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/swarm"),
  parameters: v.never(),
  response: Swarm,
});

export type post_SwarmInit = v.Output<typeof post_SwarmInit>;
export const post_SwarmInit = v.object({
  method: v.literal("POST"),
  path: v.literal("/swarm/init"),
  parameters: v.object({
    body: v.object({
      ListenAddr: v.optional(v.string()),
      AdvertiseAddr: v.optional(v.string()),
      DataPathAddr: v.optional(v.string()),
      DataPathPort: v.optional(v.number()),
      DefaultAddrPool: v.optional(v.array(v.string())),
      ForceNewCluster: v.optional(v.boolean()),
      SubnetSize: v.optional(v.number()),
      Spec: v.optional(SwarmSpec),
    }),
  }),
  response: v.string(),
});

export type post_SwarmJoin = v.Output<typeof post_SwarmJoin>;
export const post_SwarmJoin = v.object({
  method: v.literal("POST"),
  path: v.literal("/swarm/join"),
  parameters: v.object({
    body: v.object({
      ListenAddr: v.optional(v.string()),
      AdvertiseAddr: v.optional(v.string()),
      DataPathAddr: v.optional(v.string()),
      RemoteAddrs: v.optional(v.array(v.string())),
      JoinToken: v.optional(v.string()),
    }),
  }),
  response: v.unknown(),
});

export type post_SwarmLeave = v.Output<typeof post_SwarmLeave>;
export const post_SwarmLeave = v.object({
  method: v.literal("POST"),
  path: v.literal("/swarm/leave"),
  parameters: v.object({
    query: v.object({
      force: v.optional(v.boolean()),
    }),
  }),
  response: v.unknown(),
});

export type post_SwarmUpdate = v.Output<typeof post_SwarmUpdate>;
export const post_SwarmUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/swarm/update"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
      rotateWorkerToken: v.boolean(),
      rotateManagerToken: v.boolean(),
      rotateManagerUnlockKey: v.boolean(),
    }),
    body: SwarmSpec,
  }),
  response: v.unknown(),
});

export type get_SwarmUnlockkey = v.Output<typeof get_SwarmUnlockkey>;
export const get_SwarmUnlockkey = v.object({
  method: v.literal("GET"),
  path: v.literal("/swarm/unlockkey"),
  parameters: v.never(),
  response: v.object({
    UnlockKey: v.optional(v.string()),
  }),
});

export type post_SwarmUnlock = v.Output<typeof post_SwarmUnlock>;
export const post_SwarmUnlock = v.object({
  method: v.literal("POST"),
  path: v.literal("/swarm/unlock"),
  parameters: v.object({
    body: v.object({
      UnlockKey: v.optional(v.string()),
    }),
  }),
  response: v.unknown(),
});

export type get_ServiceList = v.Output<typeof get_ServiceList>;
export const get_ServiceList = v.object({
  method: v.literal("GET"),
  path: v.literal("/services"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
      status: v.optional(v.boolean()),
    }),
  }),
  response: v.array(Service),
});

export type post_ServiceCreate = v.Output<typeof post_ServiceCreate>;
export const post_ServiceCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/services/create"),
  parameters: v.object({
    header: v.object({
      "X-Registry-Auth": v.optional(v.string()),
    }),
    body: v.merge([ServiceSpec, v.unknown()]),
  }),
  response: v.object({
    ID: v.optional(v.string()),
    Warning: v.optional(v.string()),
  }),
});

export type get_ServiceInspect = v.Output<typeof get_ServiceInspect>;
export const get_ServiceInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/services/{id}"),
  parameters: v.object({
    query: v.object({
      insertDefaults: v.optional(v.boolean()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Service,
});

export type delete_ServiceDelete = v.Output<typeof delete_ServiceDelete>;
export const delete_ServiceDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/services/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ServiceUpdate = v.Output<typeof post_ServiceUpdate>;
export const post_ServiceUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/services/{id}/update"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
      registryAuthFrom: v.union([v.literal("spec"), v.literal("previous-spec")]),
      rollback: v.string(),
    }),
    path: v.object({
      id: v.string(),
    }),
    header: v.object({
      "X-Registry-Auth": v.optional(v.string()),
    }),
    body: v.merge([ServiceSpec, v.unknown()]),
  }),
  response: ServiceUpdateResponse,
});

export type get_ServiceLogs = v.Output<typeof get_ServiceLogs>;
export const get_ServiceLogs = v.object({
  method: v.literal("GET"),
  path: v.literal("/services/{id}/logs"),
  parameters: v.object({
    query: v.object({
      details: v.optional(v.boolean()),
      follow: v.optional(v.boolean()),
      stdout: v.optional(v.boolean()),
      stderr: v.optional(v.boolean()),
      since: v.optional(v.number()),
      timestamps: v.optional(v.boolean()),
      tail: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_TaskList = v.Output<typeof get_TaskList>;
export const get_TaskList = v.object({
  method: v.literal("GET"),
  path: v.literal("/tasks"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Task),
});

export type get_TaskInspect = v.Output<typeof get_TaskInspect>;
export const get_TaskInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/tasks/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Task,
});

export type get_TaskLogs = v.Output<typeof get_TaskLogs>;
export const get_TaskLogs = v.object({
  method: v.literal("GET"),
  path: v.literal("/tasks/{id}/logs"),
  parameters: v.object({
    query: v.object({
      details: v.optional(v.boolean()),
      follow: v.optional(v.boolean()),
      stdout: v.optional(v.boolean()),
      stderr: v.optional(v.boolean()),
      since: v.optional(v.number()),
      timestamps: v.optional(v.boolean()),
      tail: v.optional(v.string()),
    }),
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type get_SecretList = v.Output<typeof get_SecretList>;
export const get_SecretList = v.object({
  method: v.literal("GET"),
  path: v.literal("/secrets"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Secret),
});

export type post_SecretCreate = v.Output<typeof post_SecretCreate>;
export const post_SecretCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/secrets/create"),
  parameters: v.object({
    body: v.merge([SecretSpec, v.unknown()]),
  }),
  response: IdResponse,
});

export type get_SecretInspect = v.Output<typeof get_SecretInspect>;
export const get_SecretInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/secrets/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Secret,
});

export type delete_SecretDelete = v.Output<typeof delete_SecretDelete>;
export const delete_SecretDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/secrets/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_SecretUpdate = v.Output<typeof post_SecretUpdate>;
export const post_SecretUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/secrets/{id}/update"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
    }),
    path: v.object({
      id: v.string(),
    }),
    body: SecretSpec,
  }),
  response: v.unknown(),
});

export type get_ConfigList = v.Output<typeof get_ConfigList>;
export const get_ConfigList = v.object({
  method: v.literal("GET"),
  path: v.literal("/configs"),
  parameters: v.object({
    query: v.object({
      filters: v.optional(v.string()),
    }),
  }),
  response: v.array(Config),
});

export type post_ConfigCreate = v.Output<typeof post_ConfigCreate>;
export const post_ConfigCreate = v.object({
  method: v.literal("POST"),
  path: v.literal("/configs/create"),
  parameters: v.object({
    body: v.merge([ConfigSpec, v.unknown()]),
  }),
  response: IdResponse,
});

export type get_ConfigInspect = v.Output<typeof get_ConfigInspect>;
export const get_ConfigInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/configs/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: Config,
});

export type delete_ConfigDelete = v.Output<typeof delete_ConfigDelete>;
export const delete_ConfigDelete = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/configs/{id}"),
  parameters: v.object({
    path: v.object({
      id: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type post_ConfigUpdate = v.Output<typeof post_ConfigUpdate>;
export const post_ConfigUpdate = v.object({
  method: v.literal("POST"),
  path: v.literal("/configs/{id}/update"),
  parameters: v.object({
    query: v.object({
      version: v.number(),
    }),
    path: v.object({
      id: v.string(),
    }),
    body: ConfigSpec,
  }),
  response: v.unknown(),
});

export type get_DistributionInspect = v.Output<typeof get_DistributionInspect>;
export const get_DistributionInspect = v.object({
  method: v.literal("GET"),
  path: v.literal("/distribution/{name}/json"),
  parameters: v.object({
    path: v.object({
      name: v.string(),
    }),
  }),
  response: DistributionInspect,
});

export type post_Session = v.Output<typeof post_Session>;
export const post_Session = v.object({
  method: v.literal("POST"),
  path: v.literal("/session"),
  parameters: v.never(),
  response: v.unknown(),
});

export type __ENDPOINTS_END__ = v.Output<typeof __ENDPOINTS_END__>;
export const __ENDPOINTS_END__ = v.object({});

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
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("head", this.baseUrl + path, params[0]);
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
