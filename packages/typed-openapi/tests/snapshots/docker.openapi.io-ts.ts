import t from "io-ts";

export type Port = t.TypeOf<typeof Port>;
export const Port = t.type({
  IP: t.union([t.undefined, t.union([t.string, t.undefined])]),
  PrivatePort: t.number,
  PublicPort: t.union([t.undefined, t.union([t.number, t.undefined])]),
  Type: t.union([t.literal("tcp"), t.literal("udp"), t.literal("sctp")]),
});

export type MountPoint = t.TypeOf<typeof MountPoint>;
export const MountPoint = t.type({
  Type: t.union([
    t.undefined,
    t.union([t.literal("bind"), t.literal("volume"), t.literal("tmpfs"), t.literal("npipe"), t.literal("cluster")]),
  ]),
  Name: t.union([t.undefined, t.string]),
  Source: t.union([t.undefined, t.string]),
  Destination: t.union([t.undefined, t.string]),
  Driver: t.union([t.undefined, t.string]),
  Mode: t.union([t.undefined, t.string]),
  RW: t.union([t.undefined, t.boolean]),
  Propagation: t.union([t.undefined, t.string]),
});

export type DeviceMapping = t.TypeOf<typeof DeviceMapping>;
export const DeviceMapping = t.type({
  PathOnHost: t.union([t.undefined, t.string]),
  PathInContainer: t.union([t.undefined, t.string]),
  CgroupPermissions: t.union([t.undefined, t.string]),
});

export type DeviceRequest = t.TypeOf<typeof DeviceRequest>;
export const DeviceRequest = t.type({
  Driver: t.union([t.undefined, t.string]),
  Count: t.union([t.undefined, t.number]),
  DeviceIDs: t.union([t.undefined, t.array(t.string)]),
  Capabilities: t.union([t.undefined, t.array(t.array(t.string))]),
  Options: t.union([t.undefined, t.unknown]),
});

export type ThrottleDevice = t.TypeOf<typeof ThrottleDevice>;
export const ThrottleDevice = t.type({
  Path: t.union([t.undefined, t.string]),
  Rate: t.union([t.undefined, t.number]),
});

export type Mount = t.TypeOf<typeof Mount>;
export const Mount = t.type({
  Target: t.union([t.undefined, t.string]),
  Source: t.union([t.undefined, t.string]),
  Type: t.union([
    t.undefined,
    t.union([t.literal("bind"), t.literal("volume"), t.literal("tmpfs"), t.literal("npipe"), t.literal("cluster")]),
  ]),
  ReadOnly: t.union([t.undefined, t.boolean]),
  Consistency: t.union([t.undefined, t.string]),
  BindOptions: t.union([
    t.undefined,
    t.type({
      Propagation: t.union([
        t.undefined,
        t.union([
          t.literal("private"),
          t.literal("rprivate"),
          t.literal("shared"),
          t.literal("rshared"),
          t.literal("slave"),
          t.literal("rslave"),
        ]),
      ]),
      NonRecursive: t.union([t.undefined, t.boolean]),
      CreateMountpoint: t.union([t.undefined, t.boolean]),
    }),
  ]),
  VolumeOptions: t.union([
    t.undefined,
    t.type({
      NoCopy: t.union([t.undefined, t.boolean]),
      Labels: t.union([t.undefined, t.unknown]),
      DriverConfig: t.union([
        t.undefined,
        t.type({
          Name: t.union([t.undefined, t.string]),
          Options: t.union([t.undefined, t.unknown]),
        }),
      ]),
    }),
  ]),
  TmpfsOptions: t.union([
    t.undefined,
    t.type({
      SizeBytes: t.union([t.undefined, t.number]),
      Mode: t.union([t.undefined, t.number]),
    }),
  ]),
});

export type RestartPolicy = t.TypeOf<typeof RestartPolicy>;
export const RestartPolicy = t.type({
  Name: t.union([
    t.undefined,
    t.union([
      t.literal(""),
      t.literal("no"),
      t.literal("always"),
      t.literal("unless-stopped"),
      t.literal("on-failure"),
    ]),
  ]),
  MaximumRetryCount: t.union([t.undefined, t.number]),
});

export type Resources = t.TypeOf<typeof Resources>;
export const Resources = t.type({
  CpuShares: t.union([t.undefined, t.number]),
  Memory: t.union([t.undefined, t.number]),
  CgroupParent: t.union([t.undefined, t.string]),
  BlkioWeight: t.union([t.undefined, t.number]),
  BlkioWeightDevice: t.union([
    t.undefined,
    t.array(
      t.type({
        Path: t.union([t.undefined, t.string]),
        Weight: t.union([t.undefined, t.number]),
      }),
    ),
  ]),
  BlkioDeviceReadBps: t.union([t.undefined, t.array(ThrottleDevice)]),
  BlkioDeviceWriteBps: t.union([t.undefined, t.array(ThrottleDevice)]),
  BlkioDeviceReadIOps: t.union([t.undefined, t.array(ThrottleDevice)]),
  BlkioDeviceWriteIOps: t.union([t.undefined, t.array(ThrottleDevice)]),
  CpuPeriod: t.union([t.undefined, t.number]),
  CpuQuota: t.union([t.undefined, t.number]),
  CpuRealtimePeriod: t.union([t.undefined, t.number]),
  CpuRealtimeRuntime: t.union([t.undefined, t.number]),
  CpusetCpus: t.union([t.undefined, t.string]),
  CpusetMems: t.union([t.undefined, t.string]),
  Devices: t.union([t.undefined, t.array(DeviceMapping)]),
  DeviceCgroupRules: t.union([t.undefined, t.array(t.string)]),
  DeviceRequests: t.union([t.undefined, t.array(DeviceRequest)]),
  KernelMemoryTCP: t.union([t.undefined, t.number]),
  MemoryReservation: t.union([t.undefined, t.number]),
  MemorySwap: t.union([t.undefined, t.number]),
  MemorySwappiness: t.union([t.undefined, t.number]),
  NanoCpus: t.union([t.undefined, t.number]),
  OomKillDisable: t.union([t.undefined, t.boolean]),
  Init: t.union([t.undefined, t.union([t.boolean, t.null])]),
  PidsLimit: t.union([t.undefined, t.union([t.number, t.null])]),
  Ulimits: t.union([
    t.undefined,
    t.array(
      t.type({
        Name: t.union([t.undefined, t.string]),
        Soft: t.union([t.undefined, t.number]),
        Hard: t.union([t.undefined, t.number]),
      }),
    ),
  ]),
  CpuCount: t.union([t.undefined, t.number]),
  CpuPercent: t.union([t.undefined, t.number]),
  IOMaximumIOps: t.union([t.undefined, t.number]),
  IOMaximumBandwidth: t.union([t.undefined, t.number]),
});

export type Limit = t.TypeOf<typeof Limit>;
export const Limit = t.type({
  NanoCPUs: t.union([t.undefined, t.number]),
  MemoryBytes: t.union([t.undefined, t.number]),
  Pids: t.union([t.undefined, t.number]),
});

export type GenericResources = t.TypeOf<typeof GenericResources>;
export const GenericResources = t.array(
  t.type({
    NamedResourceSpec: t.union([
      t.undefined,
      t.type({
        Kind: t.union([t.undefined, t.string]),
        Value: t.union([t.undefined, t.string]),
      }),
    ]),
    DiscreteResourceSpec: t.union([
      t.undefined,
      t.type({
        Kind: t.union([t.undefined, t.string]),
        Value: t.union([t.undefined, t.number]),
      }),
    ]),
  }),
);

export type ResourceObject = t.TypeOf<typeof ResourceObject>;
export const ResourceObject = t.type({
  NanoCPUs: t.union([t.undefined, t.number]),
  MemoryBytes: t.union([t.undefined, t.number]),
  GenericResources: t.union([t.undefined, GenericResources]),
});

export type HealthConfig = t.TypeOf<typeof HealthConfig>;
export const HealthConfig = t.type({
  Test: t.union([t.undefined, t.array(t.string)]),
  Interval: t.union([t.undefined, t.number]),
  Timeout: t.union([t.undefined, t.number]),
  Retries: t.union([t.undefined, t.number]),
  StartPeriod: t.union([t.undefined, t.number]),
});

export type HealthcheckResult = t.TypeOf<typeof HealthcheckResult>;
export const HealthcheckResult = t.union([
  t.type({
    Start: t.union([t.undefined, t.string]),
    End: t.union([t.undefined, t.string]),
    ExitCode: t.union([t.undefined, t.number]),
    Output: t.union([t.undefined, t.string]),
  }),
  t.null,
]);

export type Health = t.TypeOf<typeof Health>;
export const Health = t.union([
  t.type({
    Status: t.union([
      t.undefined,
      t.union([t.literal("none"), t.literal("starting"), t.literal("healthy"), t.literal("unhealthy")]),
    ]),
    FailingStreak: t.union([t.undefined, t.number]),
    Log: t.union([t.undefined, t.array(HealthcheckResult)]),
  }),
  t.null,
]);

export type PortBinding = t.TypeOf<typeof PortBinding>;
export const PortBinding = t.type({
  HostIp: t.union([t.undefined, t.string]),
  HostPort: t.union([t.undefined, t.string]),
});

export type PortMap = t.TypeOf<typeof PortMap>;
export const PortMap = t.unknown;

export type HostConfig = t.TypeOf<typeof HostConfig>;
export const HostConfig = t.intersection([
  Resources,
  t.type({
    Binds: t.union([t.undefined, t.array(t.string)]),
    ContainerIDFile: t.union([t.undefined, t.string]),
    LogConfig: t.union([
      t.undefined,
      t.type({
        Type: t.union([
          t.undefined,
          t.union([
            t.literal("json-file"),
            t.literal("syslog"),
            t.literal("journald"),
            t.literal("gelf"),
            t.literal("fluentd"),
            t.literal("awslogs"),
            t.literal("splunk"),
            t.literal("etwlogs"),
            t.literal("none"),
          ]),
        ]),
        Config: t.union([t.undefined, t.unknown]),
      }),
    ]),
    NetworkMode: t.union([t.undefined, t.string]),
    PortBindings: t.union([t.undefined, PortMap]),
    RestartPolicy: t.union([t.undefined, RestartPolicy]),
    AutoRemove: t.union([t.undefined, t.boolean]),
    VolumeDriver: t.union([t.undefined, t.string]),
    VolumesFrom: t.union([t.undefined, t.array(t.string)]),
    Mounts: t.union([t.undefined, t.array(Mount)]),
    ConsoleSize: t.union([t.undefined, t.union([t.array(t.number), t.null])]),
    Annotations: t.union([t.undefined, t.unknown]),
    CapAdd: t.union([t.undefined, t.array(t.string)]),
    CapDrop: t.union([t.undefined, t.array(t.string)]),
    CgroupnsMode: t.union([t.undefined, t.union([t.literal("private"), t.literal("host")])]),
    Dns: t.union([t.undefined, t.array(t.string)]),
    DnsOptions: t.union([t.undefined, t.array(t.string)]),
    DnsSearch: t.union([t.undefined, t.array(t.string)]),
    ExtraHosts: t.union([t.undefined, t.array(t.string)]),
    GroupAdd: t.union([t.undefined, t.array(t.string)]),
    IpcMode: t.union([t.undefined, t.string]),
    Cgroup: t.union([t.undefined, t.string]),
    Links: t.union([t.undefined, t.array(t.string)]),
    OomScoreAdj: t.union([t.undefined, t.number]),
    PidMode: t.union([t.undefined, t.string]),
    Privileged: t.union([t.undefined, t.boolean]),
    PublishAllPorts: t.union([t.undefined, t.boolean]),
    ReadonlyRootfs: t.union([t.undefined, t.boolean]),
    SecurityOpt: t.union([t.undefined, t.array(t.string)]),
    StorageOpt: t.union([t.undefined, t.unknown]),
    Tmpfs: t.union([t.undefined, t.unknown]),
    UTSMode: t.union([t.undefined, t.string]),
    UsernsMode: t.union([t.undefined, t.string]),
    ShmSize: t.union([t.undefined, t.number]),
    Sysctls: t.union([t.undefined, t.unknown]),
    Runtime: t.union([t.undefined, t.string]),
    Isolation: t.union([t.undefined, t.union([t.literal("default"), t.literal("process"), t.literal("hyperv")])]),
    MaskedPaths: t.union([t.undefined, t.array(t.string)]),
    ReadonlyPaths: t.union([t.undefined, t.array(t.string)]),
  }),
]);

