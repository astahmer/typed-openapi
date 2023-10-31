import { Type, Static } from "@sinclair/typebox";

export type Port = Static<typeof Port>;
export const Port = Type.Object({
  IP: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
  PrivatePort: Type.Number(),
  PublicPort: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
  Type: Type.Union([Type.Literal("tcp"), Type.Literal("udp"), Type.Literal("sctp")]),
});

export type MountPoint = Static<typeof MountPoint>;
export const MountPoint = Type.Partial(
  Type.Object({
    Type: Type.Union([
      Type.Literal("bind"),
      Type.Literal("volume"),
      Type.Literal("tmpfs"),
      Type.Literal("npipe"),
      Type.Literal("cluster"),
    ]),
    Name: Type.String(),
    Source: Type.String(),
    Destination: Type.String(),
    Driver: Type.String(),
    Mode: Type.String(),
    RW: Type.Boolean(),
    Propagation: Type.String(),
  }),
);

export type DeviceMapping = Static<typeof DeviceMapping>;
export const DeviceMapping = Type.Partial(
  Type.Object({
    PathOnHost: Type.String(),
    PathInContainer: Type.String(),
    CgroupPermissions: Type.String(),
  }),
);

export type DeviceRequest = Static<typeof DeviceRequest>;
export const DeviceRequest = Type.Partial(
  Type.Object({
    Driver: Type.String(),
    Count: Type.Number(),
    DeviceIDs: Type.Array(Type.String()),
    Capabilities: Type.Array(Type.Array(Type.String())),
    Options: Type.Unknown(),
  }),
);

export type ThrottleDevice = Static<typeof ThrottleDevice>;
export const ThrottleDevice = Type.Partial(
  Type.Object({
    Path: Type.String(),
    Rate: Type.Number(),
  }),
);

export type Mount = Static<typeof Mount>;
export const Mount = Type.Partial(
  Type.Object({
    Target: Type.String(),
    Source: Type.String(),
    Type: Type.Union([
      Type.Literal("bind"),
      Type.Literal("volume"),
      Type.Literal("tmpfs"),
      Type.Literal("npipe"),
      Type.Literal("cluster"),
    ]),
    ReadOnly: Type.Boolean(),
    Consistency: Type.String(),
    BindOptions: Type.Partial(
      Type.Object({
        Propagation: Type.Union([
          Type.Literal("private"),
          Type.Literal("rprivate"),
          Type.Literal("shared"),
          Type.Literal("rshared"),
          Type.Literal("slave"),
          Type.Literal("rslave"),
        ]),
        NonRecursive: Type.Boolean(),
        CreateMountpoint: Type.Boolean(),
      }),
    ),
    VolumeOptions: Type.Partial(
      Type.Object({
        NoCopy: Type.Boolean(),
        Labels: Type.Unknown(),
        DriverConfig: Type.Partial(
          Type.Object({
            Name: Type.String(),
            Options: Type.Unknown(),
          }),
        ),
      }),
    ),
    TmpfsOptions: Type.Partial(
      Type.Object({
        SizeBytes: Type.Number(),
        Mode: Type.Number(),
      }),
    ),
  }),
);

export type RestartPolicy = Static<typeof RestartPolicy>;
export const RestartPolicy = Type.Partial(
  Type.Object({
    Name: Type.Union([
      Type.Literal(""),
      Type.Literal("no"),
      Type.Literal("always"),
      Type.Literal("unless-stopped"),
      Type.Literal("on-failure"),
    ]),
    MaximumRetryCount: Type.Number(),
  }),
);

export type Resources = Static<typeof Resources>;
export const Resources = Type.Partial(
  Type.Object({
    CpuShares: Type.Number(),
    Memory: Type.Number(),
    CgroupParent: Type.String(),
    BlkioWeight: Type.Number(),
    BlkioWeightDevice: Type.Array(
      Type.Partial(
        Type.Object({
          Path: Type.String(),
          Weight: Type.Number(),
        }),
      ),
    ),
    BlkioDeviceReadBps: Type.Array(ThrottleDevice),
    BlkioDeviceWriteBps: Type.Array(ThrottleDevice),
    BlkioDeviceReadIOps: Type.Array(ThrottleDevice),
    BlkioDeviceWriteIOps: Type.Array(ThrottleDevice),
    CpuPeriod: Type.Number(),
    CpuQuota: Type.Number(),
    CpuRealtimePeriod: Type.Number(),
    CpuRealtimeRuntime: Type.Number(),
    CpusetCpus: Type.String(),
    CpusetMems: Type.String(),
    Devices: Type.Array(DeviceMapping),
    DeviceCgroupRules: Type.Array(Type.String()),
    DeviceRequests: Type.Array(DeviceRequest),
    KernelMemoryTCP: Type.Number(),
    MemoryReservation: Type.Number(),
    MemorySwap: Type.Number(),
    MemorySwappiness: Type.Number(),
    NanoCpus: Type.Number(),
    OomKillDisable: Type.Boolean(),
    Init: Type.Union([Type.Boolean(), Type.Null()]),
    PidsLimit: Type.Union([Type.Number(), Type.Null()]),
    Ulimits: Type.Array(
      Type.Partial(
        Type.Object({
          Name: Type.String(),
          Soft: Type.Number(),
          Hard: Type.Number(),
        }),
      ),
    ),
    CpuCount: Type.Number(),
    CpuPercent: Type.Number(),
    IOMaximumIOps: Type.Number(),
    IOMaximumBandwidth: Type.Number(),
  }),
);

export type Limit = Static<typeof Limit>;
export const Limit = Type.Partial(
  Type.Object({
    NanoCPUs: Type.Number(),
    MemoryBytes: Type.Number(),
    Pids: Type.Number(),
  }),
);

export type GenericResources = Static<typeof GenericResources>;
export const GenericResources = Type.Array(
  Type.Partial(
    Type.Object({
      NamedResourceSpec: Type.Partial(
        Type.Object({
          Kind: Type.String(),
          Value: Type.String(),
        }),
      ),
      DiscreteResourceSpec: Type.Partial(
        Type.Object({
          Kind: Type.String(),
          Value: Type.Number(),
        }),
      ),
    }),
  ),
);

export type ResourceObject = Static<typeof ResourceObject>;
export const ResourceObject = Type.Partial(
  Type.Object({
    NanoCPUs: Type.Number(),
    MemoryBytes: Type.Number(),
    GenericResources: GenericResources,
  }),
);

export type HealthConfig = Static<typeof HealthConfig>;
export const HealthConfig = Type.Partial(
  Type.Object({
    Test: Type.Array(Type.String()),
    Interval: Type.Number(),
    Timeout: Type.Number(),
    Retries: Type.Number(),
    StartPeriod: Type.Number(),
  }),
);

export type HealthcheckResult = Static<typeof HealthcheckResult>;
export const HealthcheckResult = Type.Union([
  Type.Partial(
    Type.Object({
      Start: Type.String(),
      End: Type.String(),
      ExitCode: Type.Number(),
      Output: Type.String(),
    }),
  ),
  Type.Null(),
]);

export type Health = Static<typeof Health>;
export const Health = Type.Union([
  Type.Partial(
    Type.Object({
      Status: Type.Union([
        Type.Literal("none"),
        Type.Literal("starting"),
        Type.Literal("healthy"),
        Type.Literal("unhealthy"),
      ]),
      FailingStreak: Type.Number(),
      Log: Type.Array(HealthcheckResult),
    }),
  ),
  Type.Null(),
]);

export type PortBinding = Static<typeof PortBinding>;
export const PortBinding = Type.Partial(
  Type.Object({
    HostIp: Type.String(),
    HostPort: Type.String(),
  }),
);

export type PortMap = Static<typeof PortMap>;
export const PortMap = Type.Unknown();

export type HostConfig = Static<typeof HostConfig>;
export const HostConfig = Type.Intersect([
  Resources,
  Type.Partial(
    Type.Object({
      Binds: Type.Array(Type.String()),
      ContainerIDFile: Type.String(),
      LogConfig: Type.Partial(
        Type.Object({
          Type: Type.Union([
            Type.Literal("json-file"),
            Type.Literal("syslog"),
            Type.Literal("journald"),
            Type.Literal("gelf"),
            Type.Literal("fluentd"),
            Type.Literal("awslogs"),
            Type.Literal("splunk"),
            Type.Literal("etwlogs"),
            Type.Literal("none"),
          ]),
          Config: Type.Unknown(),
        }),
      ),
      NetworkMode: Type.String(),
      PortBindings: PortMap,
      RestartPolicy: RestartPolicy,
      AutoRemove: Type.Boolean(),
      VolumeDriver: Type.String(),
      VolumesFrom: Type.Array(Type.String()),
      Mounts: Type.Array(Mount),
      ConsoleSize: Type.Union([Type.Array(Type.Number()), Type.Null()]),
      Annotations: Type.Unknown(),
      CapAdd: Type.Array(Type.String()),
      CapDrop: Type.Array(Type.String()),
      CgroupnsMode: Type.Union([Type.Literal("private"), Type.Literal("host")]),
      Dns: Type.Array(Type.String()),
      DnsOptions: Type.Array(Type.String()),
      DnsSearch: Type.Array(Type.String()),
      ExtraHosts: Type.Array(Type.String()),
      GroupAdd: Type.Array(Type.String()),
      IpcMode: Type.String(),
      Cgroup: Type.String(),
      Links: Type.Array(Type.String()),
      OomScoreAdj: Type.Number(),
      PidMode: Type.String(),
      Privileged: Type.Boolean(),
      PublishAllPorts: Type.Boolean(),
      ReadonlyRootfs: Type.Boolean(),
      SecurityOpt: Type.Array(Type.String()),
      StorageOpt: Type.Unknown(),
      Tmpfs: Type.Unknown(),
      UTSMode: Type.String(),
      UsernsMode: Type.String(),
      ShmSize: Type.Number(),
      Sysctls: Type.Unknown(),
      Runtime: Type.String(),
      Isolation: Type.Union([Type.Literal("default"), Type.Literal("process"), Type.Literal("hyperv")]),
      MaskedPaths: Type.Array(Type.String()),
      ReadonlyPaths: Type.Array(Type.String()),
    }),
  ),
]);