export type ContainerConfig = t.TypeOf<typeof ContainerConfig>;
export const ContainerConfig = t.type({
  Hostname: t.union([t.undefined, t.string]),
  Domainname: t.union([t.undefined, t.string]),
  User: t.union([t.undefined, t.string]),
  AttachStdin: t.union([t.undefined, t.boolean]),
  AttachStdout: t.union([t.undefined, t.boolean]),
  AttachStderr: t.union([t.undefined, t.boolean]),
  ExposedPorts: t.union([t.undefined, t.union([t.unknown, t.null])]),
  Tty: t.union([t.undefined, t.boolean]),
  OpenStdin: t.union([t.undefined, t.boolean]),
  StdinOnce: t.union([t.undefined, t.boolean]),
  Env: t.union([t.undefined, t.array(t.string)]),
  Cmd: t.union([t.undefined, t.array(t.string)]),
  Healthcheck: t.union([t.undefined, HealthConfig]),
  ArgsEscaped: t.union([t.undefined, t.union([t.boolean, t.null])]),
  Image: t.union([t.undefined, t.string]),
  Volumes: t.union([t.undefined, t.unknown]),
  WorkingDir: t.union([t.undefined, t.string]),
  Entrypoint: t.union([t.undefined, t.array(t.string)]),
  NetworkDisabled: t.union([t.undefined, t.union([t.boolean, t.null])]),
  MacAddress: t.union([t.undefined, t.union([t.string, t.null])]),
  OnBuild: t.union([t.undefined, t.union([t.array(t.string), t.null])]),
  Labels: t.union([t.undefined, t.unknown]),
  StopSignal: t.union([t.undefined, t.union([t.string, t.null])]),
  StopTimeout: t.union([t.undefined, t.union([t.number, t.null])]),
  Shell: t.union([t.undefined, t.union([t.array(t.string), t.null])]),
});

export type EndpointIPAMConfig = t.TypeOf<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = t.union([
  t.type({
    IPv4Address: t.union([t.undefined, t.string]),
    IPv6Address: t.union([t.undefined, t.string]),
    LinkLocalIPs: t.union([t.undefined, t.array(t.string)]),
  }),
  t.null,
]);

export type EndpointSettings = t.TypeOf<typeof EndpointSettings>;
export const EndpointSettings = t.type({
  IPAMConfig: t.union([t.undefined, EndpointIPAMConfig]),
  Links: t.union([t.undefined, t.array(t.string)]),
  Aliases: t.union([t.undefined, t.array(t.string)]),
  NetworkID: t.union([t.undefined, t.string]),
  EndpointID: t.union([t.undefined, t.string]),
  Gateway: t.union([t.undefined, t.string]),
  IPAddress: t.union([t.undefined, t.string]),
  IPPrefixLen: t.union([t.undefined, t.number]),
  IPv6Gateway: t.union([t.undefined, t.string]),
  GlobalIPv6Address: t.union([t.undefined, t.string]),
  GlobalIPv6PrefixLen: t.union([t.undefined, t.number]),
  MacAddress: t.union([t.undefined, t.string]),
  DriverOpts: t.union([t.undefined, t.union([t.unknown, t.null])]),
});

export type NetworkingConfig = t.TypeOf<typeof NetworkingConfig>;
export const NetworkingConfig = t.type({
  EndpointsConfig: t.union([t.undefined, t.unknown]),
});

export type Address = t.TypeOf<typeof Address>;
export const Address = t.type({
  Addr: t.union([t.undefined, t.string]),
  PrefixLen: t.union([t.undefined, t.number]),
});

export type NetworkSettings = t.TypeOf<typeof NetworkSettings>;
export const NetworkSettings = t.type({
  Bridge: t.union([t.undefined, t.string]),
  SandboxID: t.union([t.undefined, t.string]),
  HairpinMode: t.union([t.undefined, t.boolean]),
  LinkLocalIPv6Address: t.union([t.undefined, t.string]),
  LinkLocalIPv6PrefixLen: t.union([t.undefined, t.number]),
  Ports: t.union([t.undefined, PortMap]),
  SandboxKey: t.union([t.undefined, t.string]),
  SecondaryIPAddresses: t.union([t.undefined, t.union([t.array(Address), t.null])]),
  SecondaryIPv6Addresses: t.union([t.undefined, t.union([t.array(Address), t.null])]),
  EndpointID: t.union([t.undefined, t.string]),
  Gateway: t.union([t.undefined, t.string]),
  GlobalIPv6Address: t.union([t.undefined, t.string]),
  GlobalIPv6PrefixLen: t.union([t.undefined, t.number]),
  IPAddress: t.union([t.undefined, t.string]),
  IPPrefixLen: t.union([t.undefined, t.number]),
  IPv6Gateway: t.union([t.undefined, t.string]),
  MacAddress: t.union([t.undefined, t.string]),
  Networks: t.union([t.undefined, t.unknown]),
});

export type GraphDriverData = t.TypeOf<typeof GraphDriverData>;
export const GraphDriverData = t.type({
  Name: t.string,
  Data: t.unknown,
});

export type ChangeType = t.TypeOf<typeof ChangeType>;
export const ChangeType = t.union([t.literal(0), t.literal(1), t.literal(2)]);

export type FilesystemChange = t.TypeOf<typeof FilesystemChange>;
export const FilesystemChange = t.type({
  Path: t.string,
  Kind: ChangeType,
});

export type ImageInspect = t.TypeOf<typeof ImageInspect>;
export const ImageInspect = t.type({
  Id: t.union([t.undefined, t.string]),
  RepoTags: t.union([t.undefined, t.array(t.string)]),
  RepoDigests: t.union([t.undefined, t.array(t.string)]),
  Parent: t.union([t.undefined, t.string]),
  Comment: t.union([t.undefined, t.string]),
  Created: t.union([t.undefined, t.string]),
  Container: t.union([t.undefined, t.string]),
  ContainerConfig: t.union([t.undefined, ContainerConfig]),
  DockerVersion: t.union([t.undefined, t.string]),
  Author: t.union([t.undefined, t.string]),
  Config: t.union([t.undefined, ContainerConfig]),
  Architecture: t.union([t.undefined, t.string]),
  Variant: t.union([t.undefined, t.union([t.string, t.null])]),
  Os: t.union([t.undefined, t.string]),
  OsVersion: t.union([t.undefined, t.union([t.string, t.null])]),
  Size: t.union([t.undefined, t.number]),
  VirtualSize: t.union([t.undefined, t.number]),
  GraphDriver: t.union([t.undefined, GraphDriverData]),
  RootFS: t.union([
    t.undefined,
    t.type({
      Type: t.string,
      Layers: t.union([t.undefined, t.union([t.array(t.string), t.undefined])]),
    }),
  ]),
  Metadata: t.union([
    t.undefined,
    t.type({
      LastTagTime: t.union([t.undefined, t.union([t.string, t.null])]),
    }),
  ]),
});

export type ImageSummary = t.TypeOf<typeof ImageSummary>;
export const ImageSummary = t.type({
  Id: t.string,
  ParentId: t.string,
  RepoTags: t.array(t.string),
  RepoDigests: t.array(t.string),
  Created: t.number,
  Size: t.number,
  SharedSize: t.number,
  VirtualSize: t.union([t.undefined, t.union([t.number, t.undefined])]),
  Labels: t.unknown,
  Containers: t.number,
});

export type AuthConfig = t.TypeOf<typeof AuthConfig>;
export const AuthConfig = t.type({
  username: t.union([t.undefined, t.string]),
  password: t.union([t.undefined, t.string]),
  email: t.union([t.undefined, t.string]),
  serveraddress: t.union([t.undefined, t.string]),
});

export type ProcessConfig = t.TypeOf<typeof ProcessConfig>;
export const ProcessConfig = t.type({
  privileged: t.union([t.undefined, t.boolean]),
  user: t.union([t.undefined, t.string]),
  tty: t.union([t.undefined, t.boolean]),
  entrypoint: t.union([t.undefined, t.string]),
  arguments: t.union([t.undefined, t.array(t.string)]),
});

export type ObjectVersion = t.TypeOf<typeof ObjectVersion>;
export const ObjectVersion = t.type({
  Index: t.union([t.undefined, t.number]),
});

export type Topology = t.TypeOf<typeof Topology>;
export const Topology = t.unknown;

export type ClusterVolumeSpec = t.TypeOf<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = t.type({
  Group: t.union([t.undefined, t.string]),
  AccessMode: t.union([
    t.undefined,
    t.type({
      Scope: t.union([t.undefined, t.union([t.literal("single"), t.literal("multi")])]),
      Sharing: t.union([
        t.undefined,
        t.union([t.literal("none"), t.literal("readonly"), t.literal("onewriter"), t.literal("all")]),
      ]),
      MountVolume: t.union([t.undefined, t.type({})]),
      Secrets: t.union([
        t.undefined,
        t.array(
          t.type({
            Key: t.union([t.undefined, t.string]),
            Secret: t.union([t.undefined, t.string]),
          }),
        ),
      ]),
      AccessibilityRequirements: t.union([
        t.undefined,
        t.type({
          Requisite: t.union([t.undefined, t.array(Topology)]),
          Preferred: t.union([t.undefined, t.array(Topology)]),
        }),
      ]),
      CapacityRange: t.union([
        t.undefined,
        t.type({
          RequiredBytes: t.union([t.undefined, t.number]),
          LimitBytes: t.union([t.undefined, t.number]),
        }),
      ]),
      Availability: t.union([t.undefined, t.union([t.literal("active"), t.literal("pause"), t.literal("drain")])]),
    }),
  ]),
});

export type ClusterVolume = t.TypeOf<typeof ClusterVolume>;
export const ClusterVolume = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Spec: t.union([t.undefined, ClusterVolumeSpec]),
  Info: t.union([
    t.undefined,
    t.type({
      CapacityBytes: t.union([t.undefined, t.number]),
      VolumeContext: t.union([t.undefined, t.unknown]),
      VolumeID: t.union([t.undefined, t.string]),
      AccessibleTopology: t.union([t.undefined, t.array(Topology)]),
    }),
  ]),
  PublishStatus: t.union([
    t.undefined,
    t.array(
      t.type({
        NodeID: t.union([t.undefined, t.string]),
        State: t.union([
          t.undefined,
          t.union([
            t.literal("pending-publish"),
            t.literal("published"),
            t.literal("pending-node-unpublish"),
            t.literal("pending-controller-unpublish"),
          ]),
        ]),
        PublishContext: t.union([t.undefined, t.unknown]),
      }),
    ),
  ]),
});

export type Volume = t.TypeOf<typeof Volume>;
export const Volume = t.type({
  Name: t.string,
  Driver: t.string,
  Mountpoint: t.string,
  CreatedAt: t.union([t.undefined, t.union([t.string, t.undefined])]),
  Status: t.union([t.undefined, t.union([t.unknown, t.undefined])]),
  Labels: t.unknown,
  Scope: t.union([t.literal("local"), t.literal("global")]),
  ClusterVolume: t.union([t.undefined, t.union([ClusterVolume, t.undefined])]),
  Options: t.unknown,
  UsageData: t.union([
    t.undefined,
    t.union([
      t.type({
        Size: t.number,
        RefCount: t.number,
      }),
      t.null,
      t.undefined,
    ]),
  ]),
});

export type VolumeCreateOptions = t.TypeOf<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = t.type({
  Name: t.union([t.undefined, t.string]),
  Driver: t.union([t.undefined, t.string]),
  DriverOpts: t.union([t.undefined, t.unknown]),
  Labels: t.union([t.undefined, t.unknown]),
  ClusterVolumeSpec: t.union([t.undefined, ClusterVolumeSpec]),
});

export type VolumeListResponse = t.TypeOf<typeof VolumeListResponse>;
export const VolumeListResponse = t.type({
  Volumes: t.union([t.undefined, t.array(Volume)]),
  Warnings: t.union([t.undefined, t.array(t.string)]),
});

export type IPAMConfig = t.TypeOf<typeof IPAMConfig>;
export const IPAMConfig = t.type({
  Subnet: t.union([t.undefined, t.string]),
  IPRange: t.union([t.undefined, t.string]),
  Gateway: t.union([t.undefined, t.string]),
  AuxiliaryAddresses: t.union([t.undefined, t.unknown]),
});

export type IPAM = t.TypeOf<typeof IPAM>;
export const IPAM = t.type({
  Driver: t.union([t.undefined, t.string]),
  Config: t.union([t.undefined, t.array(IPAMConfig)]),
  Options: t.union([t.undefined, t.unknown]),
});

export type NetworkContainer = t.TypeOf<typeof NetworkContainer>;
export const NetworkContainer = t.type({
  Name: t.union([t.undefined, t.string]),
  EndpointID: t.union([t.undefined, t.string]),
  MacAddress: t.union([t.undefined, t.string]),
  IPv4Address: t.union([t.undefined, t.string]),
  IPv6Address: t.union([t.undefined, t.string]),
});

export type Network = t.TypeOf<typeof Network>;
export const Network = t.type({
  Name: t.union([t.undefined, t.string]),
  Id: t.union([t.undefined, t.string]),
  Created: t.union([t.undefined, t.string]),
  Scope: t.union([t.undefined, t.string]),
  Driver: t.union([t.undefined, t.string]),
  EnableIPv6: t.union([t.undefined, t.boolean]),
  IPAM: t.union([t.undefined, IPAM]),
  Internal: t.union([t.undefined, t.boolean]),
  Attachable: t.union([t.undefined, t.boolean]),
  Ingress: t.union([t.undefined, t.boolean]),
  Containers: t.union([t.undefined, t.unknown]),
  Options: t.union([t.undefined, t.unknown]),
  Labels: t.union([t.undefined, t.unknown]),
});

export type ErrorDetail = t.TypeOf<typeof ErrorDetail>;
export const ErrorDetail = t.type({
  code: t.union([t.undefined, t.number]),
  message: t.union([t.undefined, t.string]),
});

export type ProgressDetail = t.TypeOf<typeof ProgressDetail>;
export const ProgressDetail = t.type({
  current: t.union([t.undefined, t.number]),
  total: t.union([t.undefined, t.number]),
});

export type ImageID = t.TypeOf<typeof ImageID>;
export const ImageID = t.type({
  ID: t.union([t.undefined, t.string]),
});

export type BuildInfo = t.TypeOf<typeof BuildInfo>;
export const BuildInfo = t.type({
  id: t.union([t.undefined, t.string]),
  stream: t.union([t.undefined, t.string]),
  error: t.union([t.undefined, t.string]),
  errorDetail: t.union([t.undefined, ErrorDetail]),
  status: t.union([t.undefined, t.string]),
  progress: t.union([t.undefined, t.string]),
  progressDetail: t.union([t.undefined, ProgressDetail]),
  aux: t.union([t.undefined, ImageID]),
});

export type BuildCache = t.TypeOf<typeof BuildCache>;
export const BuildCache = t.type({
  ID: t.union([t.undefined, t.string]),
  Parent: t.union([t.undefined, t.union([t.string, t.null])]),
  Parents: t.union([t.undefined, t.union([t.array(t.string), t.null])]),
  Type: t.union([
    t.undefined,
    t.union([
      t.literal("internal"),
      t.literal("frontend"),
      t.literal("source.local"),
      t.literal("source.git.checkout"),
      t.literal("exec.cachemount"),
      t.literal("regular"),
    ]),
  ]),
  Description: t.union([t.undefined, t.string]),
  InUse: t.union([t.undefined, t.boolean]),
  Shared: t.union([t.undefined, t.boolean]),
  Size: t.union([t.undefined, t.number]),
  CreatedAt: t.union([t.undefined, t.string]),
  LastUsedAt: t.union([t.undefined, t.union([t.string, t.null])]),
  UsageCount: t.union([t.undefined, t.number]),
});

export type CreateImageInfo = t.TypeOf<typeof CreateImageInfo>;
export const CreateImageInfo = t.type({
  id: t.union([t.undefined, t.string]),
  error: t.union([t.undefined, t.string]),
  errorDetail: t.union([t.undefined, ErrorDetail]),
  status: t.union([t.undefined, t.string]),
  progress: t.union([t.undefined, t.string]),
  progressDetail: t.union([t.undefined, ProgressDetail]),
});

export type PushImageInfo = t.TypeOf<typeof PushImageInfo>;
export const PushImageInfo = t.type({
  error: t.union([t.undefined, t.string]),
  status: t.union([t.undefined, t.string]),
  progress: t.union([t.undefined, t.string]),
  progressDetail: t.union([t.undefined, ProgressDetail]),
});

export type ErrorResponse = t.TypeOf<typeof ErrorResponse>;
export const ErrorResponse = t.type({
  message: t.string,
});

export type IdResponse = t.TypeOf<typeof IdResponse>;
export const IdResponse = t.type({
  Id: t.string,
});

export type PluginMount = t.TypeOf<typeof PluginMount>;
export const PluginMount = t.type({
  Name: t.string,
  Description: t.string,
  Settable: t.array(t.string),
  Source: t.string,
  Destination: t.string,
  Type: t.string,
  Options: t.array(t.string),
});

export type PluginDevice = t.TypeOf<typeof PluginDevice>;
export const PluginDevice = t.type({
  Name: t.string,
  Description: t.string,
  Settable: t.array(t.string),
  Path: t.string,
});

export type PluginEnv = t.TypeOf<typeof PluginEnv>;
export const PluginEnv = t.type({
  Name: t.string,
  Description: t.string,
  Settable: t.array(t.string),
  Value: t.string,
});

export type PluginInterfaceType = t.TypeOf<typeof PluginInterfaceType>;
export const PluginInterfaceType = t.type({
  Prefix: t.string,
  Capability: t.string,
  Version: t.string,
});

export type PluginPrivilege = t.TypeOf<typeof PluginPrivilege>;
export const PluginPrivilege = t.type({
  Name: t.union([t.undefined, t.string]),
  Description: t.union([t.undefined, t.string]),
  Value: t.union([t.undefined, t.array(t.string)]),
});

export type Plugin = t.TypeOf<typeof Plugin>;
export const Plugin = t.type({
  Id: t.union([t.undefined, t.union([t.string, t.undefined])]),
  Name: t.string,
  Enabled: t.boolean,
  Settings: t.type({
    Mounts: t.array(PluginMount),
    Env: t.array(t.string),
    Args: t.array(t.string),
    Devices: t.array(PluginDevice),
  }),
  PluginReference: t.union([t.undefined, t.union([t.string, t.undefined])]),
  Config: t.type({
    DockerVersion: t.union([t.undefined, t.union([t.string, t.undefined])]),
    Description: t.string,
    Documentation: t.string,
    Interface: t.type({
      Types: t.array(PluginInterfaceType),
      Socket: t.string,
      ProtocolScheme: t.union([t.undefined, t.union([t.literal(""), t.literal("moby.plugins.http/v1"), t.undefined])]),
    }),
    Entrypoint: t.array(t.string),
    WorkDir: t.string,
    User: t.union([
      t.undefined,
      t.union([
        t.type({
          UID: t.union([t.undefined, t.number]),
          GID: t.union([t.undefined, t.number]),
        }),
        t.undefined,
      ]),
    ]),
    Network: t.type({
      Type: t.string,
    }),
    Linux: t.type({
      Capabilities: t.array(t.string),
      AllowAllDevices: t.boolean,
      Devices: t.array(PluginDevice),
    }),
    PropagatedMount: t.string,
    IpcHost: t.boolean,
    PidHost: t.boolean,
    Mounts: t.array(PluginMount),
    Env: t.array(PluginEnv),
    Args: t.type({
      Name: t.string,
      Description: t.string,
      Settable: t.array(t.string),
      Value: t.array(t.string),
    }),
    rootfs: t.union([
      t.undefined,
      t.union([
        t.type({
          type: t.union([t.undefined, t.string]),
          diff_ids: t.union([t.undefined, t.array(t.string)]),
        }),
        t.undefined,
      ]),
    ]),
  }),
});

export type NodeSpec = t.TypeOf<typeof NodeSpec>;
export const NodeSpec = t.type({
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Role: t.union([t.undefined, t.union([t.literal("worker"), t.literal("manager")])]),
  Availability: t.union([t.undefined, t.union([t.literal("active"), t.literal("pause"), t.literal("drain")])]),
});

export type Platform = t.TypeOf<typeof Platform>;
export const Platform = t.type({
  Architecture: t.union([t.undefined, t.string]),
  OS: t.union([t.undefined, t.string]),
});

export type EngineDescription = t.TypeOf<typeof EngineDescription>;
export const EngineDescription = t.type({
  EngineVersion: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Plugins: t.union([
    t.undefined,
    t.array(
      t.type({
        Type: t.union([t.undefined, t.string]),
        Name: t.union([t.undefined, t.string]),
      }),
    ),
  ]),
});

export type TLSInfo = t.TypeOf<typeof TLSInfo>;
export const TLSInfo = t.type({
  TrustRoot: t.union([t.undefined, t.string]),
  CertIssuerSubject: t.union([t.undefined, t.string]),
  CertIssuerPublicKey: t.union([t.undefined, t.string]),
});

export type NodeDescription = t.TypeOf<typeof NodeDescription>;
export const NodeDescription = t.type({
  Hostname: t.union([t.undefined, t.string]),
  Platform: t.union([t.undefined, Platform]),
  Resources: t.union([t.undefined, ResourceObject]),
  Engine: t.union([t.undefined, EngineDescription]),
  TLSInfo: t.union([t.undefined, TLSInfo]),
});

export type NodeState = t.TypeOf<typeof NodeState>;
export const NodeState = t.union([
  t.literal("unknown"),
  t.literal("down"),
  t.literal("ready"),
  t.literal("disconnected"),
]);

export type NodeStatus = t.TypeOf<typeof NodeStatus>;
export const NodeStatus = t.type({
  State: t.union([t.undefined, NodeState]),
  Message: t.union([t.undefined, t.string]),
  Addr: t.union([t.undefined, t.string]),
});

export type Reachability = t.TypeOf<typeof Reachability>;
export const Reachability = t.union([t.literal("unknown"), t.literal("unreachable"), t.literal("reachable")]);

export type ManagerStatus = t.TypeOf<typeof ManagerStatus>;
export const ManagerStatus = t.union([
  t.type({
    Leader: t.union([t.undefined, t.boolean]),
    Reachability: t.union([t.undefined, Reachability]),
    Addr: t.union([t.undefined, t.string]),
  }),
  t.null,
]);

export type Node = t.TypeOf<typeof Node>;
export const Node = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Spec: t.union([t.undefined, NodeSpec]),
  Description: t.union([t.undefined, NodeDescription]),
  Status: t.union([t.undefined, NodeStatus]),
  ManagerStatus: t.union([t.undefined, ManagerStatus]),
});

export type SwarmSpec = t.TypeOf<typeof SwarmSpec>;
export const SwarmSpec = t.type({
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Orchestration: t.union([
    t.undefined,
    t.union([
      t.type({
        TaskHistoryRetentionLimit: t.union([t.undefined, t.number]),
      }),
      t.null,
    ]),
  ]),
  Raft: t.union([
    t.undefined,
    t.type({
      SnapshotInterval: t.union([t.undefined, t.number]),
      KeepOldSnapshots: t.union([t.undefined, t.number]),
      LogEntriesForSlowFollowers: t.union([t.undefined, t.number]),
      ElectionTick: t.union([t.undefined, t.number]),
      HeartbeatTick: t.union([t.undefined, t.number]),
    }),
  ]),
  Dispatcher: t.union([
    t.undefined,
    t.union([
      t.type({
        HeartbeatPeriod: t.union([t.undefined, t.number]),
      }),
      t.null,
    ]),
  ]),
  CAConfig: t.union([
    t.undefined,
    t.union([
      t.type({
        NodeCertExpiry: t.union([t.undefined, t.number]),
        ExternalCAs: t.union([
          t.undefined,
          t.array(
            t.type({
              Protocol: t.union([t.undefined, t.literal("cfssl")]),
              URL: t.union([t.undefined, t.string]),
              Options: t.union([t.undefined, t.unknown]),
              CACert: t.union([t.undefined, t.string]),
            }),
          ),
        ]),
        SigningCACert: t.union([t.undefined, t.string]),
        SigningCAKey: t.union([t.undefined, t.string]),
        ForceRotate: t.union([t.undefined, t.number]),
      }),
      t.null,
    ]),
  ]),
  EncryptionConfig: t.union([
    t.undefined,
    t.type({
      AutoLockManagers: t.union([t.undefined, t.boolean]),
    }),
  ]),
  TaskDefaults: t.union([
    t.undefined,
    t.type({
      LogDriver: t.union([
        t.undefined,
        t.type({
          Name: t.union([t.undefined, t.string]),
          Options: t.union([t.undefined, t.unknown]),
        }),
      ]),
    }),
  ]),
});

export type ClusterInfo = t.TypeOf<typeof ClusterInfo>;
export const ClusterInfo = t.union([
  t.type({
    ID: t.union([t.undefined, t.string]),
    Version: t.union([t.undefined, ObjectVersion]),
    CreatedAt: t.union([t.undefined, t.string]),
    UpdatedAt: t.union([t.undefined, t.string]),
    Spec: t.union([t.undefined, SwarmSpec]),
    TLSInfo: t.union([t.undefined, TLSInfo]),
    RootRotationInProgress: t.union([t.undefined, t.boolean]),
    DataPathPort: t.union([t.undefined, t.number]),
    DefaultAddrPool: t.union([t.undefined, t.array(t.string)]),
    SubnetSize: t.union([t.undefined, t.number]),
  }),
  t.null,
]);

export type JoinTokens = t.TypeOf<typeof JoinTokens>;
export const JoinTokens = t.type({
  Worker: t.union([t.undefined, t.string]),
  Manager: t.union([t.undefined, t.string]),
});