export type ContainerConfig = Static<typeof ContainerConfig>;
export const ContainerConfig = Type.Partial(
  Type.Object({
    Hostname: Type.String(),
    Domainname: Type.String(),
    User: Type.String(),
    AttachStdin: Type.Boolean(),
    AttachStdout: Type.Boolean(),
    AttachStderr: Type.Boolean(),
    ExposedPorts: Type.Union([Type.Unknown(), Type.Null()]),
    Tty: Type.Boolean(),
    OpenStdin: Type.Boolean(),
    StdinOnce: Type.Boolean(),
    Env: Type.Array(Type.String()),
    Cmd: Type.Array(Type.String()),
    Healthcheck: HealthConfig,
    ArgsEscaped: Type.Union([Type.Boolean(), Type.Null()]),
    Image: Type.String(),
    Volumes: Type.Unknown(),
    WorkingDir: Type.String(),
    Entrypoint: Type.Array(Type.String()),
    NetworkDisabled: Type.Union([Type.Boolean(), Type.Null()]),
    MacAddress: Type.Union([Type.String(), Type.Null()]),
    OnBuild: Type.Union([Type.Array(Type.String()), Type.Null()]),
    Labels: Type.Unknown(),
    StopSignal: Type.Union([Type.String(), Type.Null()]),
    StopTimeout: Type.Union([Type.Number(), Type.Null()]),
    Shell: Type.Union([Type.Array(Type.String()), Type.Null()]),
  }),
);

export type EndpointIPAMConfig = Static<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = Type.Union([
  Type.Partial(
    Type.Object({
      IPv4Address: Type.String(),
      IPv6Address: Type.String(),
      LinkLocalIPs: Type.Array(Type.String()),
    }),
  ),
  Type.Null(),
]);

export type EndpointSettings = Static<typeof EndpointSettings>;
export const EndpointSettings = Type.Partial(
  Type.Object({
    IPAMConfig: EndpointIPAMConfig,
    Links: Type.Array(Type.String()),
    Aliases: Type.Array(Type.String()),
    NetworkID: Type.String(),
    EndpointID: Type.String(),
    Gateway: Type.String(),
    IPAddress: Type.String(),
    IPPrefixLen: Type.Number(),
    IPv6Gateway: Type.String(),
    GlobalIPv6Address: Type.String(),
    GlobalIPv6PrefixLen: Type.Number(),
    MacAddress: Type.String(),
    DriverOpts: Type.Union([Type.Unknown(), Type.Null()]),
  }),
);

export type NetworkingConfig = Static<typeof NetworkingConfig>;
export const NetworkingConfig = Type.Partial(
  Type.Object({
    EndpointsConfig: Type.Unknown(),
  }),
);

export type Address = Static<typeof Address>;
export const Address = Type.Partial(
  Type.Object({
    Addr: Type.String(),
    PrefixLen: Type.Number(),
  }),
);

export type NetworkSettings = Static<typeof NetworkSettings>;
export const NetworkSettings = Type.Partial(
  Type.Object({
    Bridge: Type.String(),
    SandboxID: Type.String(),
    HairpinMode: Type.Boolean(),
    LinkLocalIPv6Address: Type.String(),
    LinkLocalIPv6PrefixLen: Type.Number(),
    Ports: PortMap,
    SandboxKey: Type.String(),
    SecondaryIPAddresses: Type.Union([Type.Array(Address), Type.Null()]),
    SecondaryIPv6Addresses: Type.Union([Type.Array(Address), Type.Null()]),
    EndpointID: Type.String(),
    Gateway: Type.String(),
    GlobalIPv6Address: Type.String(),
    GlobalIPv6PrefixLen: Type.Number(),
    IPAddress: Type.String(),
    IPPrefixLen: Type.Number(),
    IPv6Gateway: Type.String(),
    MacAddress: Type.String(),
    Networks: Type.Unknown(),
  }),
);

export type GraphDriverData = Static<typeof GraphDriverData>;
export const GraphDriverData = Type.Object({
  Name: Type.String(),
  Data: Type.Unknown(),
});

export type ChangeType = Static<typeof ChangeType>;
export const ChangeType = Type.Union([Type.Literal(0), Type.Literal(1), Type.Literal(2)]);

export type FilesystemChange = Static<typeof FilesystemChange>;
export const FilesystemChange = Type.Object({
  Path: Type.String(),
  Kind: ChangeType,
});

export type ImageInspect = Static<typeof ImageInspect>;
export const ImageInspect = Type.Partial(
  Type.Object({
    Id: Type.String(),
    RepoTags: Type.Array(Type.String()),
    RepoDigests: Type.Array(Type.String()),
    Parent: Type.String(),
    Comment: Type.String(),
    Created: Type.String(),
    Container: Type.String(),
    ContainerConfig: ContainerConfig,
    DockerVersion: Type.String(),
    Author: Type.String(),
    Config: ContainerConfig,
    Architecture: Type.String(),
    Variant: Type.Union([Type.String(), Type.Null()]),
    Os: Type.String(),
    OsVersion: Type.Union([Type.String(), Type.Null()]),
    Size: Type.Number(),
    VirtualSize: Type.Number(),
    GraphDriver: GraphDriverData,
    RootFS: Type.Object({
      Type: Type.String(),
      Layers: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Undefined()])),
    }),
    Metadata: Type.Partial(
      Type.Object({
        LastTagTime: Type.Union([Type.String(), Type.Null()]),
      }),
    ),
  }),
);

export type ImageSummary = Static<typeof ImageSummary>;
export const ImageSummary = Type.Object({
  Id: Type.String(),
  ParentId: Type.String(),
  RepoTags: Type.Array(Type.String()),
  RepoDigests: Type.Array(Type.String()),
  Created: Type.Number(),
  Size: Type.Number(),
  SharedSize: Type.Number(),
  VirtualSize: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
  Labels: Type.Unknown(),
  Containers: Type.Number(),
});

export type AuthConfig = Static<typeof AuthConfig>;
export const AuthConfig = Type.Partial(
  Type.Object({
    username: Type.String(),
    password: Type.String(),
    email: Type.String(),
    serveraddress: Type.String(),
  }),
);

export type ProcessConfig = Static<typeof ProcessConfig>;
export const ProcessConfig = Type.Partial(
  Type.Object({
    privileged: Type.Boolean(),
    user: Type.String(),
    tty: Type.Boolean(),
    entrypoint: Type.String(),
    arguments: Type.Array(Type.String()),
  }),
);

export type ObjectVersion = Static<typeof ObjectVersion>;
export const ObjectVersion = Type.Partial(
  Type.Object({
    Index: Type.Number(),
  }),
);

export type Topology = Static<typeof Topology>;
export const Topology = Type.Unknown();

export type ClusterVolumeSpec = Static<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = Type.Partial(
  Type.Object({
    Group: Type.String(),
    AccessMode: Type.Partial(
      Type.Object({
        Scope: Type.Union([Type.Literal("single"), Type.Literal("multi")]),
        Sharing: Type.Union([
          Type.Literal("none"),
          Type.Literal("readonly"),
          Type.Literal("onewriter"),
          Type.Literal("all"),
        ]),
        MountVolume: Type.Partial(Type.Object({})),
        Secrets: Type.Array(
          Type.Partial(
            Type.Object({
              Key: Type.String(),
              Secret: Type.String(),
            }),
          ),
        ),
        AccessibilityRequirements: Type.Partial(
          Type.Object({
            Requisite: Type.Array(Topology),
            Preferred: Type.Array(Topology),
          }),
        ),
        CapacityRange: Type.Partial(
          Type.Object({
            RequiredBytes: Type.Number(),
            LimitBytes: Type.Number(),
          }),
        ),
        Availability: Type.Union([Type.Literal("active"), Type.Literal("pause"), Type.Literal("drain")]),
      }),
    ),
  }),
);

export type ClusterVolume = Static<typeof ClusterVolume>;
export const ClusterVolume = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Spec: ClusterVolumeSpec,
    Info: Type.Partial(
      Type.Object({
        CapacityBytes: Type.Number(),
        VolumeContext: Type.Unknown(),
        VolumeID: Type.String(),
        AccessibleTopology: Type.Array(Topology),
      }),
    ),
    PublishStatus: Type.Array(
      Type.Partial(
        Type.Object({
          NodeID: Type.String(),
          State: Type.Union([
            Type.Literal("pending-publish"),
            Type.Literal("published"),
            Type.Literal("pending-node-unpublish"),
            Type.Literal("pending-controller-unpublish"),
          ]),
          PublishContext: Type.Unknown(),
        }),
      ),
    ),
  }),
);

export type Volume = Static<typeof Volume>;
export const Volume = Type.Object({
  Name: Type.String(),
  Driver: Type.String(),
  Mountpoint: Type.String(),
  CreatedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
  Status: Type.Optional(Type.Union([Type.Unknown(), Type.Undefined()])),
  Labels: Type.Unknown(),
  Scope: Type.Union([Type.Literal("local"), Type.Literal("global")]),
  ClusterVolume: Type.Optional(Type.Union([ClusterVolume, Type.Undefined()])),
  Options: Type.Unknown(),
  UsageData: Type.Optional(
    Type.Union([
      Type.Object({
        Size: Type.Number(),
        RefCount: Type.Number(),
      }),
      Type.Null(),
      Type.Undefined(),
    ]),
  ),
});

export type VolumeCreateOptions = Static<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Driver: Type.String(),
    DriverOpts: Type.Unknown(),
    Labels: Type.Unknown(),
    ClusterVolumeSpec: ClusterVolumeSpec,
  }),
);

export type VolumeListResponse = Static<typeof VolumeListResponse>;
export const VolumeListResponse = Type.Partial(
  Type.Object({
    Volumes: Type.Array(Volume),
    Warnings: Type.Array(Type.String()),
  }),
);

export type IPAMConfig = Static<typeof IPAMConfig>;
export const IPAMConfig = Type.Partial(
  Type.Object({
    Subnet: Type.String(),
    IPRange: Type.String(),
    Gateway: Type.String(),
    AuxiliaryAddresses: Type.Unknown(),
  }),
);

export type IPAM = Static<typeof IPAM>;
export const IPAM = Type.Partial(
  Type.Object({
    Driver: Type.String(),
    Config: Type.Array(IPAMConfig),
    Options: Type.Unknown(),
  }),
);

export type NetworkContainer = Static<typeof NetworkContainer>;
export const NetworkContainer = Type.Partial(
  Type.Object({
    Name: Type.String(),
    EndpointID: Type.String(),
    MacAddress: Type.String(),
    IPv4Address: Type.String(),
    IPv6Address: Type.String(),
  }),
);

export type Network = Static<typeof Network>;
export const Network = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Id: Type.String(),
    Created: Type.String(),
    Scope: Type.String(),
    Driver: Type.String(),
    EnableIPv6: Type.Boolean(),
    IPAM: IPAM,
    Internal: Type.Boolean(),
    Attachable: Type.Boolean(),
    Ingress: Type.Boolean(),
    Containers: Type.Unknown(),
    Options: Type.Unknown(),
    Labels: Type.Unknown(),
  }),
);

export type ErrorDetail = Static<typeof ErrorDetail>;
export const ErrorDetail = Type.Partial(
  Type.Object({
    code: Type.Number(),
    message: Type.String(),
  }),
);

export type ProgressDetail = Static<typeof ProgressDetail>;
export const ProgressDetail = Type.Partial(
  Type.Object({
    current: Type.Number(),
    total: Type.Number(),
  }),
);

export type ImageID = Static<typeof ImageID>;
export const ImageID = Type.Partial(
  Type.Object({
    ID: Type.String(),
  }),
);

export type BuildInfo = Static<typeof BuildInfo>;
export const BuildInfo = Type.Partial(
  Type.Object({
    id: Type.String(),
    stream: Type.String(),
    error: Type.String(),
    errorDetail: ErrorDetail,
    status: Type.String(),
    progress: Type.String(),
    progressDetail: ProgressDetail,
    aux: ImageID,
  }),
);

export type BuildCache = Static<typeof BuildCache>;
export const BuildCache = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Parent: Type.Union([Type.String(), Type.Null()]),
    Parents: Type.Union([Type.Array(Type.String()), Type.Null()]),
    Type: Type.Union([
      Type.Literal("internal"),
      Type.Literal("frontend"),
      Type.Literal("source.local"),
      Type.Literal("source.git.checkout"),
      Type.Literal("exec.cachemount"),
      Type.Literal("regular"),
    ]),
    Description: Type.String(),
    InUse: Type.Boolean(),
    Shared: Type.Boolean(),
    Size: Type.Number(),
    CreatedAt: Type.String(),
    LastUsedAt: Type.Union([Type.String(), Type.Null()]),
    UsageCount: Type.Number(),
  }),
);

export type CreateImageInfo = Static<typeof CreateImageInfo>;
export const CreateImageInfo = Type.Partial(
  Type.Object({
    id: Type.String(),
    error: Type.String(),
    errorDetail: ErrorDetail,
    status: Type.String(),
    progress: Type.String(),
    progressDetail: ProgressDetail,
  }),
);

export type PushImageInfo = Static<typeof PushImageInfo>;
export const PushImageInfo = Type.Partial(
  Type.Object({
    error: Type.String(),
    status: Type.String(),
    progress: Type.String(),
    progressDetail: ProgressDetail,
  }),
);

export type ErrorResponse = Static<typeof ErrorResponse>;
export const ErrorResponse = Type.Object({
  message: Type.String(),
});

export type IdResponse = Static<typeof IdResponse>;
export const IdResponse = Type.Object({
  Id: Type.String(),
});

export type PluginMount = Static<typeof PluginMount>;
export const PluginMount = Type.Object({
  Name: Type.String(),
  Description: Type.String(),
  Settable: Type.Array(Type.String()),
  Source: Type.String(),
  Destination: Type.String(),
  Type: Type.String(),
  Options: Type.Array(Type.String()),
});

export type PluginDevice = Static<typeof PluginDevice>;
export const PluginDevice = Type.Object({
  Name: Type.String(),
  Description: Type.String(),
  Settable: Type.Array(Type.String()),
  Path: Type.String(),
});

export type PluginEnv = Static<typeof PluginEnv>;
export const PluginEnv = Type.Object({
  Name: Type.String(),
  Description: Type.String(),
  Settable: Type.Array(Type.String()),
  Value: Type.String(),
});

export type PluginInterfaceType = Static<typeof PluginInterfaceType>;
export const PluginInterfaceType = Type.Object({
  Prefix: Type.String(),
  Capability: Type.String(),
  Version: Type.String(),
});

export type PluginPrivilege = Static<typeof PluginPrivilege>;
export const PluginPrivilege = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Description: Type.String(),
    Value: Type.Array(Type.String()),
  }),
);

export type Plugin = Static<typeof Plugin>;
export const Plugin = Type.Object({
  Id: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
  Name: Type.String(),
  Enabled: Type.Boolean(),
  Settings: Type.Object({
    Mounts: Type.Array(PluginMount),
    Env: Type.Array(Type.String()),
    Args: Type.Array(Type.String()),
    Devices: Type.Array(PluginDevice),
  }),
  PluginReference: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
  Config: Type.Object({
    DockerVersion: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    Description: Type.String(),
    Documentation: Type.String(),
    Interface: Type.Object({
      Types: Type.Array(PluginInterfaceType),
      Socket: Type.String(),
      ProtocolScheme: Type.Optional(
        Type.Union([Type.Literal(""), Type.Literal("moby.plugins.http/v1"), Type.Undefined()]),
      ),
    }),
    Entrypoint: Type.Array(Type.String()),
    WorkDir: Type.String(),
    User: Type.Optional(
      Type.Union([
        Type.Partial(
          Type.Object({
            UID: Type.Number(),
            GID: Type.Number(),
          }),
        ),
        Type.Undefined(),
      ]),
    ),
    Network: Type.Object({
      Type: Type.String(),
    }),
    Linux: Type.Object({
      Capabilities: Type.Array(Type.String()),
      AllowAllDevices: Type.Boolean(),
      Devices: Type.Array(PluginDevice),
    }),
    PropagatedMount: Type.String(),
    IpcHost: Type.Boolean(),
    PidHost: Type.Boolean(),
    Mounts: Type.Array(PluginMount),
    Env: Type.Array(PluginEnv),
    Args: Type.Object({
      Name: Type.String(),
      Description: Type.String(),
      Settable: Type.Array(Type.String()),
      Value: Type.Array(Type.String()),
    }),
    rootfs: Type.Optional(
      Type.Union([
        Type.Partial(
          Type.Object({
            type: Type.String(),
            diff_ids: Type.Array(Type.String()),
          }),
        ),
        Type.Undefined(),
      ]),
    ),
  }),
});

export type NodeSpec = Static<typeof NodeSpec>;
export const NodeSpec = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Labels: Type.Unknown(),
    Role: Type.Union([Type.Literal("worker"), Type.Literal("manager")]),
    Availability: Type.Union([Type.Literal("active"), Type.Literal("pause"), Type.Literal("drain")]),
  }),
);

export type Platform = Static<typeof Platform>;
export const Platform = Type.Partial(
  Type.Object({
    Architecture: Type.String(),
    OS: Type.String(),
  }),
);

export type EngineDescription = Static<typeof EngineDescription>;
export const EngineDescription = Type.Partial(
  Type.Object({
    EngineVersion: Type.String(),
    Labels: Type.Unknown(),
    Plugins: Type.Array(
      Type.Partial(
        Type.Object({
          Type: Type.String(),
          Name: Type.String(),
        }),
      ),
    ),
  }),
);

export type TLSInfo = Static<typeof TLSInfo>;
export const TLSInfo = Type.Partial(
  Type.Object({
    TrustRoot: Type.String(),
    CertIssuerSubject: Type.String(),
    CertIssuerPublicKey: Type.String(),
  }),
);

export type NodeDescription = Static<typeof NodeDescription>;
export const NodeDescription = Type.Partial(
  Type.Object({
    Hostname: Type.String(),
    Platform: Platform,
    Resources: ResourceObject,
    Engine: EngineDescription,
    TLSInfo: TLSInfo,
  }),
);

export type NodeState = Static<typeof NodeState>;
export const NodeState = Type.Union([
  Type.Literal("unknown"),
  Type.Literal("down"),
  Type.Literal("ready"),
  Type.Literal("disconnected"),
]);

export type NodeStatus = Static<typeof NodeStatus>;
export const NodeStatus = Type.Partial(
  Type.Object({
    State: NodeState,
    Message: Type.String(),
    Addr: Type.String(),
  }),
);

export type Reachability = Static<typeof Reachability>;
export const Reachability = Type.Union([
  Type.Literal("unknown"),
  Type.Literal("unreachable"),
  Type.Literal("reachable"),
]);

export type ManagerStatus = Static<typeof ManagerStatus>;
export const ManagerStatus = Type.Union([
  Type.Partial(
    Type.Object({
      Leader: Type.Boolean(),
      Reachability: Reachability,
      Addr: Type.String(),
    }),
  ),
  Type.Null(),
]);

export type Node = Static<typeof Node>;
export const Node = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Spec: NodeSpec,
    Description: NodeDescription,
    Status: NodeStatus,
    ManagerStatus: ManagerStatus,
  }),
);