export type Swarm = t.TypeOf<typeof Swarm>;
export const Swarm = t.intersection([
  ClusterInfo,
  t.type({
    JoinTokens: t.union([t.undefined, JoinTokens]),
  }),
]);

export type NetworkAttachmentConfig = t.TypeOf<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = t.type({
  Target: t.union([t.undefined, t.string]),
  Aliases: t.union([t.undefined, t.array(t.string)]),
  DriverOpts: t.union([t.undefined, t.unknown]),
});

export type TaskSpec = t.TypeOf<typeof TaskSpec>;
export const TaskSpec = t.type({
  PluginSpec: t.union([
    t.undefined,
    t.type({
      Name: t.union([t.undefined, t.string]),
      Remote: t.union([t.undefined, t.string]),
      Disabled: t.union([t.undefined, t.boolean]),
      PluginPrivilege: t.union([t.undefined, t.array(PluginPrivilege)]),
    }),
  ]),
  ContainerSpec: t.union([
    t.undefined,
    t.type({
      Image: t.union([t.undefined, t.string]),
      Labels: t.union([t.undefined, t.unknown]),
      Command: t.union([t.undefined, t.array(t.string)]),
      Args: t.union([t.undefined, t.array(t.string)]),
      Hostname: t.union([t.undefined, t.string]),
      Env: t.union([t.undefined, t.array(t.string)]),
      Dir: t.union([t.undefined, t.string]),
      User: t.union([t.undefined, t.string]),
      Groups: t.union([t.undefined, t.array(t.string)]),
      Privileges: t.union([
        t.undefined,
        t.type({
          CredentialSpec: t.union([
            t.undefined,
            t.type({
              Config: t.union([t.undefined, t.string]),
              File: t.union([t.undefined, t.string]),
              Registry: t.union([t.undefined, t.string]),
            }),
          ]),
          SELinuxContext: t.union([
            t.undefined,
            t.type({
              Disable: t.union([t.undefined, t.boolean]),
              User: t.union([t.undefined, t.string]),
              Role: t.union([t.undefined, t.string]),
              Type: t.union([t.undefined, t.string]),
              Level: t.union([t.undefined, t.string]),
            }),
          ]),
        }),
      ]),
      TTY: t.union([t.undefined, t.boolean]),
      OpenStdin: t.union([t.undefined, t.boolean]),
      ReadOnly: t.union([t.undefined, t.boolean]),
      Mounts: t.union([t.undefined, t.array(Mount)]),
      StopSignal: t.union([t.undefined, t.string]),
      StopGracePeriod: t.union([t.undefined, t.number]),
      HealthCheck: t.union([t.undefined, HealthConfig]),
      Hosts: t.union([t.undefined, t.array(t.string)]),
      DNSConfig: t.union([
        t.undefined,
        t.type({
          Nameservers: t.union([t.undefined, t.array(t.string)]),
          Search: t.union([t.undefined, t.array(t.string)]),
          Options: t.union([t.undefined, t.array(t.string)]),
        }),
      ]),
      Secrets: t.union([
        t.undefined,
        t.array(
          t.type({
            File: t.union([
              t.undefined,
              t.type({
                Name: t.union([t.undefined, t.string]),
                UID: t.union([t.undefined, t.string]),
                GID: t.union([t.undefined, t.string]),
                Mode: t.union([t.undefined, t.number]),
              }),
            ]),
            SecretID: t.union([t.undefined, t.string]),
            SecretName: t.union([t.undefined, t.string]),
          }),
        ),
      ]),
      Configs: t.union([
        t.undefined,
        t.array(
          t.type({
            File: t.union([
              t.undefined,
              t.type({
                Name: t.union([t.undefined, t.string]),
                UID: t.union([t.undefined, t.string]),
                GID: t.union([t.undefined, t.string]),
                Mode: t.union([t.undefined, t.number]),
              }),
            ]),
            Runtime: t.union([t.undefined, t.type({})]),
            ConfigID: t.union([t.undefined, t.string]),
            ConfigName: t.union([t.undefined, t.string]),
          }),
        ),
      ]),
      Isolation: t.union([t.undefined, t.union([t.literal("default"), t.literal("process"), t.literal("hyperv")])]),
      Init: t.union([t.undefined, t.union([t.boolean, t.null])]),
      Sysctls: t.union([t.undefined, t.unknown]),
      CapabilityAdd: t.union([t.undefined, t.array(t.string)]),
      CapabilityDrop: t.union([t.undefined, t.array(t.string)]),
      Ulimits: t.union([
        t.undefined,
        t.array(
          t.type({
            Name: t.union([t.undefined, t.string]),
            Soft: t.union([t.undefined, t.number]),
            Hard: t.union([t.undefined, t.number]),
          }),
        ),
      ]),
    }),
  ]),
  NetworkAttachmentSpec: t.union([
    t.undefined,
    t.type({
      ContainerID: t.union([t.undefined, t.string]),
    }),
  ]),
  Resources: t.union([
    t.undefined,
    t.type({
      Limits: t.union([t.undefined, Limit]),
      Reservations: t.union([t.undefined, ResourceObject]),
    }),
  ]),
  RestartPolicy: t.union([
    t.undefined,
    t.type({
      Condition: t.union([t.undefined, t.union([t.literal("none"), t.literal("on-failure"), t.literal("any")])]),
      Delay: t.union([t.undefined, t.number]),
      MaxAttempts: t.union([t.undefined, t.number]),
      Window: t.union([t.undefined, t.number]),
    }),
  ]),
  Placement: t.union([
    t.undefined,
    t.type({
      Constraints: t.union([t.undefined, t.array(t.string)]),
      Preferences: t.union([
        t.undefined,
        t.array(
          t.type({
            Spread: t.union([
              t.undefined,
              t.type({
                SpreadDescriptor: t.union([t.undefined, t.string]),
              }),
            ]),
          }),
        ),
      ]),
      MaxReplicas: t.union([t.undefined, t.number]),
      Platforms: t.union([t.undefined, t.array(Platform)]),
    }),
  ]),
  ForceUpdate: t.union([t.undefined, t.number]),
  Runtime: t.union([t.undefined, t.string]),
  Networks: t.union([t.undefined, t.array(NetworkAttachmentConfig)]),
  LogDriver: t.union([
    t.undefined,
    t.type({
      Name: t.union([t.undefined, t.string]),
      Options: t.union([t.undefined, t.unknown]),
    }),
  ]),
});

export type TaskState = t.TypeOf<typeof TaskState>;
export const TaskState = t.union([
  t.literal("new"),
  t.literal("allocated"),
  t.literal("pending"),
  t.literal("assigned"),
  t.literal("accepted"),
  t.literal("preparing"),
  t.literal("ready"),
  t.literal("starting"),
  t.literal("running"),
  t.literal("complete"),
  t.literal("shutdown"),
  t.literal("failed"),
  t.literal("rejected"),
  t.literal("remove"),
  t.literal("orphaned"),
]);

export type Task = t.TypeOf<typeof Task>;
export const Task = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Spec: t.union([t.undefined, TaskSpec]),
  ServiceID: t.union([t.undefined, t.string]),
  Slot: t.union([t.undefined, t.number]),
  NodeID: t.union([t.undefined, t.string]),
  AssignedGenericResources: t.union([t.undefined, GenericResources]),
  Status: t.union([
    t.undefined,
    t.type({
      Timestamp: t.union([t.undefined, t.string]),
      State: t.union([t.undefined, TaskState]),
      Message: t.union([t.undefined, t.string]),
      Err: t.union([t.undefined, t.string]),
      ContainerStatus: t.union([
        t.undefined,
        t.type({
          ContainerID: t.union([t.undefined, t.string]),
          PID: t.union([t.undefined, t.number]),
          ExitCode: t.union([t.undefined, t.number]),
        }),
      ]),
    }),
  ]),
  DesiredState: t.union([t.undefined, TaskState]),
  JobIteration: t.union([t.undefined, ObjectVersion]),
});

export type EndpointPortConfig = t.TypeOf<typeof EndpointPortConfig>;
export const EndpointPortConfig = t.type({
  Name: t.union([t.undefined, t.string]),
  Protocol: t.union([t.undefined, t.union([t.literal("tcp"), t.literal("udp"), t.literal("sctp")])]),
  TargetPort: t.union([t.undefined, t.number]),
  PublishedPort: t.union([t.undefined, t.number]),
  PublishMode: t.union([t.undefined, t.union([t.literal("ingress"), t.literal("host")])]),
});

export type EndpointSpec = t.TypeOf<typeof EndpointSpec>;
export const EndpointSpec = t.type({
  Mode: t.union([t.undefined, t.union([t.literal("vip"), t.literal("dnsrr")])]),
  Ports: t.union([t.undefined, t.array(EndpointPortConfig)]),
});

export type ServiceSpec = t.TypeOf<typeof ServiceSpec>;
export const ServiceSpec = t.type({
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  TaskTemplate: t.union([t.undefined, TaskSpec]),
  Mode: t.union([
    t.undefined,
    t.type({
      Replicated: t.union([
        t.undefined,
        t.type({
          Replicas: t.union([t.undefined, t.number]),
        }),
      ]),
      Global: t.union([t.undefined, t.type({})]),
      ReplicatedJob: t.union([
        t.undefined,
        t.type({
          MaxConcurrent: t.union([t.undefined, t.number]),
          TotalCompletions: t.union([t.undefined, t.number]),
        }),
      ]),
      GlobalJob: t.union([t.undefined, t.type({})]),
    }),
  ]),
  UpdateConfig: t.union([
    t.undefined,
    t.type({
      Parallelism: t.union([t.undefined, t.number]),
      Delay: t.union([t.undefined, t.number]),
      FailureAction: t.union([
        t.undefined,
        t.union([t.literal("continue"), t.literal("pause"), t.literal("rollback")]),
      ]),
      Monitor: t.union([t.undefined, t.number]),
      MaxFailureRatio: t.union([t.undefined, t.number]),
      Order: t.union([t.undefined, t.union([t.literal("stop-first"), t.literal("start-first")])]),
    }),
  ]),
  RollbackConfig: t.union([
    t.undefined,
    t.type({
      Parallelism: t.union([t.undefined, t.number]),
      Delay: t.union([t.undefined, t.number]),
      FailureAction: t.union([t.undefined, t.union([t.literal("continue"), t.literal("pause")])]),
      Monitor: t.union([t.undefined, t.number]),
      MaxFailureRatio: t.union([t.undefined, t.number]),
      Order: t.union([t.undefined, t.union([t.literal("stop-first"), t.literal("start-first")])]),
    }),
  ]),
  Networks: t.union([t.undefined, t.array(NetworkAttachmentConfig)]),
  EndpointSpec: t.union([t.undefined, EndpointSpec]),
});

export type Service = t.TypeOf<typeof Service>;
export const Service = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Spec: t.union([t.undefined, ServiceSpec]),
  Endpoint: t.union([
    t.undefined,
    t.type({
      Spec: t.union([t.undefined, EndpointSpec]),
      Ports: t.union([t.undefined, t.array(EndpointPortConfig)]),
      VirtualIPs: t.union([
        t.undefined,
        t.array(
          t.type({
            NetworkID: t.union([t.undefined, t.string]),
            Addr: t.union([t.undefined, t.string]),
          }),
        ),
      ]),
    }),
  ]),
  UpdateStatus: t.union([
    t.undefined,
    t.type({
      State: t.union([t.undefined, t.union([t.literal("updating"), t.literal("paused"), t.literal("completed")])]),
      StartedAt: t.union([t.undefined, t.string]),
      CompletedAt: t.union([t.undefined, t.string]),
      Message: t.union([t.undefined, t.string]),
    }),
  ]),
  ServiceStatus: t.union([
    t.undefined,
    t.type({
      RunningTasks: t.union([t.undefined, t.number]),
      DesiredTasks: t.union([t.undefined, t.number]),
      CompletedTasks: t.union([t.undefined, t.number]),
    }),
  ]),
  JobStatus: t.union([
    t.undefined,
    t.type({
      JobIteration: t.union([t.undefined, ObjectVersion]),
      LastExecution: t.union([t.undefined, t.string]),
    }),
  ]),
});

export type ImageDeleteResponseItem = t.TypeOf<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = t.type({
  Untagged: t.union([t.undefined, t.string]),
  Deleted: t.union([t.undefined, t.string]),
});

export type ServiceUpdateResponse = t.TypeOf<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = t.type({
  Warnings: t.union([t.undefined, t.array(t.string)]),
});

export type ContainerSummary = t.TypeOf<typeof ContainerSummary>;
export const ContainerSummary = t.type({
  Id: t.union([t.undefined, t.string]),
  Names: t.union([t.undefined, t.array(t.string)]),
  Image: t.union([t.undefined, t.string]),
  ImageID: t.union([t.undefined, t.string]),
  Command: t.union([t.undefined, t.string]),
  Created: t.union([t.undefined, t.number]),
  Ports: t.union([t.undefined, t.array(Port)]),
  SizeRw: t.union([t.undefined, t.number]),
  SizeRootFs: t.union([t.undefined, t.number]),
  Labels: t.union([t.undefined, t.unknown]),
  State: t.union([t.undefined, t.string]),
  Status: t.union([t.undefined, t.string]),
  HostConfig: t.union([
    t.undefined,
    t.type({
      NetworkMode: t.union([t.undefined, t.string]),
    }),
  ]),
  NetworkSettings: t.union([
    t.undefined,
    t.type({
      Networks: t.union([t.undefined, t.unknown]),
    }),
  ]),
  Mounts: t.union([t.undefined, t.array(MountPoint)]),
});

export type Driver = t.TypeOf<typeof Driver>;
export const Driver = t.type({
  Name: t.string,
  Options: t.union([t.undefined, t.union([t.unknown, t.undefined])]),
});

export type SecretSpec = t.TypeOf<typeof SecretSpec>;
export const SecretSpec = t.type({
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Data: t.union([t.undefined, t.string]),
  Driver: t.union([t.undefined, Driver]),
  Templating: t.union([t.undefined, Driver]),
});

export type Secret = t.TypeOf<typeof Secret>;
export const Secret = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Spec: t.union([t.undefined, SecretSpec]),
});

export type ConfigSpec = t.TypeOf<typeof ConfigSpec>;
export const ConfigSpec = t.type({
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.unknown]),
  Data: t.union([t.undefined, t.string]),
  Templating: t.union([t.undefined, Driver]),
});

export type Config = t.TypeOf<typeof Config>;
export const Config = t.type({
  ID: t.union([t.undefined, t.string]),
  Version: t.union([t.undefined, ObjectVersion]),
  CreatedAt: t.union([t.undefined, t.string]),
  UpdatedAt: t.union([t.undefined, t.string]),
  Spec: t.union([t.undefined, ConfigSpec]),
});

export type ContainerState = t.TypeOf<typeof ContainerState>;
export const ContainerState = t.union([
  t.type({
    Status: t.union([
      t.undefined,
      t.union([
        t.literal("created"),
        t.literal("running"),
        t.literal("paused"),
        t.literal("restarting"),
        t.literal("removing"),
        t.literal("exited"),
        t.literal("dead"),
      ]),
    ]),
    Running: t.union([t.undefined, t.boolean]),
    Paused: t.union([t.undefined, t.boolean]),
    Restarting: t.union([t.undefined, t.boolean]),
    OOMKilled: t.union([t.undefined, t.boolean]),
    Dead: t.union([t.undefined, t.boolean]),
    Pid: t.union([t.undefined, t.number]),
    ExitCode: t.union([t.undefined, t.number]),
    Error: t.union([t.undefined, t.string]),
    StartedAt: t.union([t.undefined, t.string]),
    FinishedAt: t.union([t.undefined, t.string]),
    Health: t.union([t.undefined, Health]),
  }),
  t.null,
]);

export type ContainerCreateResponse = t.TypeOf<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = t.type({
  Id: t.string,
  Warnings: t.array(t.string),
});

export type ContainerWaitExitError = t.TypeOf<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = t.type({
  Message: t.union([t.undefined, t.string]),
});

export type ContainerWaitResponse = t.TypeOf<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = t.type({
  StatusCode: t.number,
  Error: t.union([t.undefined, t.union([ContainerWaitExitError, t.undefined])]),
});

export type SystemVersion = t.TypeOf<typeof SystemVersion>;
export const SystemVersion = t.type({
  Platform: t.union([
    t.undefined,
    t.type({
      Name: t.string,
    }),
  ]),
  Components: t.union([
    t.undefined,
    t.array(
      t.type({
        Name: t.string,
        Version: t.string,
        Details: t.union([t.undefined, t.union([t.type({}), t.null, t.undefined])]),
      }),
    ),
  ]),
  Version: t.union([t.undefined, t.string]),
  ApiVersion: t.union([t.undefined, t.string]),
  MinAPIVersion: t.union([t.undefined, t.string]),
  GitCommit: t.union([t.undefined, t.string]),
  GoVersion: t.union([t.undefined, t.string]),
  Os: t.union([t.undefined, t.string]),
  Arch: t.union([t.undefined, t.string]),
  KernelVersion: t.union([t.undefined, t.string]),
  Experimental: t.union([t.undefined, t.boolean]),
  BuildTime: t.union([t.undefined, t.string]),
});

export type PluginsInfo = t.TypeOf<typeof PluginsInfo>;
export const PluginsInfo = t.type({
  Volume: t.union([t.undefined, t.array(t.string)]),
  Network: t.union([t.undefined, t.array(t.string)]),
  Authorization: t.union([t.undefined, t.array(t.string)]),
  Log: t.union([t.undefined, t.array(t.string)]),
});

export type IndexInfo = t.TypeOf<typeof IndexInfo>;
export const IndexInfo = t.union([
  t.type({
    Name: t.union([t.undefined, t.string]),
    Mirrors: t.union([t.undefined, t.array(t.string)]),
    Secure: t.union([t.undefined, t.boolean]),
    Official: t.union([t.undefined, t.boolean]),
  }),
  t.null,
]);

export type RegistryServiceConfig = t.TypeOf<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = t.union([
  t.type({
    AllowNondistributableArtifactsCIDRs: t.union([t.undefined, t.array(t.string)]),
    AllowNondistributableArtifactsHostnames: t.union([t.undefined, t.array(t.string)]),
    InsecureRegistryCIDRs: t.union([t.undefined, t.array(t.string)]),
    IndexConfigs: t.union([t.undefined, t.unknown]),
    Mirrors: t.union([t.undefined, t.array(t.string)]),
  }),
  t.null,
]);

export type Runtime = t.TypeOf<typeof Runtime>;
export const Runtime = t.type({
  path: t.union([t.undefined, t.string]),
  runtimeArgs: t.union([t.undefined, t.union([t.array(t.string), t.null])]),
});

export type LocalNodeState = t.TypeOf<typeof LocalNodeState>;
export const LocalNodeState = t.union([
  t.literal(""),
  t.literal("inactive"),
  t.literal("pending"),
  t.literal("active"),
  t.literal("error"),
  t.literal("locked"),
]);

export type PeerNode = t.TypeOf<typeof PeerNode>;
export const PeerNode = t.type({
  NodeID: t.union([t.undefined, t.string]),
  Addr: t.union([t.undefined, t.string]),
});

export type SwarmInfo = t.TypeOf<typeof SwarmInfo>;
export const SwarmInfo = t.type({
  NodeID: t.union([t.undefined, t.string]),
  NodeAddr: t.union([t.undefined, t.string]),
  LocalNodeState: t.union([t.undefined, LocalNodeState]),
  ControlAvailable: t.union([t.undefined, t.boolean]),
  Error: t.union([t.undefined, t.string]),
  RemoteManagers: t.union([t.undefined, t.union([t.array(PeerNode), t.null])]),
  Nodes: t.union([t.undefined, t.union([t.number, t.null])]),
  Managers: t.union([t.undefined, t.union([t.number, t.null])]),
  Cluster: t.union([t.undefined, ClusterInfo]),
});

export type Commit = t.TypeOf<typeof Commit>;
export const Commit = t.type({
  ID: t.union([t.undefined, t.string]),
  Expected: t.union([t.undefined, t.string]),
});

export type SystemInfo = t.TypeOf<typeof SystemInfo>;
export const SystemInfo = t.type({
  ID: t.union([t.undefined, t.string]),
  Containers: t.union([t.undefined, t.number]),
  ContainersRunning: t.union([t.undefined, t.number]),
  ContainersPaused: t.union([t.undefined, t.number]),
  ContainersStopped: t.union([t.undefined, t.number]),
  Images: t.union([t.undefined, t.number]),
  Driver: t.union([t.undefined, t.string]),
  DriverStatus: t.union([t.undefined, t.array(t.array(t.string))]),
  DockerRootDir: t.union([t.undefined, t.string]),
  Plugins: t.union([t.undefined, PluginsInfo]),
  MemoryLimit: t.union([t.undefined, t.boolean]),
  SwapLimit: t.union([t.undefined, t.boolean]),
  KernelMemoryTCP: t.union([t.undefined, t.boolean]),
  CpuCfsPeriod: t.union([t.undefined, t.boolean]),
  CpuCfsQuota: t.union([t.undefined, t.boolean]),
  CPUShares: t.union([t.undefined, t.boolean]),
  CPUSet: t.union([t.undefined, t.boolean]),
  PidsLimit: t.union([t.undefined, t.boolean]),
  OomKillDisable: t.union([t.undefined, t.boolean]),
  IPv4Forwarding: t.union([t.undefined, t.boolean]),
  BridgeNfIptables: t.union([t.undefined, t.boolean]),
  BridgeNfIp6tables: t.union([t.undefined, t.boolean]),
  Debug: t.union([t.undefined, t.boolean]),
  NFd: t.union([t.undefined, t.number]),
  NGoroutines: t.union([t.undefined, t.number]),
  SystemTime: t.union([t.undefined, t.string]),
  LoggingDriver: t.union([t.undefined, t.string]),
  CgroupDriver: t.union([t.undefined, t.union([t.literal("cgroupfs"), t.literal("systemd"), t.literal("none")])]),
  CgroupVersion: t.union([t.undefined, t.union([t.literal("1"), t.literal("2")])]),
  NEventsListener: t.union([t.undefined, t.number]),
  KernelVersion: t.union([t.undefined, t.string]),
  OperatingSystem: t.union([t.undefined, t.string]),
  OSVersion: t.union([t.undefined, t.string]),
  OSType: t.union([t.undefined, t.string]),
  Architecture: t.union([t.undefined, t.string]),
  NCPU: t.union([t.undefined, t.number]),
  MemTotal: t.union([t.undefined, t.number]),
  IndexServerAddress: t.union([t.undefined, t.string]),
  RegistryConfig: t.union([t.undefined, RegistryServiceConfig]),
  GenericResources: t.union([t.undefined, GenericResources]),
  HttpProxy: t.union([t.undefined, t.string]),
  HttpsProxy: t.union([t.undefined, t.string]),
  NoProxy: t.union([t.undefined, t.string]),
  Name: t.union([t.undefined, t.string]),
  Labels: t.union([t.undefined, t.array(t.string)]),
  ExperimentalBuild: t.union([t.undefined, t.boolean]),
  ServerVersion: t.union([t.undefined, t.string]),
  Runtimes: t.union([t.undefined, t.unknown]),
  DefaultRuntime: t.union([t.undefined, t.string]),
  Swarm: t.union([t.undefined, SwarmInfo]),
  LiveRestoreEnabled: t.union([t.undefined, t.boolean]),
  Isolation: t.union([t.undefined, t.union([t.literal("default"), t.literal("hyperv"), t.literal("process")])]),
  InitBinary: t.union([t.undefined, t.string]),
  ContainerdCommit: t.union([t.undefined, Commit]),
  RuncCommit: t.union([t.undefined, Commit]),
  InitCommit: t.union([t.undefined, Commit]),
  SecurityOptions: t.union([t.undefined, t.array(t.string)]),
  ProductLicense: t.union([t.undefined, t.string]),
  DefaultAddressPools: t.union([
    t.undefined,
    t.array(
      t.type({
        Base: t.union([t.undefined, t.string]),
        Size: t.union([t.undefined, t.number]),
      }),
    ),
  ]),
  Warnings: t.union([t.undefined, t.array(t.string)]),
});

export type EventActor = t.TypeOf<typeof EventActor>;
export const EventActor = t.type({
  ID: t.union([t.undefined, t.string]),
  Attributes: t.union([t.undefined, t.unknown]),
});

export type EventMessage = t.TypeOf<typeof EventMessage>;
export const EventMessage = t.type({
  Type: t.union([
    t.undefined,
    t.union([
      t.literal("builder"),
      t.literal("config"),
      t.literal("container"),
      t.literal("daemon"),
      t.literal("image"),
      t.literal("network"),
      t.literal("node"),
      t.literal("plugin"),
      t.literal("secret"),
      t.literal("service"),
      t.literal("volume"),
    ]),
  ]),
  Action: t.union([t.undefined, t.string]),
  Actor: t.union([t.undefined, EventActor]),
  scope: t.union([t.undefined, t.union([t.literal("local"), t.literal("swarm")])]),
  time: t.union([t.undefined, t.number]),
  timeNano: t.union([t.undefined, t.number]),
});

export type OCIDescriptor = t.TypeOf<typeof OCIDescriptor>;
export const OCIDescriptor = t.type({
  mediaType: t.union([t.undefined, t.string]),
  digest: t.union([t.undefined, t.string]),
  size: t.union([t.undefined, t.number]),
});