export type SwarmSpec = Static<typeof SwarmSpec>;
export const SwarmSpec = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Labels: Type.Unknown(),
    Orchestration: Type.Union([
      Type.Partial(
        Type.Object({
          TaskHistoryRetentionLimit: Type.Number(),
        }),
      ),
      Type.Null(),
    ]),
    Raft: Type.Partial(
      Type.Object({
        SnapshotInterval: Type.Number(),
        KeepOldSnapshots: Type.Number(),
        LogEntriesForSlowFollowers: Type.Number(),
        ElectionTick: Type.Number(),
        HeartbeatTick: Type.Number(),
      }),
    ),
    Dispatcher: Type.Union([
      Type.Partial(
        Type.Object({
          HeartbeatPeriod: Type.Number(),
        }),
      ),
      Type.Null(),
    ]),
    CAConfig: Type.Union([
      Type.Partial(
        Type.Object({
          NodeCertExpiry: Type.Number(),
          ExternalCAs: Type.Array(
            Type.Partial(
              Type.Object({
                Protocol: Type.Literal("cfssl"),
                URL: Type.String(),
                Options: Type.Unknown(),
                CACert: Type.String(),
              }),
            ),
          ),
          SigningCACert: Type.String(),
          SigningCAKey: Type.String(),
          ForceRotate: Type.Number(),
        }),
      ),
      Type.Null(),
    ]),
    EncryptionConfig: Type.Partial(
      Type.Object({
        AutoLockManagers: Type.Boolean(),
      }),
    ),
    TaskDefaults: Type.Partial(
      Type.Object({
        LogDriver: Type.Partial(
          Type.Object({
            Name: Type.String(),
            Options: Type.Unknown(),
          }),
        ),
      }),
    ),
  }),
);

export type ClusterInfo = Static<typeof ClusterInfo>;
export const ClusterInfo = Type.Union([
  Type.Partial(
    Type.Object({
      ID: Type.String(),
      Version: ObjectVersion,
      CreatedAt: Type.String(),
      UpdatedAt: Type.String(),
      Spec: SwarmSpec,
      TLSInfo: TLSInfo,
      RootRotationInProgress: Type.Boolean(),
      DataPathPort: Type.Number(),
      DefaultAddrPool: Type.Array(Type.String()),
      SubnetSize: Type.Number(),
    }),
  ),
  Type.Null(),
]);

export type JoinTokens = Static<typeof JoinTokens>;
export const JoinTokens = Type.Partial(
  Type.Object({
    Worker: Type.String(),
    Manager: Type.String(),
  }),
);

export type Swarm = Static<typeof Swarm>;
export const Swarm = Type.Intersect([
  ClusterInfo,
  Type.Partial(
    Type.Object({
      JoinTokens: JoinTokens,
    }),
  ),
]);

export type NetworkAttachmentConfig = Static<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = Type.Partial(
  Type.Object({
    Target: Type.String(),
    Aliases: Type.Array(Type.String()),
    DriverOpts: Type.Unknown(),
  }),
);

export type TaskSpec = Static<typeof TaskSpec>;
export const TaskSpec = Type.Partial(
  Type.Object({
    PluginSpec: Type.Partial(
      Type.Object({
        Name: Type.String(),
        Remote: Type.String(),
        Disabled: Type.Boolean(),
        PluginPrivilege: Type.Array(PluginPrivilege),
      }),
    ),
    ContainerSpec: Type.Partial(
      Type.Object({
        Image: Type.String(),
        Labels: Type.Unknown(),
        Command: Type.Array(Type.String()),
        Args: Type.Array(Type.String()),
        Hostname: Type.String(),
        Env: Type.Array(Type.String()),
        Dir: Type.String(),
        User: Type.String(),
        Groups: Type.Array(Type.String()),
        Privileges: Type.Partial(
          Type.Object({
            CredentialSpec: Type.Partial(
              Type.Object({
                Config: Type.String(),
                File: Type.String(),
                Registry: Type.String(),
              }),
            ),
            SELinuxContext: Type.Partial(
              Type.Object({
                Disable: Type.Boolean(),
                User: Type.String(),
                Role: Type.String(),
                Type: Type.String(),
                Level: Type.String(),
              }),
            ),
          }),
        ),
        TTY: Type.Boolean(),
        OpenStdin: Type.Boolean(),
        ReadOnly: Type.Boolean(),
        Mounts: Type.Array(Mount),
        StopSignal: Type.String(),
        StopGracePeriod: Type.Number(),
        HealthCheck: HealthConfig,
        Hosts: Type.Array(Type.String()),
        DNSConfig: Type.Partial(
          Type.Object({
            Nameservers: Type.Array(Type.String()),
            Search: Type.Array(Type.String()),
            Options: Type.Array(Type.String()),
          }),
        ),
        Secrets: Type.Array(
          Type.Partial(
            Type.Object({
              File: Type.Partial(
                Type.Object({
                  Name: Type.String(),
                  UID: Type.String(),
                  GID: Type.String(),
                  Mode: Type.Number(),
                }),
              ),
              SecretID: Type.String(),
              SecretName: Type.String(),
            }),
          ),
        ),
        Configs: Type.Array(
          Type.Partial(
            Type.Object({
              File: Type.Partial(
                Type.Object({
                  Name: Type.String(),
                  UID: Type.String(),
                  GID: Type.String(),
                  Mode: Type.Number(),
                }),
              ),
              Runtime: Type.Partial(Type.Object({})),
              ConfigID: Type.String(),
              ConfigName: Type.String(),
            }),
          ),
        ),
        Isolation: Type.Union([Type.Literal("default"), Type.Literal("process"), Type.Literal("hyperv")]),
        Init: Type.Union([Type.Boolean(), Type.Null()]),
        Sysctls: Type.Unknown(),
        CapabilityAdd: Type.Array(Type.String()),
        CapabilityDrop: Type.Array(Type.String()),
        Ulimits: Type.Array(
          Type.Partial(
            Type.Object({
              Name: Type.String(),
              Soft: Type.Number(),
              Hard: Type.Number(),
            }),
          ),
        ),
      }),
    ),
    NetworkAttachmentSpec: Type.Partial(
      Type.Object({
        ContainerID: Type.String(),
      }),
    ),
    Resources: Type.Partial(
      Type.Object({
        Limits: Limit,
        Reservations: ResourceObject,
      }),
    ),
    RestartPolicy: Type.Partial(
      Type.Object({
        Condition: Type.Union([Type.Literal("none"), Type.Literal("on-failure"), Type.Literal("any")]),
        Delay: Type.Number(),
        MaxAttempts: Type.Number(),
        Window: Type.Number(),
      }),
    ),
    Placement: Type.Partial(
      Type.Object({
        Constraints: Type.Array(Type.String()),
        Preferences: Type.Array(
          Type.Partial(
            Type.Object({
              Spread: Type.Partial(
                Type.Object({
                  SpreadDescriptor: Type.String(),
                }),
              ),
            }),
          ),
        ),
        MaxReplicas: Type.Number(),
        Platforms: Type.Array(Platform),
      }),
    ),
    ForceUpdate: Type.Number(),
    Runtime: Type.String(),
    Networks: Type.Array(NetworkAttachmentConfig),
    LogDriver: Type.Partial(
      Type.Object({
        Name: Type.String(),
        Options: Type.Unknown(),
      }),
    ),
  }),
);

export type TaskState = Static<typeof TaskState>;
export const TaskState = Type.Union([
  Type.Literal("new"),
  Type.Literal("allocated"),
  Type.Literal("pending"),
  Type.Literal("assigned"),
  Type.Literal("accepted"),
  Type.Literal("preparing"),
  Type.Literal("ready"),
  Type.Literal("starting"),
  Type.Literal("running"),
  Type.Literal("complete"),
  Type.Literal("shutdown"),
  Type.Literal("failed"),
  Type.Literal("rejected"),
  Type.Literal("remove"),
  Type.Literal("orphaned"),
]);

export type Task = Static<typeof Task>;
export const Task = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Name: Type.String(),
    Labels: Type.Unknown(),
    Spec: TaskSpec,
    ServiceID: Type.String(),
    Slot: Type.Number(),
    NodeID: Type.String(),
    AssignedGenericResources: GenericResources,
    Status: Type.Partial(
      Type.Object({
        Timestamp: Type.String(),
        State: TaskState,
        Message: Type.String(),
        Err: Type.String(),
        ContainerStatus: Type.Partial(
          Type.Object({
            ContainerID: Type.String(),
            PID: Type.Number(),
            ExitCode: Type.Number(),
          }),
        ),
      }),
    ),
    DesiredState: TaskState,
    JobIteration: ObjectVersion,
  }),
);

export type EndpointPortConfig = Static<typeof EndpointPortConfig>;
export const EndpointPortConfig = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Protocol: Type.Union([Type.Literal("tcp"), Type.Literal("udp"), Type.Literal("sctp")]),
    TargetPort: Type.Number(),
    PublishedPort: Type.Number(),
    PublishMode: Type.Union([Type.Literal("ingress"), Type.Literal("host")]),
  }),
);

export type EndpointSpec = Static<typeof EndpointSpec>;
export const EndpointSpec = Type.Partial(
  Type.Object({
    Mode: Type.Union([Type.Literal("vip"), Type.Literal("dnsrr")]),
    Ports: Type.Array(EndpointPortConfig),
  }),
);

export type ServiceSpec = Static<typeof ServiceSpec>;
export const ServiceSpec = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Labels: Type.Unknown(),
    TaskTemplate: TaskSpec,
    Mode: Type.Partial(
      Type.Object({
        Replicated: Type.Partial(
          Type.Object({
            Replicas: Type.Number(),
          }),
        ),
        Global: Type.Partial(Type.Object({})),
        ReplicatedJob: Type.Partial(
          Type.Object({
            MaxConcurrent: Type.Number(),
            TotalCompletions: Type.Number(),
          }),
        ),
        GlobalJob: Type.Partial(Type.Object({})),
      }),
    ),
    UpdateConfig: Type.Partial(
      Type.Object({
        Parallelism: Type.Number(),
        Delay: Type.Number(),
        FailureAction: Type.Union([Type.Literal("continue"), Type.Literal("pause"), Type.Literal("rollback")]),
        Monitor: Type.Number(),
        MaxFailureRatio: Type.Number(),
        Order: Type.Union([Type.Literal("stop-first"), Type.Literal("start-first")]),
      }),
    ),
    RollbackConfig: Type.Partial(
      Type.Object({
        Parallelism: Type.Number(),
        Delay: Type.Number(),
        FailureAction: Type.Union([Type.Literal("continue"), Type.Literal("pause")]),
        Monitor: Type.Number(),
        MaxFailureRatio: Type.Number(),
        Order: Type.Union([Type.Literal("stop-first"), Type.Literal("start-first")]),
      }),
    ),
    Networks: Type.Array(NetworkAttachmentConfig),
    EndpointSpec: EndpointSpec,
  }),
);

export type Service = Static<typeof Service>;
export const Service = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Spec: ServiceSpec,
    Endpoint: Type.Partial(
      Type.Object({
        Spec: EndpointSpec,
        Ports: Type.Array(EndpointPortConfig),
        VirtualIPs: Type.Array(
          Type.Partial(
            Type.Object({
              NetworkID: Type.String(),
              Addr: Type.String(),
            }),
          ),
        ),
      }),
    ),
    UpdateStatus: Type.Partial(
      Type.Object({
        State: Type.Union([Type.Literal("updating"), Type.Literal("paused"), Type.Literal("completed")]),
        StartedAt: Type.String(),
        CompletedAt: Type.String(),
        Message: Type.String(),
      }),
    ),
    ServiceStatus: Type.Partial(
      Type.Object({
        RunningTasks: Type.Number(),
        DesiredTasks: Type.Number(),
        CompletedTasks: Type.Number(),
      }),
    ),
    JobStatus: Type.Partial(
      Type.Object({
        JobIteration: ObjectVersion,
        LastExecution: Type.String(),
      }),
    ),
  }),
);

export type ImageDeleteResponseItem = Static<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = Type.Partial(
  Type.Object({
    Untagged: Type.String(),
    Deleted: Type.String(),
  }),
);

export type ServiceUpdateResponse = Static<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = Type.Partial(
  Type.Object({
    Warnings: Type.Array(Type.String()),
  }),
);

export type ContainerSummary = Static<typeof ContainerSummary>;
export const ContainerSummary = Type.Partial(
  Type.Object({
    Id: Type.String(),
    Names: Type.Array(Type.String()),
    Image: Type.String(),
    ImageID: Type.String(),
    Command: Type.String(),
    Created: Type.Number(),
    Ports: Type.Array(Port),
    SizeRw: Type.Number(),
    SizeRootFs: Type.Number(),
    Labels: Type.Unknown(),
    State: Type.String(),
    Status: Type.String(),
    HostConfig: Type.Partial(
      Type.Object({
        NetworkMode: Type.String(),
      }),
    ),
    NetworkSettings: Type.Partial(
      Type.Object({
        Networks: Type.Unknown(),
      }),
    ),
    Mounts: Type.Array(MountPoint),
  }),
);

export type Driver = Static<typeof Driver>;
export const Driver = Type.Object({
  Name: Type.String(),
  Options: Type.Optional(Type.Union([Type.Unknown(), Type.Undefined()])),
});

export type SecretSpec = Static<typeof SecretSpec>;
export const SecretSpec = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Labels: Type.Unknown(),
    Data: Type.String(),
    Driver: Driver,
    Templating: Driver,
  }),
);

export type Secret = Static<typeof Secret>;
export const Secret = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Spec: SecretSpec,
  }),
);

export type ConfigSpec = Static<typeof ConfigSpec>;
export const ConfigSpec = Type.Partial(
  Type.Object({
    Name: Type.String(),
    Labels: Type.Unknown(),
    Data: Type.String(),
    Templating: Driver,
  }),
);

export type Config = Static<typeof Config>;
export const Config = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Version: ObjectVersion,
    CreatedAt: Type.String(),
    UpdatedAt: Type.String(),
    Spec: ConfigSpec,
  }),
);

export type ContainerState = Static<typeof ContainerState>;
export const ContainerState = Type.Union([
  Type.Partial(
    Type.Object({
      Status: Type.Union([
        Type.Literal("created"),
        Type.Literal("running"),
        Type.Literal("paused"),
        Type.Literal("restarting"),
        Type.Literal("removing"),
        Type.Literal("exited"),
        Type.Literal("dead"),
      ]),
      Running: Type.Boolean(),
      Paused: Type.Boolean(),
      Restarting: Type.Boolean(),
      OOMKilled: Type.Boolean(),
      Dead: Type.Boolean(),
      Pid: Type.Number(),
      ExitCode: Type.Number(),
      Error: Type.String(),
      StartedAt: Type.String(),
      FinishedAt: Type.String(),
      Health: Health,
    }),
  ),
  Type.Null(),
]);

export type ContainerCreateResponse = Static<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = Type.Object({
  Id: Type.String(),
  Warnings: Type.Array(Type.String()),
});

export type ContainerWaitExitError = Static<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = Type.Partial(
  Type.Object({
    Message: Type.String(),
  }),
);

export type ContainerWaitResponse = Static<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = Type.Object({
  StatusCode: Type.Number(),
  Error: Type.Optional(Type.Union([ContainerWaitExitError, Type.Undefined()])),
});

export type SystemVersion = Static<typeof SystemVersion>;
export const SystemVersion = Type.Partial(
  Type.Object({
    Platform: Type.Object({
      Name: Type.String(),
    }),
    Components: Type.Array(
      Type.Object({
        Name: Type.String(),
        Version: Type.String(),
        Details: Type.Optional(Type.Union([Type.Partial(Type.Object({})), Type.Null(), Type.Undefined()])),
      }),
    ),
    Version: Type.String(),
    ApiVersion: Type.String(),
    MinAPIVersion: Type.String(),
    GitCommit: Type.String(),
    GoVersion: Type.String(),
    Os: Type.String(),
    Arch: Type.String(),
    KernelVersion: Type.String(),
    Experimental: Type.Boolean(),
    BuildTime: Type.String(),
  }),
);

export type PluginsInfo = Static<typeof PluginsInfo>;
export const PluginsInfo = Type.Partial(
  Type.Object({
    Volume: Type.Array(Type.String()),
    Network: Type.Array(Type.String()),
    Authorization: Type.Array(Type.String()),
    Log: Type.Array(Type.String()),
  }),
);

export type IndexInfo = Static<typeof IndexInfo>;
export const IndexInfo = Type.Union([
  Type.Partial(
    Type.Object({
      Name: Type.String(),
      Mirrors: Type.Array(Type.String()),
      Secure: Type.Boolean(),
      Official: Type.Boolean(),
    }),
  ),
  Type.Null(),
]);

export type RegistryServiceConfig = Static<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = Type.Union([
  Type.Partial(
    Type.Object({
      AllowNondistributableArtifactsCIDRs: Type.Array(Type.String()),
      AllowNondistributableArtifactsHostnames: Type.Array(Type.String()),
      InsecureRegistryCIDRs: Type.Array(Type.String()),
      IndexConfigs: Type.Unknown(),
      Mirrors: Type.Array(Type.String()),
    }),
  ),
  Type.Null(),
]);

export type Runtime = Static<typeof Runtime>;
export const Runtime = Type.Partial(
  Type.Object({
    path: Type.String(),
    runtimeArgs: Type.Union([Type.Array(Type.String()), Type.Null()]),
  }),
);

export type LocalNodeState = Static<typeof LocalNodeState>;
export const LocalNodeState = Type.Union([
  Type.Literal(""),
  Type.Literal("inactive"),
  Type.Literal("pending"),
  Type.Literal("active"),
  Type.Literal("error"),
  Type.Literal("locked"),
]);

export type PeerNode = Static<typeof PeerNode>;
export const PeerNode = Type.Partial(
  Type.Object({
    NodeID: Type.String(),
    Addr: Type.String(),
  }),
);

export type SwarmInfo = Static<typeof SwarmInfo>;
export const SwarmInfo = Type.Partial(
  Type.Object({
    NodeID: Type.String(),
    NodeAddr: Type.String(),
    LocalNodeState: LocalNodeState,
    ControlAvailable: Type.Boolean(),
    Error: Type.String(),
    RemoteManagers: Type.Union([Type.Array(PeerNode), Type.Null()]),
    Nodes: Type.Union([Type.Number(), Type.Null()]),
    Managers: Type.Union([Type.Number(), Type.Null()]),
    Cluster: ClusterInfo,
  }),
);

export type Commit = Static<typeof Commit>;
export const Commit = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Expected: Type.String(),
  }),
);

export type SystemInfo = Static<typeof SystemInfo>;
export const SystemInfo = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Containers: Type.Number(),
    ContainersRunning: Type.Number(),
    ContainersPaused: Type.Number(),
    ContainersStopped: Type.Number(),
    Images: Type.Number(),
    Driver: Type.String(),
    DriverStatus: Type.Array(Type.Array(Type.String())),
    DockerRootDir: Type.String(),
    Plugins: PluginsInfo,
    MemoryLimit: Type.Boolean(),
    SwapLimit: Type.Boolean(),
    KernelMemoryTCP: Type.Boolean(),
    CpuCfsPeriod: Type.Boolean(),
    CpuCfsQuota: Type.Boolean(),
    CPUShares: Type.Boolean(),
    CPUSet: Type.Boolean(),
    PidsLimit: Type.Boolean(),
    OomKillDisable: Type.Boolean(),
    IPv4Forwarding: Type.Boolean(),
    BridgeNfIptables: Type.Boolean(),
    BridgeNfIp6tables: Type.Boolean(),
    Debug: Type.Boolean(),
    NFd: Type.Number(),
    NGoroutines: Type.Number(),
    SystemTime: Type.String(),
    LoggingDriver: Type.String(),
    CgroupDriver: Type.Union([Type.Literal("cgroupfs"), Type.Literal("systemd"), Type.Literal("none")]),
    CgroupVersion: Type.Union([Type.Literal("1"), Type.Literal("2")]),
    NEventsListener: Type.Number(),
    KernelVersion: Type.String(),
    OperatingSystem: Type.String(),
    OSVersion: Type.String(),
    OSType: Type.String(),
    Architecture: Type.String(),
    NCPU: Type.Number(),
    MemTotal: Type.Number(),
    IndexServerAddress: Type.String(),
    RegistryConfig: RegistryServiceConfig,
    GenericResources: GenericResources,
    HttpProxy: Type.String(),
    HttpsProxy: Type.String(),
    NoProxy: Type.String(),
    Name: Type.String(),
    Labels: Type.Array(Type.String()),
    ExperimentalBuild: Type.Boolean(),
    ServerVersion: Type.String(),
    Runtimes: Type.Unknown(),
    DefaultRuntime: Type.String(),
    Swarm: SwarmInfo,
    LiveRestoreEnabled: Type.Boolean(),
    Isolation: Type.Union([Type.Literal("default"), Type.Literal("hyperv"), Type.Literal("process")]),
    InitBinary: Type.String(),
    ContainerdCommit: Commit,
    RuncCommit: Commit,
    InitCommit: Commit,
    SecurityOptions: Type.Array(Type.String()),
    ProductLicense: Type.String(),
    DefaultAddressPools: Type.Array(
      Type.Partial(
        Type.Object({
          Base: Type.String(),
          Size: Type.Number(),
        }),
      ),
    ),
    Warnings: Type.Array(Type.String()),
  }),
);