export type OCIPlatform = t.TypeOf<typeof OCIPlatform>;
export const OCIPlatform = t.type({
  architecture: t.union([t.undefined, t.string]),
  os: t.union([t.undefined, t.string]),
  "os.version": t.union([t.undefined, t.string]),
  "os.features": t.union([t.undefined, t.array(t.string)]),
  variant: t.union([t.undefined, t.string]),
});

export type DistributionInspect = t.TypeOf<typeof DistributionInspect>;
export const DistributionInspect = t.type({
  Descriptor: OCIDescriptor,
  Platforms: t.array(OCIPlatform),
});

export type __ENDPOINTS_START__ = t.TypeOf<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = t.type({});

export type get_ContainerList = t.TypeOf<typeof get_ContainerList>;
export const get_ContainerList = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/json"),
  parameters: t.type({
    query: t.type({
      all: t.union([t.undefined, t.boolean]),
      limit: t.union([t.undefined, t.number]),
      size: t.union([t.undefined, t.boolean]),
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(ContainerSummary),
});

export type post_ContainerCreate = t.TypeOf<typeof post_ContainerCreate>;
export const post_ContainerCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/create"),
  parameters: t.type({
    query: t.type({
      name: t.union([t.undefined, t.string]),
      platform: t.union([t.undefined, t.string]),
    }),
    body: t.intersection([
      ContainerConfig,
      t.type({
        HostConfig: t.union([t.undefined, HostConfig]),
        NetworkingConfig: t.union([t.undefined, NetworkingConfig]),
      }),
    ]),
  }),
  response: ContainerCreateResponse,
});