export type EventActor = Static<typeof EventActor>;
export const EventActor = Type.Partial(
  Type.Object({
    ID: Type.String(),
    Attributes: Type.Unknown(),
  }),
);

export type EventMessage = Static<typeof EventMessage>;
export const EventMessage = Type.Partial(
  Type.Object({
    Type: Type.Union([
      Type.Literal("builder"),
      Type.Literal("config"),
      Type.Literal("container"),
      Type.Literal("daemon"),
      Type.Literal("image"),
      Type.Literal("network"),
      Type.Literal("node"),
      Type.Literal("plugin"),
      Type.Literal("secret"),
      Type.Literal("service"),
      Type.Literal("volume"),
    ]),
    Action: Type.String(),
    Actor: EventActor,
    scope: Type.Union([Type.Literal("local"), Type.Literal("swarm")]),
    time: Type.Number(),
    timeNano: Type.Number(),
  }),
);

export type OCIDescriptor = Static<typeof OCIDescriptor>;
export const OCIDescriptor = Type.Partial(
  Type.Object({
    mediaType: Type.String(),
    digest: Type.String(),
    size: Type.Number(),
  }),
);

export type OCIPlatform = Static<typeof OCIPlatform>;
export const OCIPlatform = Type.Partial(
  Type.Object({
    architecture: Type.String(),
    os: Type.String(),
    "os.version": Type.String(),
    "os.features": Type.Array(Type.String()),
    variant: Type.String(),
  }),
);

export type DistributionInspect = Static<typeof DistributionInspect>;
export const DistributionInspect = Type.Object({
  Descriptor: OCIDescriptor,
  Platforms: Type.Array(OCIPlatform),
});

type __ENDPOINTS_START__ = Static<typeof __ENDPOINTS_START__>;
const __ENDPOINTS_START__ = Type.Object({});

export type get_ContainerList = Static<typeof get_ContainerList>;
export const get_ContainerList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        all: Type.Boolean(),
        limit: Type.Number(),
        size: Type.Boolean(),
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(ContainerSummary),
});

export type post_ContainerCreate = Static<typeof post_ContainerCreate>;
export const post_ContainerCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/create"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        name: Type.String(),
        platform: Type.String(),
      }),
    ),
    body: Type.Intersect([
      ContainerConfig,
      Type.Partial(
        Type.Object({
          HostConfig: HostConfig,
          NetworkingConfig: NetworkingConfig,
        }),
      ),
    ]),
  }),
  response: ContainerCreateResponse,
});

export type get_ContainerInspect = Static<typeof get_ContainerInspect>;
export const get_ContainerInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        size: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Partial(
    Type.Object({
      Id: Type.String(),
      Created: Type.String(),
      Path: Type.String(),
      Args: Type.Array(Type.String()),
      State: ContainerState,
      Image: Type.String(),
      ResolvConfPath: Type.String(),
      HostnamePath: Type.String(),
      HostsPath: Type.String(),
      LogPath: Type.String(),
      Name: Type.String(),
      RestartCount: Type.Number(),
      Driver: Type.String(),
      Platform: Type.String(),
      MountLabel: Type.String(),
      ProcessLabel: Type.String(),
      AppArmorProfile: Type.String(),
      ExecIDs: Type.Union([Type.Array(Type.String()), Type.Null()]),
      HostConfig: HostConfig,
      GraphDriver: GraphDriverData,
      SizeRw: Type.Number(),
      SizeRootFs: Type.Number(),
      Mounts: Type.Array(MountPoint),
      Config: ContainerConfig,
      NetworkSettings: NetworkSettings,
    }),
  ),
});

export type get_ContainerTop = Static<typeof get_ContainerTop>;
export const get_ContainerTop = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/top"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        ps_args: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Partial(
    Type.Object({
      Titles: Type.Array(Type.String()),
      Processes: Type.Array(Type.Array(Type.String())),
    }),
  ),
});

export type get_ContainerLogs = Static<typeof get_ContainerLogs>;
export const get_ContainerLogs = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/logs"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        follow: Type.Boolean(),
        stdout: Type.Boolean(),
        stderr: Type.Boolean(),
        since: Type.Number(),
        until: Type.Number(),
        timestamps: Type.Boolean(),
        tail: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ContainerChanges = Static<typeof get_ContainerChanges>;
export const get_ContainerChanges = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/changes"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Array(FilesystemChange),
});

export type get_ContainerExport = Static<typeof get_ContainerExport>;
export const get_ContainerExport = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/export"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ContainerStats = Static<typeof get_ContainerStats>;
export const get_ContainerStats = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/stats"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        stream: Type.Boolean(),
        "one-shot": Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerResize = Static<typeof post_ContainerResize>;
export const post_ContainerResize = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/resize"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        h: Type.Number(),
        w: Type.Number(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerStart = Static<typeof post_ContainerStart>;
export const post_ContainerStart = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/start"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        detachKeys: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerStop = Static<typeof post_ContainerStop>;
export const post_ContainerStop = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/stop"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        signal: Type.String(),
        t: Type.Number(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerRestart = Static<typeof post_ContainerRestart>;
export const post_ContainerRestart = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/restart"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        signal: Type.String(),
        t: Type.Number(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerKill = Static<typeof post_ContainerKill>;
export const post_ContainerKill = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/kill"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        signal: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerUpdate = Static<typeof post_ContainerUpdate>;
export const post_ContainerUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/update"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.Intersect([
      Resources,
      Type.Partial(
        Type.Object({
          RestartPolicy: RestartPolicy,
        }),
      ),
    ]),
  }),
  response: Type.Partial(
    Type.Object({
      Warnings: Type.Array(Type.String()),
    }),
  ),
});

export type post_ContainerRename = Static<typeof post_ContainerRename>;
export const post_ContainerRename = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/rename"),
  parameters: Type.Object({
    query: Type.Object({
      name: Type.String(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerPause = Static<typeof post_ContainerPause>;
export const post_ContainerPause = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/pause"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerUnpause = Static<typeof post_ContainerUnpause>;
export const post_ContainerUnpause = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/unpause"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerAttach = Static<typeof post_ContainerAttach>;
export const post_ContainerAttach = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/attach"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        detachKeys: Type.String(),
        logs: Type.Boolean(),
        stream: Type.Boolean(),
        stdin: Type.Boolean(),
        stdout: Type.Boolean(),
        stderr: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ContainerAttachWebsocket = Static<typeof get_ContainerAttachWebsocket>;
export const get_ContainerAttachWebsocket = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/attach/ws"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        detachKeys: Type.String(),
        logs: Type.Boolean(),
        stream: Type.Boolean(),
        stdin: Type.Boolean(),
        stdout: Type.Boolean(),
        stderr: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerWait = Static<typeof post_ContainerWait>;
export const post_ContainerWait = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/wait"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        condition: Type.Union([Type.Literal("not-running"), Type.Literal("next-exit"), Type.Literal("removed")]),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: ContainerWaitResponse,
});

export type delete_ContainerDelete = Static<typeof delete_ContainerDelete>;
export const delete_ContainerDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/containers/{id}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        v: Type.Boolean(),
        force: Type.Boolean(),
        link: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ContainerArchive = Static<typeof get_ContainerArchive>;
export const get_ContainerArchive = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/archive"),
  parameters: Type.Object({
    query: Type.Object({
      path: Type.String(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type put_PutContainerArchive = Static<typeof put_PutContainerArchive>;
export const put_PutContainerArchive = Type.Object({
  method: Type.Literal("PUT"),
  path: Type.Literal("/containers/{id}/archive"),
  parameters: Type.Object({
    query: Type.Object({
      path: Type.String(),
      noOverwriteDirNonDir: Type.String(),
      copyUIDGID: Type.String(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.String(),
  }),
  response: Type.Unknown(),
});

export type head_ContainerArchiveInfo = Static<typeof head_ContainerArchiveInfo>;
export const head_ContainerArchiveInfo = Type.Object({
  method: Type.Literal("HEAD"),
  path: Type.Literal("/containers/{id}/archive"),
  parameters: Type.Object({
    query: Type.Object({
      path: Type.String(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ContainerPrune = Static<typeof post_ContainerPrune>;
export const post_ContainerPrune = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/prune"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      ContainersDeleted: Type.Array(Type.String()),
      SpaceReclaimed: Type.Number(),
    }),
  ),
});

export type get_ImageList = Static<typeof get_ImageList>;
export const get_ImageList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        all: Type.Boolean(),
        filters: Type.String(),
        "shared-size": Type.Boolean(),
        digests: Type.Boolean(),
      }),
    ),
  }),
  response: Type.Array(ImageSummary),
});

export type post_ImageBuild = Static<typeof post_ImageBuild>;
export const post_ImageBuild = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/build"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        dockerfile: Type.String(),
        t: Type.String(),
        extrahosts: Type.String(),
        remote: Type.String(),
        q: Type.Boolean(),
        nocache: Type.Boolean(),
        cachefrom: Type.String(),
        pull: Type.String(),
        rm: Type.Boolean(),
        forcerm: Type.Boolean(),
        memory: Type.Number(),
        memswap: Type.Number(),
        cpushares: Type.Number(),
        cpusetcpus: Type.String(),
        cpuperiod: Type.Number(),
        cpuquota: Type.Number(),
        buildargs: Type.String(),
        shmsize: Type.Number(),
        squash: Type.Boolean(),
        labels: Type.String(),
        networkmode: Type.String(),
        platform: Type.String(),
        target: Type.String(),
        outputs: Type.String(),
      }),
    ),
    header: Type.Partial(
      Type.Object({
        "Content-type": Type.Literal("application/x-tar"),
        "X-Registry-Config": Type.String(),
      }),
    ),
    body: Type.String(),
  }),
  response: Type.Unknown(),
});

export type post_BuildPrune = Static<typeof post_BuildPrune>;
export const post_BuildPrune = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/build/prune"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        "keep-storage": Type.Number(),
        all: Type.Boolean(),
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      CachesDeleted: Type.Array(Type.String()),
      SpaceReclaimed: Type.Number(),
    }),
  ),
});

export type post_ImageCreate = Static<typeof post_ImageCreate>;
export const post_ImageCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/images/create"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        fromImage: Type.String(),
        fromSrc: Type.String(),
        repo: Type.String(),
        tag: Type.String(),
        message: Type.String(),
        changes: Type.Array(Type.String()),
        platform: Type.String(),
      }),
    ),
    header: Type.Partial(
      Type.Object({
        "X-Registry-Auth": Type.String(),
      }),
    ),
    body: Type.String(),
  }),
  response: Type.Unknown(),
});

export type get_ImageInspect = Static<typeof get_ImageInspect>;
export const get_ImageInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/json"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: ImageInspect,
});

export type get_ImageHistory = Static<typeof get_ImageHistory>;
export const get_ImageHistory = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/history"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Array(
    Type.Object({
      Id: Type.String(),
      Created: Type.Number(),
      CreatedBy: Type.String(),
      Tags: Type.Array(Type.String()),
      Size: Type.Number(),
      Comment: Type.String(),
    }),
  ),
});

export type post_ImagePush = Static<typeof post_ImagePush>;
export const post_ImagePush = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/images/{name}/push"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        tag: Type.String(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
    header: Type.Object({
      "X-Registry-Auth": Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ImageTag = Static<typeof post_ImageTag>;
export const post_ImageTag = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/images/{name}/tag"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        repo: Type.String(),
        tag: Type.String(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type delete_ImageDelete = Static<typeof delete_ImageDelete>;
export const delete_ImageDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/images/{name}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
        noprune: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Array(ImageDeleteResponseItem),
});

export type get_ImageSearch = Static<typeof get_ImageSearch>;
export const get_ImageSearch = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/search"),
  parameters: Type.Object({
    query: Type.Object({
      term: Type.String(),
      limit: Type.Number(),
      filters: Type.String(),
    }),
  }),
  response: Type.Array(
    Type.Partial(
      Type.Object({
        description: Type.String(),
        is_official: Type.Boolean(),
        is_automated: Type.Boolean(),
        name: Type.String(),
        star_count: Type.Number(),
      }),
    ),
  ),
});

export type post_ImagePrune = Static<typeof post_ImagePrune>;
export const post_ImagePrune = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/images/prune"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      ImagesDeleted: Type.Array(ImageDeleteResponseItem),
      SpaceReclaimed: Type.Number(),
    }),
  ),
});

export type post_SystemAuth = Static<typeof post_SystemAuth>;
export const post_SystemAuth = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/auth"),
  parameters: Type.Object({
    body: AuthConfig,
  }),
  response: Type.Unknown(),
});

export type get_SystemInfo = Static<typeof get_SystemInfo>;
export const get_SystemInfo = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/info"),
  parameters: Type.Never(),
  response: SystemInfo,
});

export type get_SystemVersion = Static<typeof get_SystemVersion>;
export const get_SystemVersion = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/version"),
  parameters: Type.Never(),
  response: SystemVersion,
});

export type get_SystemPing = Static<typeof get_SystemPing>;
export const get_SystemPing = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/_ping"),
  parameters: Type.Never(),
  response: Type.Unknown(),
});

export type head_SystemPingHead = Static<typeof head_SystemPingHead>;
export const head_SystemPingHead = Type.Object({
  method: Type.Literal("HEAD"),
  path: Type.Literal("/_ping"),
  parameters: Type.Never(),
  response: Type.Unknown(),
});

export type post_ImageCommit = Static<typeof post_ImageCommit>;
export const post_ImageCommit = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/commit"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        container: Type.String(),
        repo: Type.String(),
        tag: Type.String(),
        comment: Type.String(),
        author: Type.String(),
        pause: Type.Boolean(),
        changes: Type.String(),
      }),
    ),
    body: ContainerConfig,
  }),
  response: IdResponse,
});

export type get_SystemEvents = Static<typeof get_SystemEvents>;
export const get_SystemEvents = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/events"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        since: Type.String(),
        until: Type.String(),
        filters: Type.String(),
      }),
    ),
  }),
  response: EventMessage,
});

export type get_SystemDataUsage = Static<typeof get_SystemDataUsage>;
export const get_SystemDataUsage = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/system/df"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        type: Type.Array(
          Type.Union([
            Type.Literal("container"),
            Type.Literal("image"),
            Type.Literal("volume"),
            Type.Literal("build-cache"),
          ]),
        ),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      LayersSize: Type.Number(),
      Images: Type.Array(ImageSummary),
      Containers: Type.Array(ContainerSummary),
      Volumes: Type.Array(Volume),
      BuildCache: Type.Array(BuildCache),
    }),
  ),
});

export type get_ImageGet = Static<typeof get_ImageGet>;
export const get_ImageGet = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/get"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ImageGetAll = Static<typeof get_ImageGetAll>;
export const get_ImageGetAll = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/images/get"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        names: Type.Array(Type.String()),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_ImageLoad = Static<typeof post_ImageLoad>;
export const post_ImageLoad = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/images/load"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        quiet: Type.Boolean(),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_ContainerExec = Static<typeof post_ContainerExec>;
export const post_ContainerExec = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/exec"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.Partial(
      Type.Object({
        AttachStdin: Type.Boolean(),
        AttachStdout: Type.Boolean(),
        AttachStderr: Type.Boolean(),
        ConsoleSize: Type.Union([Type.Array(Type.Number()), Type.Null()]),
        DetachKeys: Type.String(),
        Tty: Type.Boolean(),
        Env: Type.Array(Type.String()),
        Cmd: Type.Array(Type.String()),
        Privileged: Type.Boolean(),
        User: Type.String(),
        WorkingDir: Type.String(),
      }),
    ),
  }),
  response: IdResponse,
});

export type post_ExecStart = Static<typeof post_ExecStart>;
export const post_ExecStart = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/exec/{id}/start"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.Partial(
      Type.Object({
        Detach: Type.Boolean(),
        Tty: Type.Boolean(),
        ConsoleSize: Type.Union([Type.Array(Type.Number()), Type.Null()]),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_ExecResize = Static<typeof post_ExecResize>;
export const post_ExecResize = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/exec/{id}/resize"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        h: Type.Number(),
        w: Type.Number(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_ExecInspect = Static<typeof get_ExecInspect>;
export const get_ExecInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/exec/{id}/json"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Partial(
    Type.Object({
      CanRemove: Type.Boolean(),
      DetachKeys: Type.String(),
      ID: Type.String(),
      Running: Type.Boolean(),
      ExitCode: Type.Number(),
      ProcessConfig: ProcessConfig,
      OpenStdin: Type.Boolean(),
      OpenStderr: Type.Boolean(),
      OpenStdout: Type.Boolean(),
      ContainerID: Type.String(),
      Pid: Type.Number(),
    }),
  ),
});

export type get_VolumeList = Static<typeof get_VolumeList>;
export const get_VolumeList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/volumes"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: VolumeListResponse,
});

export type post_VolumeCreate = Static<typeof post_VolumeCreate>;
export const post_VolumeCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/volumes/create"),
  parameters: Type.Object({
    body: VolumeCreateOptions,
  }),
  response: Volume,
});

export type get_VolumeInspect = Static<typeof get_VolumeInspect>;
export const get_VolumeInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/volumes/{name}"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Volume,
});

export type put_VolumeUpdate = Static<typeof put_VolumeUpdate>;
export const put_VolumeUpdate = Type.Object({
  method: Type.Literal("PUT"),
  path: Type.Literal("/volumes/{name}"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
    }),
    path: Type.Object({
      name: Type.String(),
    }),
    body: Type.Partial(
      Type.Object({
        Spec: ClusterVolumeSpec,
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type delete_VolumeDelete = Static<typeof delete_VolumeDelete>;
export const delete_VolumeDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/volumes/{name}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_VolumePrune = Static<typeof post_VolumePrune>;
export const post_VolumePrune = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/volumes/prune"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      VolumesDeleted: Type.Array(Type.String()),
      SpaceReclaimed: Type.Number(),
    }),
  ),
});

export type get_NetworkList = Static<typeof get_NetworkList>;
export const get_NetworkList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/networks"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Network),
});

export type get_NetworkInspect = Static<typeof get_NetworkInspect>;
export const get_NetworkInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/networks/{id}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        verbose: Type.Boolean(),
        scope: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Network,
});

export type delete_NetworkDelete = Static<typeof delete_NetworkDelete>;
export const delete_NetworkDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/networks/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_NetworkCreate = Static<typeof post_NetworkCreate>;
export const post_NetworkCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/create"),
  parameters: Type.Object({
    body: Type.Object({
      Name: Type.String(),
      CheckDuplicate: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
      Driver: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
      Internal: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
      Attachable: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
      Ingress: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
      IPAM: Type.Optional(Type.Union([IPAM, Type.Undefined()])),
      EnableIPv6: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
      Options: Type.Optional(Type.Union([Type.Unknown(), Type.Undefined()])),
      Labels: Type.Optional(Type.Union([Type.Unknown(), Type.Undefined()])),
    }),
  }),
  response: Type.Partial(
    Type.Object({
      Id: Type.String(),
      Warning: Type.String(),
    }),
  ),
});

export type post_NetworkConnect = Static<typeof post_NetworkConnect>;
export const post_NetworkConnect = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/{id}/connect"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.Partial(
      Type.Object({
        Container: Type.String(),
        EndpointConfig: EndpointSettings,
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_NetworkDisconnect = Static<typeof post_NetworkDisconnect>;
export const post_NetworkDisconnect = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/{id}/disconnect"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
    body: Type.Partial(
      Type.Object({
        Container: Type.String(),
        Force: Type.Boolean(),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_NetworkPrune = Static<typeof post_NetworkPrune>;
export const post_NetworkPrune = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/prune"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Partial(
    Type.Object({
      NetworksDeleted: Type.Array(Type.String()),
    }),
  ),
});

export type get_PluginList = Static<typeof get_PluginList>;
export const get_PluginList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Plugin),
});