export type get_ContainerInspect = t.TypeOf<typeof get_ContainerInspect>;
export const get_ContainerInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/json"),
  parameters: t.type({
    query: t.type({
      size: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.type({
    Id: t.union([t.undefined, t.string]),
    Created: t.union([t.undefined, t.string]),
    Path: t.union([t.undefined, t.string]),
    Args: t.union([t.undefined, t.array(t.string)]),
    State: t.union([t.undefined, ContainerState]),
    Image: t.union([t.undefined, t.string]),
    ResolvConfPath: t.union([t.undefined, t.string]),
    HostnamePath: t.union([t.undefined, t.string]),
    HostsPath: t.union([t.undefined, t.string]),
    LogPath: t.union([t.undefined, t.string]),
    Name: t.union([t.undefined, t.string]),
    RestartCount: t.union([t.undefined, t.number]),
    Driver: t.union([t.undefined, t.string]),
    Platform: t.union([t.undefined, t.string]),
    MountLabel: t.union([t.undefined, t.string]),
    ProcessLabel: t.union([t.undefined, t.string]),
    AppArmorProfile: t.union([t.undefined, t.string]),
    ExecIDs: t.union([t.undefined, t.union([t.array(t.string), t.null])]),
    HostConfig: t.union([t.undefined, HostConfig]),
    GraphDriver: t.union([t.undefined, GraphDriverData]),
    SizeRw: t.union([t.undefined, t.number]),
    SizeRootFs: t.union([t.undefined, t.number]),
    Mounts: t.union([t.undefined, t.array(MountPoint)]),
    Config: t.union([t.undefined, ContainerConfig]),
    NetworkSettings: t.union([t.undefined, NetworkSettings]),
  }),
});

export type get_ContainerTop = t.TypeOf<typeof get_ContainerTop>;
export const get_ContainerTop = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/top"),
  parameters: t.type({
    query: t.type({
      ps_args: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.type({
    Titles: t.union([t.undefined, t.array(t.string)]),
    Processes: t.union([t.undefined, t.array(t.array(t.string))]),
  }),
});

export type get_ContainerLogs = t.TypeOf<typeof get_ContainerLogs>;
export const get_ContainerLogs = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/logs"),
  parameters: t.type({
    query: t.type({
      follow: t.union([t.undefined, t.boolean]),
      stdout: t.union([t.undefined, t.boolean]),
      stderr: t.union([t.undefined, t.boolean]),
      since: t.union([t.undefined, t.number]),
      until: t.union([t.undefined, t.number]),
      timestamps: t.union([t.undefined, t.boolean]),
      tail: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ContainerChanges = t.TypeOf<typeof get_ContainerChanges>;
export const get_ContainerChanges = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/changes"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.array(FilesystemChange),
});

export type get_ContainerExport = t.TypeOf<typeof get_ContainerExport>;
export const get_ContainerExport = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/export"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ContainerStats = t.TypeOf<typeof get_ContainerStats>;
export const get_ContainerStats = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/stats"),
  parameters: t.type({
    query: t.type({
      stream: t.union([t.undefined, t.boolean]),
      "one-shot": t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerResize = t.TypeOf<typeof post_ContainerResize>;
export const post_ContainerResize = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/resize"),
  parameters: t.type({
    query: t.type({
      h: t.union([t.undefined, t.number]),
      w: t.union([t.undefined, t.number]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerStart = t.TypeOf<typeof post_ContainerStart>;
export const post_ContainerStart = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/start"),
  parameters: t.type({
    query: t.type({
      detachKeys: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerStop = t.TypeOf<typeof post_ContainerStop>;
export const post_ContainerStop = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/stop"),
  parameters: t.type({
    query: t.type({
      signal: t.union([t.undefined, t.string]),
      t: t.union([t.undefined, t.number]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerRestart = t.TypeOf<typeof post_ContainerRestart>;
export const post_ContainerRestart = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/restart"),
  parameters: t.type({
    query: t.type({
      signal: t.union([t.undefined, t.string]),
      t: t.union([t.undefined, t.number]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerKill = t.TypeOf<typeof post_ContainerKill>;
export const post_ContainerKill = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/kill"),
  parameters: t.type({
    query: t.type({
      signal: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerUpdate = t.TypeOf<typeof post_ContainerUpdate>;
export const post_ContainerUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/update"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
    body: t.intersection([
      Resources,
      t.type({
        RestartPolicy: t.union([t.undefined, RestartPolicy]),
      }),
    ]),
  }),
  response: t.type({
    Warnings: t.union([t.undefined, t.array(t.string)]),
  }),
});

export type post_ContainerRename = t.TypeOf<typeof post_ContainerRename>;
export const post_ContainerRename = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/rename"),
  parameters: t.type({
    query: t.type({
      name: t.string,
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerPause = t.TypeOf<typeof post_ContainerPause>;
export const post_ContainerPause = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/pause"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerUnpause = t.TypeOf<typeof post_ContainerUnpause>;
export const post_ContainerUnpause = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/unpause"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerAttach = t.TypeOf<typeof post_ContainerAttach>;
export const post_ContainerAttach = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/attach"),
  parameters: t.type({
    query: t.type({
      detachKeys: t.union([t.undefined, t.string]),
      logs: t.union([t.undefined, t.boolean]),
      stream: t.union([t.undefined, t.boolean]),
      stdin: t.union([t.undefined, t.boolean]),
      stdout: t.union([t.undefined, t.boolean]),
      stderr: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ContainerAttachWebsocket = t.TypeOf<typeof get_ContainerAttachWebsocket>;
export const get_ContainerAttachWebsocket = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/attach/ws"),
  parameters: t.type({
    query: t.type({
      detachKeys: t.union([t.undefined, t.string]),
      logs: t.union([t.undefined, t.boolean]),
      stream: t.union([t.undefined, t.boolean]),
      stdin: t.union([t.undefined, t.boolean]),
      stdout: t.union([t.undefined, t.boolean]),
      stderr: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerWait = t.TypeOf<typeof post_ContainerWait>;
export const post_ContainerWait = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/wait"),
  parameters: t.type({
    query: t.type({
      condition: t.union([
        t.undefined,
        t.union([t.literal("not-running"), t.literal("next-exit"), t.literal("removed")]),
      ]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: ContainerWaitResponse,
});

export type delete_ContainerDelete = t.TypeOf<typeof delete_ContainerDelete>;
export const delete_ContainerDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/containers/{id}"),
  parameters: t.type({
    query: t.type({
      v: t.union([t.undefined, t.boolean]),
      force: t.union([t.undefined, t.boolean]),
      link: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ContainerArchive = t.TypeOf<typeof get_ContainerArchive>;
export const get_ContainerArchive = t.type({
  method: t.literal("GET"),
  path: t.literal("/containers/{id}/archive"),
  parameters: t.type({
    query: t.type({
      path: t.string,
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type put_PutContainerArchive = t.TypeOf<typeof put_PutContainerArchive>;
export const put_PutContainerArchive = t.type({
  method: t.literal("PUT"),
  path: t.literal("/containers/{id}/archive"),
  parameters: t.type({
    query: t.type({
      path: t.string,
      noOverwriteDirNonDir: t.string,
      copyUIDGID: t.string,
    }),
    path: t.type({
      id: t.string,
    }),
    body: t.string,
  }),
  response: t.unknown,
});

export type head_ContainerArchiveInfo = t.TypeOf<typeof head_ContainerArchiveInfo>;
export const head_ContainerArchiveInfo = t.type({
  method: t.literal("HEAD"),
  path: t.literal("/containers/{id}/archive"),
  parameters: t.type({
    query: t.type({
      path: t.string,
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ContainerPrune = t.TypeOf<typeof post_ContainerPrune>;
export const post_ContainerPrune = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/prune"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.type({
    ContainersDeleted: t.union([t.undefined, t.array(t.string)]),
    SpaceReclaimed: t.union([t.undefined, t.number]),
  }),
});

export type get_ImageList = t.TypeOf<typeof get_ImageList>;
export const get_ImageList = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/json"),
  parameters: t.type({
    query: t.type({
      all: t.union([t.undefined, t.boolean]),
      filters: t.union([t.undefined, t.string]),
      "shared-size": t.union([t.undefined, t.boolean]),
      digests: t.union([t.undefined, t.boolean]),
    }),
  }),
  response: t.array(ImageSummary),
});

export type post_ImageBuild = t.TypeOf<typeof post_ImageBuild>;
export const post_ImageBuild = t.type({
  method: t.literal("POST"),
  path: t.literal("/build"),
  parameters: t.type({
    query: t.type({
      dockerfile: t.union([t.undefined, t.string]),
      t: t.union([t.undefined, t.string]),
      extrahosts: t.union([t.undefined, t.string]),
      remote: t.union([t.undefined, t.string]),
      q: t.union([t.undefined, t.boolean]),
      nocache: t.union([t.undefined, t.boolean]),
      cachefrom: t.union([t.undefined, t.string]),
      pull: t.union([t.undefined, t.string]),
      rm: t.union([t.undefined, t.boolean]),
      forcerm: t.union([t.undefined, t.boolean]),
      memory: t.union([t.undefined, t.number]),
      memswap: t.union([t.undefined, t.number]),
      cpushares: t.union([t.undefined, t.number]),
      cpusetcpus: t.union([t.undefined, t.string]),
      cpuperiod: t.union([t.undefined, t.number]),
      cpuquota: t.union([t.undefined, t.number]),
      buildargs: t.union([t.undefined, t.string]),
      shmsize: t.union([t.undefined, t.number]),
      squash: t.union([t.undefined, t.boolean]),
      labels: t.union([t.undefined, t.string]),
      networkmode: t.union([t.undefined, t.string]),
      platform: t.union([t.undefined, t.string]),
      target: t.union([t.undefined, t.string]),
      outputs: t.union([t.undefined, t.string]),
    }),
    header: t.type({
      "Content-type": t.union([t.undefined, t.literal("application/x-tar")]),
      "X-Registry-Config": t.union([t.undefined, t.string]),
    }),
    body: t.string,
  }),
  response: t.unknown,
});

export type post_BuildPrune = t.TypeOf<typeof post_BuildPrune>;
export const post_BuildPrune = t.type({
  method: t.literal("POST"),
  path: t.literal("/build/prune"),
  parameters: t.type({
    query: t.type({
      "keep-storage": t.union([t.undefined, t.number]),
      all: t.union([t.undefined, t.boolean]),
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.type({
    CachesDeleted: t.union([t.undefined, t.array(t.string)]),
    SpaceReclaimed: t.union([t.undefined, t.number]),
  }),
});

export type post_ImageCreate = t.TypeOf<typeof post_ImageCreate>;
export const post_ImageCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/images/create"),
  parameters: t.type({
    query: t.type({
      fromImage: t.union([t.undefined, t.string]),
      fromSrc: t.union([t.undefined, t.string]),
      repo: t.union([t.undefined, t.string]),
      tag: t.union([t.undefined, t.string]),
      message: t.union([t.undefined, t.string]),
      changes: t.union([t.undefined, t.array(t.string)]),
      platform: t.union([t.undefined, t.string]),
    }),
    header: t.type({
      "X-Registry-Auth": t.union([t.undefined, t.string]),
    }),
    body: t.string,
  }),
  response: t.unknown,
});

export type get_ImageInspect = t.TypeOf<typeof get_ImageInspect>;
export const get_ImageInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/{name}/json"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: ImageInspect,
});

export type get_ImageHistory = t.TypeOf<typeof get_ImageHistory>;
export const get_ImageHistory = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/{name}/history"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.array(
    t.type({
      Id: t.string,
      Created: t.number,
      CreatedBy: t.string,
      Tags: t.array(t.string),
      Size: t.number,
      Comment: t.string,
    }),
  ),
});

export type post_ImagePush = t.TypeOf<typeof post_ImagePush>;
export const post_ImagePush = t.type({
  method: t.literal("POST"),
  path: t.literal("/images/{name}/push"),
  parameters: t.type({
    query: t.type({
      tag: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      name: t.string,
    }),
    header: t.type({
      "X-Registry-Auth": t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ImageTag = t.TypeOf<typeof post_ImageTag>;
export const post_ImageTag = t.type({
  method: t.literal("POST"),
  path: t.literal("/images/{name}/tag"),
  parameters: t.type({
    query: t.type({
      repo: t.union([t.undefined, t.string]),
      tag: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type delete_ImageDelete = t.TypeOf<typeof delete_ImageDelete>;
export const delete_ImageDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/images/{name}"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
      noprune: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.array(ImageDeleteResponseItem),
});

export type get_ImageSearch = t.TypeOf<typeof get_ImageSearch>;
export const get_ImageSearch = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/search"),
  parameters: t.type({
    query: t.type({
      term: t.string,
      limit: t.number,
      filters: t.string,
    }),
  }),
  response: t.array(
    t.type({
      description: t.union([t.undefined, t.string]),
      is_official: t.union([t.undefined, t.boolean]),
      is_automated: t.union([t.undefined, t.boolean]),
      name: t.union([t.undefined, t.string]),
      star_count: t.union([t.undefined, t.number]),
    }),
  ),
});

export type post_ImagePrune = t.TypeOf<typeof post_ImagePrune>;
export const post_ImagePrune = t.type({
  method: t.literal("POST"),
  path: t.literal("/images/prune"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.type({
    ImagesDeleted: t.union([t.undefined, t.array(ImageDeleteResponseItem)]),
    SpaceReclaimed: t.union([t.undefined, t.number]),
  }),
});

export type post_SystemAuth = t.TypeOf<typeof post_SystemAuth>;
export const post_SystemAuth = t.type({
  method: t.literal("POST"),
  path: t.literal("/auth"),
  parameters: t.type({
    body: AuthConfig,
  }),
  response: t.unknown,
});

export type get_SystemInfo = t.TypeOf<typeof get_SystemInfo>;
export const get_SystemInfo = t.type({
  method: t.literal("GET"),
  path: t.literal("/info"),
  parameters: t.never,
  response: SystemInfo,
});

export type get_SystemVersion = t.TypeOf<typeof get_SystemVersion>;
export const get_SystemVersion = t.type({
  method: t.literal("GET"),
  path: t.literal("/version"),
  parameters: t.never,
  response: SystemVersion,
});

export type get_SystemPing = t.TypeOf<typeof get_SystemPing>;
export const get_SystemPing = t.type({
  method: t.literal("GET"),
  path: t.literal("/_ping"),
  parameters: t.never,
  response: t.unknown,
});

export type head_SystemPingHead = t.TypeOf<typeof head_SystemPingHead>;
export const head_SystemPingHead = t.type({
  method: t.literal("HEAD"),
  path: t.literal("/_ping"),
  parameters: t.never,
  response: t.unknown,
});

export type post_ImageCommit = t.TypeOf<typeof post_ImageCommit>;
export const post_ImageCommit = t.type({
  method: t.literal("POST"),
  path: t.literal("/commit"),
  parameters: t.type({
    query: t.type({
      container: t.union([t.undefined, t.string]),
      repo: t.union([t.undefined, t.string]),
      tag: t.union([t.undefined, t.string]),
      comment: t.union([t.undefined, t.string]),
      author: t.union([t.undefined, t.string]),
      pause: t.union([t.undefined, t.boolean]),
      changes: t.union([t.undefined, t.string]),
    }),
    body: ContainerConfig,
  }),
  response: IdResponse,
});

export type get_SystemEvents = t.TypeOf<typeof get_SystemEvents>;
export const get_SystemEvents = t.type({
  method: t.literal("GET"),
  path: t.literal("/events"),
  parameters: t.type({
    query: t.type({
      since: t.union([t.undefined, t.string]),
      until: t.union([t.undefined, t.string]),
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: EventMessage,
});

export type get_SystemDataUsage = t.TypeOf<typeof get_SystemDataUsage>;
export const get_SystemDataUsage = t.type({
  method: t.literal("GET"),
  path: t.literal("/system/df"),
  parameters: t.type({
    query: t.type({
      type: t.union([
        t.undefined,
        t.array(t.union([t.literal("container"), t.literal("image"), t.literal("volume"), t.literal("build-cache")])),
      ]),
    }),
  }),
  response: t.type({
    LayersSize: t.union([t.undefined, t.number]),
    Images: t.union([t.undefined, t.array(ImageSummary)]),
    Containers: t.union([t.undefined, t.array(ContainerSummary)]),
    Volumes: t.union([t.undefined, t.array(Volume)]),
    BuildCache: t.union([t.undefined, t.array(BuildCache)]),
  }),
});

export type get_ImageGet = t.TypeOf<typeof get_ImageGet>;
export const get_ImageGet = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/{name}/get"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ImageGetAll = t.TypeOf<typeof get_ImageGetAll>;
export const get_ImageGetAll = t.type({
  method: t.literal("GET"),
  path: t.literal("/images/get"),
  parameters: t.type({
    query: t.type({
      names: t.union([t.undefined, t.array(t.string)]),
    }),
  }),
  response: t.unknown,
});

export type post_ImageLoad = t.TypeOf<typeof post_ImageLoad>;
export const post_ImageLoad = t.type({
  method: t.literal("POST"),
  path: t.literal("/images/load"),
  parameters: t.type({
    query: t.type({
      quiet: t.union([t.undefined, t.boolean]),
    }),
  }),
  response: t.unknown,
});

export type post_ContainerExec = t.TypeOf<typeof post_ContainerExec>;
export const post_ContainerExec = t.type({
  method: t.literal("POST"),
  path: t.literal("/containers/{id}/exec"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
    body: t.type({
      AttachStdin: t.union([t.undefined, t.boolean]),
      AttachStdout: t.union([t.undefined, t.boolean]),
      AttachStderr: t.union([t.undefined, t.boolean]),
      ConsoleSize: t.union([t.undefined, t.union([t.array(t.number), t.null])]),
      DetachKeys: t.union([t.undefined, t.string]),
      Tty: t.union([t.undefined, t.boolean]),
      Env: t.union([t.undefined, t.array(t.string)]),
      Cmd: t.union([t.undefined, t.array(t.string)]),
      Privileged: t.union([t.undefined, t.boolean]),
      User: t.union([t.undefined, t.string]),
      WorkingDir: t.union([t.undefined, t.string]),
    }),
  }),
  response: IdResponse,
});

export type post_ExecStart = t.TypeOf<typeof post_ExecStart>;
export const post_ExecStart = t.type({
  method: t.literal("POST"),
  path: t.literal("/exec/{id}/start"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
    body: t.type({
      Detach: t.union([t.undefined, t.boolean]),
      Tty: t.union([t.undefined, t.boolean]),
      ConsoleSize: t.union([t.undefined, t.union([t.array(t.number), t.null])]),
    }),
  }),
  response: t.unknown,
});

export type post_ExecResize = t.TypeOf<typeof post_ExecResize>;
export const post_ExecResize = t.type({
  method: t.literal("POST"),
  path: t.literal("/exec/{id}/resize"),
  parameters: t.type({
    query: t.type({
      h: t.union([t.undefined, t.number]),
      w: t.union([t.undefined, t.number]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_ExecInspect = t.TypeOf<typeof get_ExecInspect>;
export const get_ExecInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/exec/{id}/json"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.type({
    CanRemove: t.union([t.undefined, t.boolean]),
    DetachKeys: t.union([t.undefined, t.string]),
    ID: t.union([t.undefined, t.string]),
    Running: t.union([t.undefined, t.boolean]),
    ExitCode: t.union([t.undefined, t.number]),
    ProcessConfig: t.union([t.undefined, ProcessConfig]),
    OpenStdin: t.union([t.undefined, t.boolean]),
    OpenStderr: t.union([t.undefined, t.boolean]),
    OpenStdout: t.union([t.undefined, t.boolean]),
    ContainerID: t.union([t.undefined, t.string]),
    Pid: t.union([t.undefined, t.number]),
  }),
});

export type get_VolumeList = t.TypeOf<typeof get_VolumeList>;
export const get_VolumeList = t.type({
  method: t.literal("GET"),
  path: t.literal("/volumes"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: VolumeListResponse,
});

export type post_VolumeCreate = t.TypeOf<typeof post_VolumeCreate>;
export const post_VolumeCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/volumes/create"),
  parameters: t.type({
    body: VolumeCreateOptions,
  }),
  response: Volume,
});

export type get_VolumeInspect = t.TypeOf<typeof get_VolumeInspect>;
export const get_VolumeInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/volumes/{name}"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: Volume,
});

export type put_VolumeUpdate = t.TypeOf<typeof put_VolumeUpdate>;
export const put_VolumeUpdate = t.type({
  method: t.literal("PUT"),
  path: t.literal("/volumes/{name}"),
  parameters: t.type({
    query: t.type({
      version: t.number,
    }),
    path: t.type({
      name: t.string,
    }),
    body: t.type({
      Spec: t.union([t.undefined, ClusterVolumeSpec]),
    }),
  }),
  response: t.unknown,
});

export type delete_VolumeDelete = t.TypeOf<typeof delete_VolumeDelete>;
export const delete_VolumeDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/volumes/{name}"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_VolumePrune = t.TypeOf<typeof post_VolumePrune>;
export const post_VolumePrune = t.type({
  method: t.literal("POST"),
  path: t.literal("/volumes/prune"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.type({
    VolumesDeleted: t.union([t.undefined, t.array(t.string)]),
    SpaceReclaimed: t.union([t.undefined, t.number]),
  }),
});

export type get_NetworkList = t.TypeOf<typeof get_NetworkList>;
export const get_NetworkList = t.type({
  method: t.literal("GET"),
  path: t.literal("/networks"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Network),
});

export type get_NetworkInspect = t.TypeOf<typeof get_NetworkInspect>;
export const get_NetworkInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/networks/{id}"),
  parameters: t.type({
    query: t.type({
      verbose: t.union([t.undefined, t.boolean]),
      scope: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: Network,
});

export type delete_NetworkDelete = t.TypeOf<typeof delete_NetworkDelete>;
export const delete_NetworkDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/networks/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_NetworkCreate = t.TypeOf<typeof post_NetworkCreate>;
export const post_NetworkCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/networks/create"),
  parameters: t.type({
    body: t.type({
      Name: t.string,
      CheckDuplicate: t.union([t.undefined, t.union([t.boolean, t.undefined])]),
      Driver: t.union([t.undefined, t.union([t.string, t.undefined])]),
      Internal: t.union([t.undefined, t.union([t.boolean, t.undefined])]),
      Attachable: t.union([t.undefined, t.union([t.boolean, t.undefined])]),
      Ingress: t.union([t.undefined, t.union([t.boolean, t.undefined])]),
      IPAM: t.union([t.undefined, t.union([IPAM, t.undefined])]),
      EnableIPv6: t.union([t.undefined, t.union([t.boolean, t.undefined])]),
      Options: t.union([t.undefined, t.union([t.unknown, t.undefined])]),
      Labels: t.union([t.undefined, t.union([t.unknown, t.undefined])]),
    }),
  }),
  response: t.type({
    Id: t.union([t.undefined, t.string]),
    Warning: t.union([t.undefined, t.string]),
  }),
});

export type post_NetworkConnect = t.TypeOf<typeof post_NetworkConnect>;
export const post_NetworkConnect = t.type({
  method: t.literal("POST"),
  path: t.literal("/networks/{id}/connect"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
    body: t.type({
      Container: t.union([t.undefined, t.string]),
      EndpointConfig: t.union([t.undefined, EndpointSettings]),
    }),
  }),
  response: t.unknown,
});

export type post_NetworkDisconnect = t.TypeOf<typeof post_NetworkDisconnect>;
export const post_NetworkDisconnect = t.type({
  method: t.literal("POST"),
  path: t.literal("/networks/{id}/disconnect"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
    body: t.type({
      Container: t.union([t.undefined, t.string]),
      Force: t.union([t.undefined, t.boolean]),
    }),
  }),
  response: t.unknown,
});

export type post_NetworkPrune = t.TypeOf<typeof post_NetworkPrune>;
export const post_NetworkPrune = t.type({
  method: t.literal("POST"),
  path: t.literal("/networks/prune"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.type({
    NetworksDeleted: t.union([t.undefined, t.array(t.string)]),
  }),
});

export type get_PluginList = t.TypeOf<typeof get_PluginList>;
export const get_PluginList = t.type({
  method: t.literal("GET"),
  path: t.literal("/plugins"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Plugin),
});

export type get_GetPluginPrivileges = t.TypeOf<typeof get_GetPluginPrivileges>;
export const get_GetPluginPrivileges = t.type({
  method: t.literal("GET"),
  path: t.literal("/plugins/privileges"),
  parameters: t.type({
    query: t.type({
      remote: t.string,
    }),
  }),
  response: t.array(PluginPrivilege),
});

export type post_PluginPull = t.TypeOf<typeof post_PluginPull>;
export const post_PluginPull = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/pull"),
  parameters: t.type({
    query: t.type({
      remote: t.string,
      name: t.string,
    }),
    header: t.type({
      "X-Registry-Auth": t.union([t.undefined, t.string]),
    }),
    body: t.array(PluginPrivilege),
  }),
  response: t.unknown,
});

export type get_PluginInspect = t.TypeOf<typeof get_PluginInspect>;
export const get_PluginInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/plugins/{name}/json"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: Plugin,
});

export type delete_PluginDelete = t.TypeOf<typeof delete_PluginDelete>;
export const delete_PluginDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/plugins/{name}"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: Plugin,
});

export type post_PluginEnable = t.TypeOf<typeof post_PluginEnable>;
export const post_PluginEnable = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/{name}/enable"),
  parameters: t.type({
    query: t.type({
      timeout: t.union([t.undefined, t.number]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_PluginDisable = t.TypeOf<typeof post_PluginDisable>;
export const post_PluginDisable = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/{name}/disable"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_PluginUpgrade = t.TypeOf<typeof post_PluginUpgrade>;
export const post_PluginUpgrade = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/{name}/upgrade"),
  parameters: t.type({
    query: t.type({
      remote: t.string,
    }),
    path: t.type({
      name: t.string,
    }),
    header: t.type({
      "X-Registry-Auth": t.union([t.undefined, t.string]),
    }),
    body: t.array(PluginPrivilege),
  }),
  response: t.unknown,
});

export type post_PluginCreate = t.TypeOf<typeof post_PluginCreate>;
export const post_PluginCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/create"),
  parameters: t.type({
    query: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_PluginPush = t.TypeOf<typeof post_PluginPush>;
export const post_PluginPush = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/{name}/push"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_PluginSet = t.TypeOf<typeof post_PluginSet>;
export const post_PluginSet = t.type({
  method: t.literal("POST"),
  path: t.literal("/plugins/{name}/set"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
    body: t.array(t.string),
  }),
  response: t.unknown,
});

export type get_NodeList = t.TypeOf<typeof get_NodeList>;
export const get_NodeList = t.type({
  method: t.literal("GET"),
  path: t.literal("/nodes"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Node),
});

export type get_NodeInspect = t.TypeOf<typeof get_NodeInspect>;
export const get_NodeInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/nodes/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: Node,
});

export type delete_NodeDelete = t.TypeOf<typeof delete_NodeDelete>;
export const delete_NodeDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/nodes/{id}"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_NodeUpdate = t.TypeOf<typeof post_NodeUpdate>;
export const post_NodeUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/nodes/{id}/update"),
  parameters: t.type({
    query: t.type({
      version: t.number,
    }),
    path: t.type({
      id: t.string,
    }),
    body: NodeSpec,
  }),
  response: t.unknown,
});

export type get_SwarmInspect = t.TypeOf<typeof get_SwarmInspect>;
export const get_SwarmInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/swarm"),
  parameters: t.never,
  response: Swarm,
});

export type post_SwarmInit = t.TypeOf<typeof post_SwarmInit>;
export const post_SwarmInit = t.type({
  method: t.literal("POST"),
  path: t.literal("/swarm/init"),
  parameters: t.type({
    body: t.type({
      ListenAddr: t.union([t.undefined, t.string]),
      AdvertiseAddr: t.union([t.undefined, t.string]),
      DataPathAddr: t.union([t.undefined, t.string]),
      DataPathPort: t.union([t.undefined, t.number]),
      DefaultAddrPool: t.union([t.undefined, t.array(t.string)]),
      ForceNewCluster: t.union([t.undefined, t.boolean]),
      SubnetSize: t.union([t.undefined, t.number]),
      Spec: t.union([t.undefined, SwarmSpec]),
    }),
  }),
  response: t.string,
});

export type post_SwarmJoin = t.TypeOf<typeof post_SwarmJoin>;
export const post_SwarmJoin = t.type({
  method: t.literal("POST"),
  path: t.literal("/swarm/join"),
  parameters: t.type({
    body: t.type({
      ListenAddr: t.union([t.undefined, t.string]),
      AdvertiseAddr: t.union([t.undefined, t.string]),
      DataPathAddr: t.union([t.undefined, t.string]),
      RemoteAddrs: t.union([t.undefined, t.array(t.string)]),
      JoinToken: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.unknown,
});

export type post_SwarmLeave = t.TypeOf<typeof post_SwarmLeave>;
export const post_SwarmLeave = t.type({
  method: t.literal("POST"),
  path: t.literal("/swarm/leave"),
  parameters: t.type({
    query: t.type({
      force: t.union([t.undefined, t.boolean]),
    }),
  }),
  response: t.unknown,
});

export type post_SwarmUpdate = t.TypeOf<typeof post_SwarmUpdate>;
export const post_SwarmUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/swarm/update"),
  parameters: t.type({
    query: t.type({
      version: t.number,
      rotateWorkerToken: t.boolean,
      rotateManagerToken: t.boolean,
      rotateManagerUnlockKey: t.boolean,
    }),
    body: SwarmSpec,
  }),
  response: t.unknown,
});

export type get_SwarmUnlockkey = t.TypeOf<typeof get_SwarmUnlockkey>;
export const get_SwarmUnlockkey = t.type({
  method: t.literal("GET"),
  path: t.literal("/swarm/unlockkey"),
  parameters: t.never,
  response: t.type({
    UnlockKey: t.union([t.undefined, t.string]),
  }),
});

export type post_SwarmUnlock = t.TypeOf<typeof post_SwarmUnlock>;
export const post_SwarmUnlock = t.type({
  method: t.literal("POST"),
  path: t.literal("/swarm/unlock"),
  parameters: t.type({
    body: t.type({
      UnlockKey: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.unknown,
});

export type get_ServiceList = t.TypeOf<typeof get_ServiceList>;
export const get_ServiceList = t.type({
  method: t.literal("GET"),
  path: t.literal("/services"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
      status: t.union([t.undefined, t.boolean]),
    }),
  }),
  response: t.array(Service),
});

export type post_ServiceCreate = t.TypeOf<typeof post_ServiceCreate>;
export const post_ServiceCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/services/create"),
  parameters: t.type({
    header: t.type({
      "X-Registry-Auth": t.union([t.undefined, t.string]),
    }),
    body: t.intersection([ServiceSpec, t.unknown]),
  }),
  response: t.type({
    ID: t.union([t.undefined, t.string]),
    Warning: t.union([t.undefined, t.string]),
  }),
});

export type get_ServiceInspect = t.TypeOf<typeof get_ServiceInspect>;
export const get_ServiceInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/services/{id}"),
  parameters: t.type({
    query: t.type({
      insertDefaults: t.union([t.undefined, t.boolean]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: Service,
});

export type delete_ServiceDelete = t.TypeOf<typeof delete_ServiceDelete>;
export const delete_ServiceDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/services/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ServiceUpdate = t.TypeOf<typeof post_ServiceUpdate>;
export const post_ServiceUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/services/{id}/update"),
  parameters: t.type({
    query: t.type({
      version: t.number,
      registryAuthFrom: t.union([t.literal("spec"), t.literal("previous-spec")]),
      rollback: t.string,
    }),
    path: t.type({
      id: t.string,
    }),
    header: t.type({
      "X-Registry-Auth": t.union([t.undefined, t.string]),
    }),
    body: t.intersection([ServiceSpec, t.unknown]),
  }),
  response: ServiceUpdateResponse,
});

export type get_ServiceLogs = t.TypeOf<typeof get_ServiceLogs>;
export const get_ServiceLogs = t.type({
  method: t.literal("GET"),
  path: t.literal("/services/{id}/logs"),
  parameters: t.type({
    query: t.type({
      details: t.union([t.undefined, t.boolean]),
      follow: t.union([t.undefined, t.boolean]),
      stdout: t.union([t.undefined, t.boolean]),
      stderr: t.union([t.undefined, t.boolean]),
      since: t.union([t.undefined, t.number]),
      timestamps: t.union([t.undefined, t.boolean]),
      tail: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_TaskList = t.TypeOf<typeof get_TaskList>;
export const get_TaskList = t.type({
  method: t.literal("GET"),
  path: t.literal("/tasks"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Task),
});

export type get_TaskInspect = t.TypeOf<typeof get_TaskInspect>;
export const get_TaskInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/tasks/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: Task,
});

export type get_TaskLogs = t.TypeOf<typeof get_TaskLogs>;
export const get_TaskLogs = t.type({
  method: t.literal("GET"),
  path: t.literal("/tasks/{id}/logs"),
  parameters: t.type({
    query: t.type({
      details: t.union([t.undefined, t.boolean]),
      follow: t.union([t.undefined, t.boolean]),
      stdout: t.union([t.undefined, t.boolean]),
      stderr: t.union([t.undefined, t.boolean]),
      since: t.union([t.undefined, t.number]),
      timestamps: t.union([t.undefined, t.boolean]),
      tail: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type get_SecretList = t.TypeOf<typeof get_SecretList>;
export const get_SecretList = t.type({
  method: t.literal("GET"),
  path: t.literal("/secrets"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Secret),
});

export type post_SecretCreate = t.TypeOf<typeof post_SecretCreate>;
export const post_SecretCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/secrets/create"),
  parameters: t.type({
    body: t.intersection([SecretSpec, t.unknown]),
  }),
  response: IdResponse,
});

export type get_SecretInspect = t.TypeOf<typeof get_SecretInspect>;
export const get_SecretInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/secrets/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: Secret,
});

export type delete_SecretDelete = t.TypeOf<typeof delete_SecretDelete>;
export const delete_SecretDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/secrets/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_SecretUpdate = t.TypeOf<typeof post_SecretUpdate>;
export const post_SecretUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/secrets/{id}/update"),
  parameters: t.type({
    query: t.type({
      version: t.number,
    }),
    path: t.type({
      id: t.string,
    }),
    body: SecretSpec,
  }),
  response: t.unknown,
});

export type get_ConfigList = t.TypeOf<typeof get_ConfigList>;
export const get_ConfigList = t.type({
  method: t.literal("GET"),
  path: t.literal("/configs"),
  parameters: t.type({
    query: t.type({
      filters: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.array(Config),
});

export type post_ConfigCreate = t.TypeOf<typeof post_ConfigCreate>;
export const post_ConfigCreate = t.type({
  method: t.literal("POST"),
  path: t.literal("/configs/create"),
  parameters: t.type({
    body: t.intersection([ConfigSpec, t.unknown]),
  }),
  response: IdResponse,
});

export type get_ConfigInspect = t.TypeOf<typeof get_ConfigInspect>;
export const get_ConfigInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/configs/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: Config,
});

export type delete_ConfigDelete = t.TypeOf<typeof delete_ConfigDelete>;
export const delete_ConfigDelete = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/configs/{id}"),
  parameters: t.type({
    path: t.type({
      id: t.string,
    }),
  }),
  response: t.unknown,
});

export type post_ConfigUpdate = t.TypeOf<typeof post_ConfigUpdate>;
export const post_ConfigUpdate = t.type({
  method: t.literal("POST"),
  path: t.literal("/configs/{id}/update"),
  parameters: t.type({
    query: t.type({
      version: t.number,
    }),
    path: t.type({
      id: t.string,
    }),
    body: ConfigSpec,
  }),
  response: t.unknown,
});

export type get_DistributionInspect = t.TypeOf<typeof get_DistributionInspect>;
export const get_DistributionInspect = t.type({
  method: t.literal("GET"),
  path: t.literal("/distribution/{name}/json"),
  parameters: t.type({
    path: t.type({
      name: t.string,
    }),
  }),
  response: DistributionInspect,
});

export type post_Session = t.TypeOf<typeof post_Session>;
export const post_Session = t.type({
  method: t.literal("POST"),
  path: t.literal("/session"),
  parameters: t.never,
  response: t.unknown,
});

export type __ENDPOINTS_END__ = t.TypeOf<typeof __ENDPOINTS_END__>;
export const __ENDPOINTS_END__ = t.type({});

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
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
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