export type get_GetPluginPrivileges = Static<typeof get_GetPluginPrivileges>;
export const get_GetPluginPrivileges = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins/privileges"),
  parameters: Type.Object({
    query: Type.Object({
      remote: Type.String(),
    }),
  }),
  response: Type.Array(PluginPrivilege),
});

export type post_PluginPull = Static<typeof post_PluginPull>;
export const post_PluginPull = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/pull"),
  parameters: Type.Object({
    query: Type.Object({
      remote: Type.String(),
      name: Type.String(),
    }),
    header: Type.Partial(
      Type.Object({
        "X-Registry-Auth": Type.String(),
      }),
    ),
    body: Type.Array(PluginPrivilege),
  }),
  response: Type.Unknown(),
});

export type get_PluginInspect = Static<typeof get_PluginInspect>;
export const get_PluginInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins/{name}/json"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Plugin,
});

export type delete_PluginDelete = Static<typeof delete_PluginDelete>;
export const delete_PluginDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/plugins/{name}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Plugin,
});

export type post_PluginEnable = Static<typeof post_PluginEnable>;
export const post_PluginEnable = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/enable"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        timeout: Type.Number(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_PluginDisable = Static<typeof post_PluginDisable>;
export const post_PluginDisable = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/disable"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_PluginUpgrade = Static<typeof post_PluginUpgrade>;
export const post_PluginUpgrade = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/upgrade"),
  parameters: Type.Object({
    query: Type.Object({
      remote: Type.String(),
    }),
    path: Type.Object({
      name: Type.String(),
    }),
    header: Type.Partial(
      Type.Object({
        "X-Registry-Auth": Type.String(),
      }),
    ),
    body: Type.Array(PluginPrivilege),
  }),
  response: Type.Unknown(),
});

export type post_PluginCreate = Static<typeof post_PluginCreate>;
export const post_PluginCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/create"),
  parameters: Type.Object({
    query: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_PluginPush = Static<typeof post_PluginPush>;
export const post_PluginPush = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/push"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_PluginSet = Static<typeof post_PluginSet>;
export const post_PluginSet = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/set"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
    body: Type.Array(Type.String()),
  }),
  response: Type.Unknown(),
});

export type get_NodeList = Static<typeof get_NodeList>;
export const get_NodeList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/nodes"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Node),
});

export type get_NodeInspect = Static<typeof get_NodeInspect>;
export const get_NodeInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/nodes/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Node,
});

export type delete_NodeDelete = Static<typeof delete_NodeDelete>;
export const delete_NodeDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/nodes/{id}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_NodeUpdate = Static<typeof post_NodeUpdate>;
export const post_NodeUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/nodes/{id}/update"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
    body: NodeSpec,
  }),
  response: Type.Unknown(),
});

export type get_SwarmInspect = Static<typeof get_SwarmInspect>;
export const get_SwarmInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/swarm"),
  parameters: Type.Never(),
  response: Swarm,
});

export type post_SwarmInit = Static<typeof post_SwarmInit>;
export const post_SwarmInit = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/init"),
  parameters: Type.Object({
    body: Type.Partial(
      Type.Object({
        ListenAddr: Type.String(),
        AdvertiseAddr: Type.String(),
        DataPathAddr: Type.String(),
        DataPathPort: Type.Number(),
        DefaultAddrPool: Type.Array(Type.String()),
        ForceNewCluster: Type.Boolean(),
        SubnetSize: Type.Number(),
        Spec: SwarmSpec,
      }),
    ),
  }),
  response: Type.String(),
});

export type post_SwarmJoin = Static<typeof post_SwarmJoin>;
export const post_SwarmJoin = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/join"),
  parameters: Type.Object({
    body: Type.Partial(
      Type.Object({
        ListenAddr: Type.String(),
        AdvertiseAddr: Type.String(),
        DataPathAddr: Type.String(),
        RemoteAddrs: Type.Array(Type.String()),
        JoinToken: Type.String(),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_SwarmLeave = Static<typeof post_SwarmLeave>;
export const post_SwarmLeave = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/leave"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        force: Type.Boolean(),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type post_SwarmUpdate = Static<typeof post_SwarmUpdate>;
export const post_SwarmUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/update"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
      rotateWorkerToken: Type.Boolean(),
      rotateManagerToken: Type.Boolean(),
      rotateManagerUnlockKey: Type.Boolean(),
    }),
    body: SwarmSpec,
  }),
  response: Type.Unknown(),
});

export type get_SwarmUnlockkey = Static<typeof get_SwarmUnlockkey>;
export const get_SwarmUnlockkey = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/swarm/unlockkey"),
  parameters: Type.Never(),
  response: Type.Partial(
    Type.Object({
      UnlockKey: Type.String(),
    }),
  ),
});

export type post_SwarmUnlock = Static<typeof post_SwarmUnlock>;
export const post_SwarmUnlock = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/unlock"),
  parameters: Type.Object({
    body: Type.Partial(
      Type.Object({
        UnlockKey: Type.String(),
      }),
    ),
  }),
  response: Type.Unknown(),
});

export type get_ServiceList = Static<typeof get_ServiceList>;
export const get_ServiceList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/services"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
        status: Type.Boolean(),
      }),
    ),
  }),
  response: Type.Array(Service),
});

export type post_ServiceCreate = Static<typeof post_ServiceCreate>;
export const post_ServiceCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/services/create"),
  parameters: Type.Object({
    header: Type.Partial(
      Type.Object({
        "X-Registry-Auth": Type.String(),
      }),
    ),
    body: Type.Intersect([ServiceSpec, Type.Unknown()]),
  }),
  response: Type.Partial(
    Type.Object({
      ID: Type.String(),
      Warning: Type.String(),
    }),
  ),
});

export type get_ServiceInspect = Static<typeof get_ServiceInspect>;
export const get_ServiceInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/services/{id}"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        insertDefaults: Type.Boolean(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Service,
});

export type delete_ServiceDelete = Static<typeof delete_ServiceDelete>;
export const delete_ServiceDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/services/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ServiceUpdate = Static<typeof post_ServiceUpdate>;
export const post_ServiceUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/services/{id}/update"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
      registryAuthFrom: Type.Union([Type.Literal("spec"), Type.Literal("previous-spec")]),
      rollback: Type.String(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
    header: Type.Partial(
      Type.Object({
        "X-Registry-Auth": Type.String(),
      }),
    ),
    body: Type.Intersect([ServiceSpec, Type.Unknown()]),
  }),
  response: ServiceUpdateResponse,
});

export type get_ServiceLogs = Static<typeof get_ServiceLogs>;
export const get_ServiceLogs = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/services/{id}/logs"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        details: Type.Boolean(),
        follow: Type.Boolean(),
        stdout: Type.Boolean(),
        stderr: Type.Boolean(),
        since: Type.Number(),
        timestamps: Type.Boolean(),
        tail: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_TaskList = Static<typeof get_TaskList>;
export const get_TaskList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Task),
});

export type get_TaskInspect = Static<typeof get_TaskInspect>;
export const get_TaskInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Task,
});

export type get_TaskLogs = Static<typeof get_TaskLogs>;
export const get_TaskLogs = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks/{id}/logs"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        details: Type.Boolean(),
        follow: Type.Boolean(),
        stdout: Type.Boolean(),
        stderr: Type.Boolean(),
        since: Type.Number(),
        timestamps: Type.Boolean(),
        tail: Type.String(),
      }),
    ),
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type get_SecretList = Static<typeof get_SecretList>;
export const get_SecretList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/secrets"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Secret),
});

export type post_SecretCreate = Static<typeof post_SecretCreate>;
export const post_SecretCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/secrets/create"),
  parameters: Type.Object({
    body: Type.Intersect([SecretSpec, Type.Unknown()]),
  }),
  response: IdResponse,
});

export type get_SecretInspect = Static<typeof get_SecretInspect>;
export const get_SecretInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/secrets/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Secret,
});

export type delete_SecretDelete = Static<typeof delete_SecretDelete>;
export const delete_SecretDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/secrets/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_SecretUpdate = Static<typeof post_SecretUpdate>;
export const post_SecretUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/secrets/{id}/update"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
    body: SecretSpec,
  }),
  response: Type.Unknown(),
});

export type get_ConfigList = Static<typeof get_ConfigList>;
export const get_ConfigList = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/configs"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        filters: Type.String(),
      }),
    ),
  }),
  response: Type.Array(Config),
});

export type post_ConfigCreate = Static<typeof post_ConfigCreate>;
export const post_ConfigCreate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/configs/create"),
  parameters: Type.Object({
    body: Type.Intersect([ConfigSpec, Type.Unknown()]),
  }),
  response: IdResponse,
});

export type get_ConfigInspect = Static<typeof get_ConfigInspect>;
export const get_ConfigInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/configs/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Config,
});

export type delete_ConfigDelete = Static<typeof delete_ConfigDelete>;
export const delete_ConfigDelete = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/configs/{id}"),
  parameters: Type.Object({
    path: Type.Object({
      id: Type.String(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_ConfigUpdate = Static<typeof post_ConfigUpdate>;
export const post_ConfigUpdate = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/configs/{id}/update"),
  parameters: Type.Object({
    query: Type.Object({
      version: Type.Number(),
    }),
    path: Type.Object({
      id: Type.String(),
    }),
    body: ConfigSpec,
  }),
  response: Type.Unknown(),
});

export type get_DistributionInspect = Static<typeof get_DistributionInspect>;
export const get_DistributionInspect = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/distribution/{name}/json"),
  parameters: Type.Object({
    path: Type.Object({
      name: Type.String(),
    }),
  }),
  response: DistributionInspect,
});

export type post_Session = Static<typeof post_Session>;
export const post_Session = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/session"),
  parameters: Type.Never(),
  response: Type.Unknown(),
});

type __ENDPOINTS_END__ = Static<typeof __ENDPOINTS_END__>;
const __ENDPOINTS_END__ = Type.Object({});

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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
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
