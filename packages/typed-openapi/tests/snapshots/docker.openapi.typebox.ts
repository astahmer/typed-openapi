
  import { Type, type Static } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

// <Schemas>
export type Port = Static<typeof Port>;
export const Port = Type.Object({ IP: Type.Optional(Type.String({ format: "ip-address" })), PrivatePort: Type.Integer(), PublicPort: Type.Optional(Type.Integer()), Type: Type.Union([Type.Literal("tcp"), Type.Literal("udp"), Type.Literal("sctp")]) });

export type MountPoint = Static<typeof MountPoint>;
export const MountPoint = Type.Partial(Type.Object({ Type: Type.Union([Type.Literal("bind"), Type.Literal("volume"), Type.Literal("tmpfs"), Type.Literal("npipe"), Type.Literal("cluster")]), Name: Type.String(), Source: Type.String(), Destination: Type.String(), Driver: Type.String(), Mode: Type.String(), RW: Type.Boolean(), Propagation: Type.String() }));

export type DeviceMapping = Static<typeof DeviceMapping>;
export const DeviceMapping = Type.Partial(Type.Object({ PathOnHost: Type.String(), PathInContainer: Type.String(), CgroupPermissions: Type.String() }));

export type DeviceRequest = Static<typeof DeviceRequest>;
export const DeviceRequest = Type.Partial(Type.Object({ Driver: Type.String(), Count: Type.Integer(), DeviceIDs: Type.Array(Type.String()), Capabilities: Type.Array(Type.Array(Type.String())), Options: Type.Record(Type.String(), Type.String()) }));

export type ThrottleDevice = Static<typeof ThrottleDevice>;
export const ThrottleDevice = Type.Partial(Type.Object({ Path: Type.String(), Rate: Type.Integer({ minimum: 0 }) }));

export type Mount = Static<typeof Mount>;
export const Mount = Type.Partial(Type.Object({ Target: Type.String(), Source: Type.String(), Type: Type.Union([Type.Literal("bind"), Type.Literal("volume"), Type.Literal("tmpfs"), Type.Literal("npipe"), Type.Literal("cluster")]), ReadOnly: Type.Boolean(), Consistency: Type.String(), BindOptions: Type.Partial(Type.Object({ Propagation: Type.Union([Type.Literal("private"), Type.Literal("rprivate"), Type.Literal("shared"), Type.Literal("rshared"), Type.Literal("slave"), Type.Literal("rslave")]), NonRecursive: Type.Boolean(), CreateMountpoint: Type.Boolean() })), VolumeOptions: Type.Partial(Type.Object({ NoCopy: Type.Boolean(), Labels: Type.Record(Type.String(), Type.String()), DriverConfig: Type.Partial(Type.Object({ Name: Type.String(), Options: Type.Record(Type.String(), Type.String()) })) })), TmpfsOptions: Type.Partial(Type.Object({ SizeBytes: Type.Integer(), Mode: Type.Integer() })) }));

export type RestartPolicy = Static<typeof RestartPolicy>;
export const RestartPolicy = Type.Partial(Type.Object({ Name: Type.Union([Type.Literal(""), Type.Literal("no"), Type.Literal("always"), Type.Literal("unless-stopped"), Type.Literal("on-failure")]), MaximumRetryCount: Type.Integer() }));

export type Resources = Static<typeof Resources>;
export const Resources = Type.Partial(Type.Object({ CpuShares: Type.Integer(), Memory: Type.Integer(), CgroupParent: Type.String(), BlkioWeight: Type.Integer({ minimum: 0, maximum: 1000 }), BlkioWeightDevice: Type.Array(Type.Partial(Type.Object({ Path: Type.String(), Weight: Type.Integer({ minimum: 0 }) }))), BlkioDeviceReadBps: Type.Array(ThrottleDevice), BlkioDeviceWriteBps: Type.Array(ThrottleDevice), BlkioDeviceReadIOps: Type.Array(ThrottleDevice), BlkioDeviceWriteIOps: Type.Array(ThrottleDevice), CpuPeriod: Type.Integer(), CpuQuota: Type.Integer(), CpuRealtimePeriod: Type.Integer(), CpuRealtimeRuntime: Type.Integer(), CpusetCpus: Type.String(), CpusetMems: Type.String(), Devices: Type.Array(DeviceMapping), DeviceCgroupRules: Type.Array(Type.String()), DeviceRequests: Type.Array(DeviceRequest), KernelMemoryTCP: Type.Integer(), MemoryReservation: Type.Integer(), MemorySwap: Type.Integer(), MemorySwappiness: Type.Integer({ minimum: 0, maximum: 100 }), NanoCpus: Type.Integer(), OomKillDisable: Type.Boolean(), Init: Type.Union([Type.Boolean(), Type.Null()]), PidsLimit: Type.Union([Type.Integer(), Type.Null()]), Ulimits: Type.Array(Type.Partial(Type.Object({ Name: Type.String(), Soft: Type.Integer(), Hard: Type.Integer() }))), CpuCount: Type.Integer(), CpuPercent: Type.Integer(), IOMaximumIOps: Type.Integer(), IOMaximumBandwidth: Type.Integer() }));

export type Limit = Static<typeof Limit>;
export const Limit = Type.Partial(Type.Object({ NanoCPUs: Type.Integer(), MemoryBytes: Type.Integer(), Pids: Type.Integer() }));

export type GenericResources = Static<typeof GenericResources>;
export const GenericResources = Type.Array(Type.Partial(Type.Object({ NamedResourceSpec: Type.Partial(Type.Object({ Kind: Type.String(), Value: Type.String() })), DiscreteResourceSpec: Type.Partial(Type.Object({ Kind: Type.String(), Value: Type.Integer() })) })));

export type ResourceObject = Static<typeof ResourceObject>;
export const ResourceObject = Type.Partial(Type.Object({ NanoCPUs: Type.Integer(), MemoryBytes: Type.Integer(), GenericResources: GenericResources }));

export type HealthConfig = Static<typeof HealthConfig>;
export const HealthConfig = Type.Partial(Type.Object({ Test: Type.Array(Type.String()), Interval: Type.Integer(), Timeout: Type.Integer(), Retries: Type.Integer(), StartPeriod: Type.Integer() }));

export type HealthcheckResult = Static<typeof HealthcheckResult>;
export const HealthcheckResult = Type.Union([Type.Partial(Type.Object({ Start: Type.String({ format: "date-time" }), End: Type.String({ format: "dateTime" }), ExitCode: Type.Integer(), Output: Type.String() })), Type.Null()]);

export type Health = Static<typeof Health>;
export const Health = Type.Union([Type.Partial(Type.Object({ Status: Type.Union([Type.Literal("none"), Type.Literal("starting"), Type.Literal("healthy"), Type.Literal("unhealthy")]), FailingStreak: Type.Integer(), Log: Type.Array(HealthcheckResult) })), Type.Null()]);

export type PortBinding = Static<typeof PortBinding>;
export const PortBinding = Type.Partial(Type.Object({ HostIp: Type.String(), HostPort: Type.String() }));

export type PortMap = Static<typeof PortMap>;
export const PortMap = Type.Record(Type.String(), Type.Union([Type.Array(PortBinding), Type.Null()]));

export type HostConfig = Static<typeof HostConfig>;
export const HostConfig = Type.Intersect([Resources, Type.Partial(Type.Object({ Binds: Type.Array(Type.String()), ContainerIDFile: Type.String(), LogConfig: Type.Partial(Type.Object({ Type: Type.Union([Type.Literal("json-file"), Type.Literal("syslog"), Type.Literal("journald"), Type.Literal("gelf"), Type.Literal("fluentd"), Type.Literal("awslogs"), Type.Literal("splunk"), Type.Literal("etwlogs"), Type.Literal("none")]), Config: Type.Record(Type.String(), Type.String()) })), NetworkMode: Type.String(), PortBindings: PortMap, RestartPolicy: RestartPolicy, AutoRemove: Type.Boolean(), VolumeDriver: Type.String(), VolumesFrom: Type.Array(Type.String()), Mounts: Type.Array(Mount), ConsoleSize: Type.Union([Type.Array(Type.Integer({ minimum: 0 }), { minItems: 2, maxItems: 2 }), Type.Null()]), Annotations: Type.Record(Type.String(), Type.String()), CapAdd: Type.Array(Type.String()), CapDrop: Type.Array(Type.String()), CgroupnsMode: Type.Union([Type.Literal("private"), Type.Literal("host")]), Dns: Type.Array(Type.String()), DnsOptions: Type.Array(Type.String()), DnsSearch: Type.Array(Type.String()), ExtraHosts: Type.Array(Type.String()), GroupAdd: Type.Array(Type.String()), IpcMode: Type.String(), Cgroup: Type.String(), Links: Type.Array(Type.String()), OomScoreAdj: Type.Integer(), PidMode: Type.String(), Privileged: Type.Boolean(), PublishAllPorts: Type.Boolean(), ReadonlyRootfs: Type.Boolean(), SecurityOpt: Type.Array(Type.String()), StorageOpt: Type.Record(Type.String(), Type.String()), Tmpfs: Type.Record(Type.String(), Type.String()), UTSMode: Type.String(), UsernsMode: Type.String(), ShmSize: Type.Integer({ minimum: 0 }), Sysctls: Type.Record(Type.String(), Type.String()), Runtime: Type.String(), Isolation: Type.Union([Type.Literal("default"), Type.Literal("process"), Type.Literal("hyperv")]), MaskedPaths: Type.Array(Type.String()), ReadonlyPaths: Type.Array(Type.String()) }))]);

export type ContainerConfig = Static<typeof ContainerConfig>;
export const ContainerConfig = Type.Partial(Type.Object({ Hostname: Type.String(), Domainname: Type.String(), User: Type.String(), AttachStdin: Type.Boolean(), AttachStdout: Type.Boolean(), AttachStderr: Type.Boolean(), ExposedPorts: Type.Union([Type.Record(Type.String(), Type.Partial(Type.Object({  }))), Type.Null()]), Tty: Type.Boolean(), OpenStdin: Type.Boolean(), StdinOnce: Type.Boolean(), Env: Type.Array(Type.String()), Cmd: Type.Array(Type.String()), Healthcheck: HealthConfig, ArgsEscaped: Type.Union([Type.Boolean(), Type.Null()]), Image: Type.String(), Volumes: Type.Record(Type.String(), Type.Partial(Type.Object({  }))), WorkingDir: Type.String(), Entrypoint: Type.Array(Type.String()), NetworkDisabled: Type.Union([Type.Boolean(), Type.Null()]), MacAddress: Type.Union([Type.String(), Type.Null()]), OnBuild: Type.Union([Type.Array(Type.String()), Type.Null()]), Labels: Type.Record(Type.String(), Type.String()), StopSignal: Type.Union([Type.String(), Type.Null()]), StopTimeout: Type.Union([Type.Integer(), Type.Null()]), Shell: Type.Union([Type.Array(Type.String()), Type.Null()]) }));

export type EndpointIPAMConfig = Static<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = Type.Union([Type.Partial(Type.Object({ IPv4Address: Type.String(), IPv6Address: Type.String(), LinkLocalIPs: Type.Array(Type.String()) })), Type.Null()]);

export type EndpointSettings = Static<typeof EndpointSettings>;
export const EndpointSettings = Type.Partial(Type.Object({ IPAMConfig: EndpointIPAMConfig, Links: Type.Array(Type.String()), Aliases: Type.Array(Type.String()), NetworkID: Type.String(), EndpointID: Type.String(), Gateway: Type.String(), IPAddress: Type.String(), IPPrefixLen: Type.Integer(), IPv6Gateway: Type.String(), GlobalIPv6Address: Type.String(), GlobalIPv6PrefixLen: Type.Integer(), MacAddress: Type.String(), DriverOpts: Type.Union([Type.Record(Type.String(), Type.String()), Type.Null()]) }));

export type NetworkingConfig = Static<typeof NetworkingConfig>;
export const NetworkingConfig = Type.Partial(Type.Object({ EndpointsConfig: Type.Record(Type.String(), EndpointSettings) }));

export type Address = Static<typeof Address>;
export const Address = Type.Partial(Type.Object({ Addr: Type.String(), PrefixLen: Type.Integer() }));

export type NetworkSettings = Static<typeof NetworkSettings>;
export const NetworkSettings = Type.Partial(Type.Object({ Bridge: Type.String(), SandboxID: Type.String(), HairpinMode: Type.Boolean(), LinkLocalIPv6Address: Type.String(), LinkLocalIPv6PrefixLen: Type.Integer(), Ports: PortMap, SandboxKey: Type.String(), SecondaryIPAddresses: Type.Union([Type.Array(Address), Type.Null()]), SecondaryIPv6Addresses: Type.Union([Type.Array(Address), Type.Null()]), EndpointID: Type.String(), Gateway: Type.String(), GlobalIPv6Address: Type.String(), GlobalIPv6PrefixLen: Type.Integer(), IPAddress: Type.String(), IPPrefixLen: Type.Integer(), IPv6Gateway: Type.String(), MacAddress: Type.String(), Networks: Type.Record(Type.String(), EndpointSettings) }));

export type GraphDriverData = Static<typeof GraphDriverData>;
export const GraphDriverData = Type.Object({ Name: Type.String(), Data: Type.Record(Type.String(), Type.String()) });

export type ChangeType = Static<typeof ChangeType>;
export const ChangeType = Type.Union([Type.Literal(0), Type.Literal(1), Type.Literal(2)]);

export type FilesystemChange = Static<typeof FilesystemChange>;
export const FilesystemChange = Type.Object({ Path: Type.String(), Kind: ChangeType });

export type ImageInspect = Static<typeof ImageInspect>;
export const ImageInspect = Type.Partial(Type.Object({ Id: Type.String(), RepoTags: Type.Array(Type.String()), RepoDigests: Type.Array(Type.String()), Parent: Type.String(), Comment: Type.String(), Created: Type.String(), Container: Type.String(), ContainerConfig: ContainerConfig, DockerVersion: Type.String(), Author: Type.String(), Config: ContainerConfig, Architecture: Type.String(), Variant: Type.Union([Type.String(), Type.Null()]), Os: Type.String(), OsVersion: Type.Union([Type.String(), Type.Null()]), Size: Type.Integer(), VirtualSize: Type.Integer(), GraphDriver: GraphDriverData, RootFS: Type.Object({ Type: Type.String(), Layers: Type.Optional(Type.Array(Type.String())) }), Metadata: Type.Partial(Type.Object({ LastTagTime: Type.Union([Type.String({ format: "dateTime" }), Type.Null()]) })) }));

export type ImageSummary = Static<typeof ImageSummary>;
export const ImageSummary = Type.Object({ Id: Type.String(), ParentId: Type.String(), RepoTags: Type.Array(Type.String()), RepoDigests: Type.Array(Type.String()), Created: Type.Integer(), Size: Type.Integer(), SharedSize: Type.Integer(), VirtualSize: Type.Optional(Type.Integer()), Labels: Type.Record(Type.String(), Type.String()), Containers: Type.Integer() });

export type AuthConfig = Static<typeof AuthConfig>;
export const AuthConfig = Type.Partial(Type.Object({ username: Type.String(), password: Type.String(), email: Type.String(), serveraddress: Type.String() }));

export type ProcessConfig = Static<typeof ProcessConfig>;
export const ProcessConfig = Type.Partial(Type.Object({ privileged: Type.Boolean(), user: Type.String(), tty: Type.Boolean(), entrypoint: Type.String(), arguments: Type.Array(Type.String()) }));

export type ObjectVersion = Static<typeof ObjectVersion>;
export const ObjectVersion = Type.Partial(Type.Object({ Index: Type.Integer() }));

export type Topology = Static<typeof Topology>;
export const Topology = Type.Record(Type.String(), Type.String());

export type ClusterVolumeSpec = Static<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = Type.Partial(Type.Object({ Group: Type.String(), AccessMode: Type.Partial(Type.Object({ Scope: Type.Union([Type.Literal("single"), Type.Literal("multi")]), Sharing: Type.Union([Type.Literal("none"), Type.Literal("readonly"), Type.Literal("onewriter"), Type.Literal("all")]), MountVolume: Type.Partial(Type.Object({  })), Secrets: Type.Array(Type.Partial(Type.Object({ Key: Type.String(), Secret: Type.String() }))), AccessibilityRequirements: Type.Partial(Type.Object({ Requisite: Type.Array(Topology), Preferred: Type.Array(Topology) })), CapacityRange: Type.Partial(Type.Object({ RequiredBytes: Type.Integer(), LimitBytes: Type.Integer() })), Availability: Type.Union([Type.Literal("active"), Type.Literal("pause"), Type.Literal("drain")]) })) }));

export type ClusterVolume = Static<typeof ClusterVolume>;
export const ClusterVolume = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: ClusterVolumeSpec, Info: Type.Partial(Type.Object({ CapacityBytes: Type.Integer(), VolumeContext: Type.Record(Type.String(), Type.String()), VolumeID: Type.String(), AccessibleTopology: Type.Array(Topology) })), PublishStatus: Type.Array(Type.Partial(Type.Object({ NodeID: Type.String(), State: Type.Union([Type.Literal("pending-publish"), Type.Literal("published"), Type.Literal("pending-node-unpublish"), Type.Literal("pending-controller-unpublish")]), PublishContext: Type.Record(Type.String(), Type.String()) }))) }));

export type Volume = Static<typeof Volume>;
export const Volume = Type.Object({ Name: Type.String(), Driver: Type.String(), Mountpoint: Type.String(), CreatedAt: Type.Optional(Type.String({ format: "dateTime" })), Status: Type.Optional(Type.Record(Type.String(), Type.Partial(Type.Object({  })))), Labels: Type.Record(Type.String(), Type.String()), Scope: Type.Union([Type.Literal("local"), Type.Literal("global")]), ClusterVolume: Type.Optional(ClusterVolume), Options: Type.Record(Type.String(), Type.String()), UsageData: Type.Optional(Type.Union([Type.Object({ Size: Type.Integer(), RefCount: Type.Integer() }), Type.Null()])) });

export type VolumeCreateOptions = Static<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = Type.Partial(Type.Object({ Name: Type.String(), Driver: Type.String(), DriverOpts: Type.Record(Type.String(), Type.String()), Labels: Type.Record(Type.String(), Type.String()), ClusterVolumeSpec: ClusterVolumeSpec }));

export type VolumeListResponse = Static<typeof VolumeListResponse>;
export const VolumeListResponse = Type.Partial(Type.Object({ Volumes: Type.Array(Volume), Warnings: Type.Array(Type.String()) }));

export type IPAMConfig = Static<typeof IPAMConfig>;
export const IPAMConfig = Type.Partial(Type.Object({ Subnet: Type.String(), IPRange: Type.String(), Gateway: Type.String(), AuxiliaryAddresses: Type.Record(Type.String(), Type.String()) }));

export type IPAM = Static<typeof IPAM>;
export const IPAM = Type.Partial(Type.Object({ Driver: Type.String(), Config: Type.Array(IPAMConfig), Options: Type.Record(Type.String(), Type.String()) }));

export type NetworkContainer = Static<typeof NetworkContainer>;
export const NetworkContainer = Type.Partial(Type.Object({ Name: Type.String(), EndpointID: Type.String(), MacAddress: Type.String(), IPv4Address: Type.String(), IPv6Address: Type.String() }));

export type Network = Static<typeof Network>;
export const Network = Type.Partial(Type.Object({ Name: Type.String(), Id: Type.String(), Created: Type.String({ format: "dateTime" }), Scope: Type.String(), Driver: Type.String(), EnableIPv6: Type.Boolean(), IPAM: IPAM, Internal: Type.Boolean(), Attachable: Type.Boolean(), Ingress: Type.Boolean(), Containers: Type.Record(Type.String(), NetworkContainer), Options: Type.Record(Type.String(), Type.String()), Labels: Type.Record(Type.String(), Type.String()) }));

export type ErrorDetail = Static<typeof ErrorDetail>;
export const ErrorDetail = Type.Partial(Type.Object({ code: Type.Integer(), message: Type.String() }));

export type ProgressDetail = Static<typeof ProgressDetail>;
export const ProgressDetail = Type.Partial(Type.Object({ current: Type.Integer(), total: Type.Integer() }));

export type ImageID = Static<typeof ImageID>;
export const ImageID = Type.Partial(Type.Object({ ID: Type.String() }));

export type BuildInfo = Static<typeof BuildInfo>;
export const BuildInfo = Type.Partial(Type.Object({ id: Type.String(), stream: Type.String(), error: Type.String(), errorDetail: ErrorDetail, status: Type.String(), progress: Type.String(), progressDetail: ProgressDetail, aux: ImageID }));

export type BuildCache = Static<typeof BuildCache>;
export const BuildCache = Type.Partial(Type.Object({ ID: Type.String(), Parent: Type.Union([Type.String(), Type.Null()]), Parents: Type.Union([Type.Array(Type.String()), Type.Null()]), Type: Type.Union([Type.Literal("internal"), Type.Literal("frontend"), Type.Literal("source.local"), Type.Literal("source.git.checkout"), Type.Literal("exec.cachemount"), Type.Literal("regular")]), Description: Type.String(), InUse: Type.Boolean(), Shared: Type.Boolean(), Size: Type.Integer(), CreatedAt: Type.String({ format: "dateTime" }), LastUsedAt: Type.Union([Type.String({ format: "dateTime" }), Type.Null()]), UsageCount: Type.Integer() }));

export type CreateImageInfo = Static<typeof CreateImageInfo>;
export const CreateImageInfo = Type.Partial(Type.Object({ id: Type.String(), error: Type.String(), errorDetail: ErrorDetail, status: Type.String(), progress: Type.String(), progressDetail: ProgressDetail }));

export type PushImageInfo = Static<typeof PushImageInfo>;
export const PushImageInfo = Type.Partial(Type.Object({ error: Type.String(), status: Type.String(), progress: Type.String(), progressDetail: ProgressDetail }));

export type ErrorResponse = Static<typeof ErrorResponse>;
export const ErrorResponse = Type.Object({ message: Type.String() });

export type IdResponse = Static<typeof IdResponse>;
export const IdResponse = Type.Object({ Id: Type.String() });

export type PluginMount = Static<typeof PluginMount>;
export const PluginMount = Type.Object({ Name: Type.String(), Description: Type.String(), Settable: Type.Array(Type.String()), Source: Type.String(), Destination: Type.String(), Type: Type.String(), Options: Type.Array(Type.String()) });

export type PluginDevice = Static<typeof PluginDevice>;
export const PluginDevice = Type.Object({ Name: Type.String(), Description: Type.String(), Settable: Type.Array(Type.String()), Path: Type.String() });

export type PluginEnv = Static<typeof PluginEnv>;
export const PluginEnv = Type.Object({ Name: Type.String(), Description: Type.String(), Settable: Type.Array(Type.String()), Value: Type.String() });

export type PluginInterfaceType = Static<typeof PluginInterfaceType>;
export const PluginInterfaceType = Type.Object({ Prefix: Type.String(), Capability: Type.String(), Version: Type.String() });

export type PluginPrivilege = Static<typeof PluginPrivilege>;
export const PluginPrivilege = Type.Partial(Type.Object({ Name: Type.String(), Description: Type.String(), Value: Type.Array(Type.String()) }));

export type Plugin = Static<typeof Plugin>;
export const Plugin = Type.Object({ Id: Type.Optional(Type.String()), Name: Type.String(), Enabled: Type.Boolean(), Settings: Type.Object({ Mounts: Type.Array(PluginMount), Env: Type.Array(Type.String()), Args: Type.Array(Type.String()), Devices: Type.Array(PluginDevice) }), PluginReference: Type.Optional(Type.String()), Config: Type.Object({ DockerVersion: Type.Optional(Type.String()), Description: Type.String(), Documentation: Type.String(), Interface: Type.Object({ Types: Type.Array(PluginInterfaceType), Socket: Type.String(), ProtocolScheme: Type.Optional(Type.Union([Type.Literal(""), Type.Literal("moby.plugins.http/v1")])) }), Entrypoint: Type.Array(Type.String()), WorkDir: Type.String(), User: Type.Optional(Type.Partial(Type.Object({ UID: Type.Integer(), GID: Type.Integer() }))), Network: Type.Object({ Type: Type.String() }), Linux: Type.Object({ Capabilities: Type.Array(Type.String()), AllowAllDevices: Type.Boolean(), Devices: Type.Array(PluginDevice) }), PropagatedMount: Type.String(), IpcHost: Type.Boolean(), PidHost: Type.Boolean(), Mounts: Type.Array(PluginMount), Env: Type.Array(PluginEnv), Args: Type.Object({ Name: Type.String(), Description: Type.String(), Settable: Type.Array(Type.String()), Value: Type.Array(Type.String()) }), rootfs: Type.Optional(Type.Partial(Type.Object({ type: Type.String(), diff_ids: Type.Array(Type.String()) }))) }) });

export type NodeSpec = Static<typeof NodeSpec>;
export const NodeSpec = Type.Partial(Type.Object({ Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Role: Type.Union([Type.Literal("worker"), Type.Literal("manager")]), Availability: Type.Union([Type.Literal("active"), Type.Literal("pause"), Type.Literal("drain")]) }));

export type Platform = Static<typeof Platform>;
export const Platform = Type.Partial(Type.Object({ Architecture: Type.String(), OS: Type.String() }));

export type EngineDescription = Static<typeof EngineDescription>;
export const EngineDescription = Type.Partial(Type.Object({ EngineVersion: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Plugins: Type.Array(Type.Partial(Type.Object({ Type: Type.String(), Name: Type.String() }))) }));

export type TLSInfo = Static<typeof TLSInfo>;
export const TLSInfo = Type.Partial(Type.Object({ TrustRoot: Type.String(), CertIssuerSubject: Type.String(), CertIssuerPublicKey: Type.String() }));

export type NodeDescription = Static<typeof NodeDescription>;
export const NodeDescription = Type.Partial(Type.Object({ Hostname: Type.String(), Platform: Platform, Resources: ResourceObject, Engine: EngineDescription, TLSInfo: TLSInfo }));

export type NodeState = Static<typeof NodeState>;
export const NodeState = Type.Union([Type.Literal("unknown"), Type.Literal("down"), Type.Literal("ready"), Type.Literal("disconnected")]);

export type NodeStatus = Static<typeof NodeStatus>;
export const NodeStatus = Type.Partial(Type.Object({ State: NodeState, Message: Type.String(), Addr: Type.String() }));

export type Reachability = Static<typeof Reachability>;
export const Reachability = Type.Union([Type.Literal("unknown"), Type.Literal("unreachable"), Type.Literal("reachable")]);

export type ManagerStatus = Static<typeof ManagerStatus>;
export const ManagerStatus = Type.Union([Type.Partial(Type.Object({ Leader: Type.Boolean(), Reachability: Reachability, Addr: Type.String() })), Type.Null()]);

export type Node = Static<typeof Node>;
export const Node = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: NodeSpec, Description: NodeDescription, Status: NodeStatus, ManagerStatus: ManagerStatus }));

export type SwarmSpec = Static<typeof SwarmSpec>;
export const SwarmSpec = Type.Partial(Type.Object({ Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Orchestration: Type.Union([Type.Partial(Type.Object({ TaskHistoryRetentionLimit: Type.Integer() })), Type.Null()]), Raft: Type.Partial(Type.Object({ SnapshotInterval: Type.Integer(), KeepOldSnapshots: Type.Integer(), LogEntriesForSlowFollowers: Type.Integer(), ElectionTick: Type.Integer(), HeartbeatTick: Type.Integer() })), Dispatcher: Type.Union([Type.Partial(Type.Object({ HeartbeatPeriod: Type.Integer() })), Type.Null()]), CAConfig: Type.Union([Type.Partial(Type.Object({ NodeCertExpiry: Type.Integer(), ExternalCAs: Type.Array(Type.Partial(Type.Object({ Protocol: Type.Literal("cfssl"), URL: Type.String(), Options: Type.Record(Type.String(), Type.String()), CACert: Type.String() }))), SigningCACert: Type.String(), SigningCAKey: Type.String(), ForceRotate: Type.Integer() })), Type.Null()]), EncryptionConfig: Type.Partial(Type.Object({ AutoLockManagers: Type.Boolean() })), TaskDefaults: Type.Partial(Type.Object({ LogDriver: Type.Partial(Type.Object({ Name: Type.String(), Options: Type.Record(Type.String(), Type.String()) })) })) }));

export type ClusterInfo = Static<typeof ClusterInfo>;
export const ClusterInfo = Type.Union([Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: SwarmSpec, TLSInfo: TLSInfo, RootRotationInProgress: Type.Boolean(), DataPathPort: Type.Integer(), DefaultAddrPool: Type.Array(Type.String({ format: "CIDR" })), SubnetSize: Type.Integer({ maximum: 29 }) })), Type.Null()]);

export type JoinTokens = Static<typeof JoinTokens>;
export const JoinTokens = Type.Partial(Type.Object({ Worker: Type.String(), Manager: Type.String() }));

export type Swarm = Static<typeof Swarm>;
export const Swarm = Type.Intersect([ClusterInfo, Type.Partial(Type.Object({ JoinTokens: JoinTokens }))]);

export type NetworkAttachmentConfig = Static<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = Type.Partial(Type.Object({ Target: Type.String(), Aliases: Type.Array(Type.String()), DriverOpts: Type.Record(Type.String(), Type.String()) }));

export type TaskSpec = Static<typeof TaskSpec>;
export const TaskSpec = Type.Partial(Type.Object({ PluginSpec: Type.Partial(Type.Object({ Name: Type.String(), Remote: Type.String(), Disabled: Type.Boolean(), PluginPrivilege: Type.Array(PluginPrivilege) })), ContainerSpec: Type.Partial(Type.Object({ Image: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Command: Type.Array(Type.String()), Args: Type.Array(Type.String()), Hostname: Type.String(), Env: Type.Array(Type.String()), Dir: Type.String(), User: Type.String(), Groups: Type.Array(Type.String()), Privileges: Type.Partial(Type.Object({ CredentialSpec: Type.Partial(Type.Object({ Config: Type.String(), File: Type.String(), Registry: Type.String() })), SELinuxContext: Type.Partial(Type.Object({ Disable: Type.Boolean(), User: Type.String(), Role: Type.String(), Type: Type.String(), Level: Type.String() })) })), TTY: Type.Boolean(), OpenStdin: Type.Boolean(), ReadOnly: Type.Boolean(), Mounts: Type.Array(Mount), StopSignal: Type.String(), StopGracePeriod: Type.Integer(), HealthCheck: HealthConfig, Hosts: Type.Array(Type.String()), DNSConfig: Type.Partial(Type.Object({ Nameservers: Type.Array(Type.String()), Search: Type.Array(Type.String()), Options: Type.Array(Type.String()) })), Secrets: Type.Array(Type.Partial(Type.Object({ File: Type.Partial(Type.Object({ Name: Type.String(), UID: Type.String(), GID: Type.String(), Mode: Type.Integer() })), SecretID: Type.String(), SecretName: Type.String() }))), Configs: Type.Array(Type.Partial(Type.Object({ File: Type.Partial(Type.Object({ Name: Type.String(), UID: Type.String(), GID: Type.String(), Mode: Type.Integer() })), Runtime: Type.Partial(Type.Object({  })), ConfigID: Type.String(), ConfigName: Type.String() }))), Isolation: Type.Union([Type.Literal("default"), Type.Literal("process"), Type.Literal("hyperv")]), Init: Type.Union([Type.Boolean(), Type.Null()]), Sysctls: Type.Record(Type.String(), Type.String()), CapabilityAdd: Type.Array(Type.String()), CapabilityDrop: Type.Array(Type.String()), Ulimits: Type.Array(Type.Partial(Type.Object({ Name: Type.String(), Soft: Type.Integer(), Hard: Type.Integer() }))) })), NetworkAttachmentSpec: Type.Partial(Type.Object({ ContainerID: Type.String() })), Resources: Type.Partial(Type.Object({ Limits: Limit, Reservations: ResourceObject })), RestartPolicy: Type.Partial(Type.Object({ Condition: Type.Union([Type.Literal("none"), Type.Literal("on-failure"), Type.Literal("any")]), Delay: Type.Integer(), MaxAttempts: Type.Integer(), Window: Type.Integer() })), Placement: Type.Partial(Type.Object({ Constraints: Type.Array(Type.String()), Preferences: Type.Array(Type.Partial(Type.Object({ Spread: Type.Partial(Type.Object({ SpreadDescriptor: Type.String() })) }))), MaxReplicas: Type.Integer(), Platforms: Type.Array(Platform) })), ForceUpdate: Type.Integer(), Runtime: Type.String(), Networks: Type.Array(NetworkAttachmentConfig), LogDriver: Type.Partial(Type.Object({ Name: Type.String(), Options: Type.Record(Type.String(), Type.String()) })) }));

export type TaskState = Static<typeof TaskState>;
export const TaskState = Type.Union([Type.Literal("new"), Type.Literal("allocated"), Type.Literal("pending"), Type.Literal("assigned"), Type.Literal("accepted"), Type.Literal("preparing"), Type.Literal("ready"), Type.Literal("starting"), Type.Literal("running"), Type.Literal("complete"), Type.Literal("shutdown"), Type.Literal("failed"), Type.Literal("rejected"), Type.Literal("remove"), Type.Literal("orphaned")]);

export type Task = Static<typeof Task>;
export const Task = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Spec: TaskSpec, ServiceID: Type.String(), Slot: Type.Integer(), NodeID: Type.String(), AssignedGenericResources: GenericResources, Status: Type.Partial(Type.Object({ Timestamp: Type.String({ format: "dateTime" }), State: TaskState, Message: Type.String(), Err: Type.String(), ContainerStatus: Type.Partial(Type.Object({ ContainerID: Type.String(), PID: Type.Integer(), ExitCode: Type.Integer() })) })), DesiredState: TaskState, JobIteration: ObjectVersion }));

export type EndpointPortConfig = Static<typeof EndpointPortConfig>;
export const EndpointPortConfig = Type.Partial(Type.Object({ Name: Type.String(), Protocol: Type.Union([Type.Literal("tcp"), Type.Literal("udp"), Type.Literal("sctp")]), TargetPort: Type.Integer(), PublishedPort: Type.Integer(), PublishMode: Type.Union([Type.Literal("ingress"), Type.Literal("host")]) }));

export type EndpointSpec = Static<typeof EndpointSpec>;
export const EndpointSpec = Type.Partial(Type.Object({ Mode: Type.Union([Type.Literal("vip"), Type.Literal("dnsrr")]), Ports: Type.Array(EndpointPortConfig) }));

export type ServiceSpec = Static<typeof ServiceSpec>;
export const ServiceSpec = Type.Partial(Type.Object({ Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), TaskTemplate: TaskSpec, Mode: Type.Partial(Type.Object({ Replicated: Type.Partial(Type.Object({ Replicas: Type.Integer() })), Global: Type.Partial(Type.Object({  })), ReplicatedJob: Type.Partial(Type.Object({ MaxConcurrent: Type.Integer(), TotalCompletions: Type.Integer() })), GlobalJob: Type.Partial(Type.Object({  })) })), UpdateConfig: Type.Partial(Type.Object({ Parallelism: Type.Integer(), Delay: Type.Integer(), FailureAction: Type.Union([Type.Literal("continue"), Type.Literal("pause"), Type.Literal("rollback")]), Monitor: Type.Integer(), MaxFailureRatio: Type.Number(), Order: Type.Union([Type.Literal("stop-first"), Type.Literal("start-first")]) })), RollbackConfig: Type.Partial(Type.Object({ Parallelism: Type.Integer(), Delay: Type.Integer(), FailureAction: Type.Union([Type.Literal("continue"), Type.Literal("pause")]), Monitor: Type.Integer(), MaxFailureRatio: Type.Number(), Order: Type.Union([Type.Literal("stop-first"), Type.Literal("start-first")]) })), Networks: Type.Array(NetworkAttachmentConfig), EndpointSpec: EndpointSpec }));

export type Service = Static<typeof Service>;
export const Service = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: ServiceSpec, Endpoint: Type.Partial(Type.Object({ Spec: EndpointSpec, Ports: Type.Array(EndpointPortConfig), VirtualIPs: Type.Array(Type.Partial(Type.Object({ NetworkID: Type.String(), Addr: Type.String() }))) })), UpdateStatus: Type.Partial(Type.Object({ State: Type.Union([Type.Literal("updating"), Type.Literal("paused"), Type.Literal("completed")]), StartedAt: Type.String({ format: "dateTime" }), CompletedAt: Type.String({ format: "dateTime" }), Message: Type.String() })), ServiceStatus: Type.Partial(Type.Object({ RunningTasks: Type.Integer(), DesiredTasks: Type.Integer(), CompletedTasks: Type.Integer() })), JobStatus: Type.Partial(Type.Object({ JobIteration: ObjectVersion, LastExecution: Type.String({ format: "dateTime" }) })) }));

export type ImageDeleteResponseItem = Static<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = Type.Partial(Type.Object({ Untagged: Type.String(), Deleted: Type.String() }));

export type ServiceUpdateResponse = Static<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = Type.Partial(Type.Object({ Warnings: Type.Array(Type.String()) }));

export type ContainerSummary = Static<typeof ContainerSummary>;
export const ContainerSummary = Type.Partial(Type.Object({ Id: Type.String(), Names: Type.Array(Type.String()), Image: Type.String(), ImageID: Type.String(), Command: Type.String(), Created: Type.Integer(), Ports: Type.Array(Port), SizeRw: Type.Integer(), SizeRootFs: Type.Integer(), Labels: Type.Record(Type.String(), Type.String()), State: Type.String(), Status: Type.String(), HostConfig: Type.Partial(Type.Object({ NetworkMode: Type.String() })), NetworkSettings: Type.Partial(Type.Object({ Networks: Type.Record(Type.String(), EndpointSettings) })), Mounts: Type.Array(MountPoint) }));

export type Driver = Static<typeof Driver>;
export const Driver = Type.Object({ Name: Type.String(), Options: Type.Optional(Type.Record(Type.String(), Type.String())) });

export type SecretSpec = Static<typeof SecretSpec>;
export const SecretSpec = Type.Partial(Type.Object({ Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Data: Type.String(), Driver: Driver, Templating: Driver }));

export type Secret = Static<typeof Secret>;
export const Secret = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: SecretSpec }));

export type ConfigSpec = Static<typeof ConfigSpec>;
export const ConfigSpec = Type.Partial(Type.Object({ Name: Type.String(), Labels: Type.Record(Type.String(), Type.String()), Data: Type.String(), Templating: Driver }));

export type Config = Static<typeof Config>;
export const Config = Type.Partial(Type.Object({ ID: Type.String(), Version: ObjectVersion, CreatedAt: Type.String({ format: "dateTime" }), UpdatedAt: Type.String({ format: "dateTime" }), Spec: ConfigSpec }));

export type ContainerState = Static<typeof ContainerState>;
export const ContainerState = Type.Union([Type.Partial(Type.Object({ Status: Type.Union([Type.Literal("created"), Type.Literal("running"), Type.Literal("paused"), Type.Literal("restarting"), Type.Literal("removing"), Type.Literal("exited"), Type.Literal("dead")]), Running: Type.Boolean(), Paused: Type.Boolean(), Restarting: Type.Boolean(), OOMKilled: Type.Boolean(), Dead: Type.Boolean(), Pid: Type.Integer(), ExitCode: Type.Integer(), Error: Type.String(), StartedAt: Type.String(), FinishedAt: Type.String(), Health: Health })), Type.Null()]);

export type ContainerCreateResponse = Static<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = Type.Object({ Id: Type.String(), Warnings: Type.Array(Type.String()) });

export type ContainerWaitExitError = Static<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = Type.Partial(Type.Object({ Message: Type.String() }));

export type ContainerWaitResponse = Static<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = Type.Object({ StatusCode: Type.Integer(), Error: Type.Optional(ContainerWaitExitError) });

export type SystemVersion = Static<typeof SystemVersion>;
export const SystemVersion = Type.Partial(Type.Object({ Platform: Type.Object({ Name: Type.String() }), Components: Type.Array(Type.Object({ Name: Type.String(), Version: Type.String(), Details: Type.Optional(Type.Union([Type.Partial(Type.Object({  })), Type.Null()])) })), Version: Type.String(), ApiVersion: Type.String(), MinAPIVersion: Type.String(), GitCommit: Type.String(), GoVersion: Type.String(), Os: Type.String(), Arch: Type.String(), KernelVersion: Type.String(), Experimental: Type.Boolean(), BuildTime: Type.String() }));

export type PluginsInfo = Static<typeof PluginsInfo>;
export const PluginsInfo = Type.Partial(Type.Object({ Volume: Type.Array(Type.String()), Network: Type.Array(Type.String()), Authorization: Type.Array(Type.String()), Log: Type.Array(Type.String()) }));

export type IndexInfo = Static<typeof IndexInfo>;
export const IndexInfo = Type.Union([Type.Partial(Type.Object({ Name: Type.String(), Mirrors: Type.Array(Type.String()), Secure: Type.Boolean(), Official: Type.Boolean() })), Type.Null()]);

export type RegistryServiceConfig = Static<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = Type.Union([Type.Partial(Type.Object({ AllowNondistributableArtifactsCIDRs: Type.Array(Type.String()), AllowNondistributableArtifactsHostnames: Type.Array(Type.String()), InsecureRegistryCIDRs: Type.Array(Type.String()), IndexConfigs: Type.Record(Type.String(), IndexInfo), Mirrors: Type.Array(Type.String()) })), Type.Null()]);

export type Runtime = Static<typeof Runtime>;
export const Runtime = Type.Partial(Type.Object({ path: Type.String(), runtimeArgs: Type.Union([Type.Array(Type.String()), Type.Null()]) }));

export type LocalNodeState = Static<typeof LocalNodeState>;
export const LocalNodeState = Type.Union([Type.Literal(""), Type.Literal("inactive"), Type.Literal("pending"), Type.Literal("active"), Type.Literal("error"), Type.Literal("locked")]);

export type PeerNode = Static<typeof PeerNode>;
export const PeerNode = Type.Partial(Type.Object({ NodeID: Type.String(), Addr: Type.String() }));

export type SwarmInfo = Static<typeof SwarmInfo>;
export const SwarmInfo = Type.Partial(Type.Object({ NodeID: Type.String(), NodeAddr: Type.String(), LocalNodeState: LocalNodeState, ControlAvailable: Type.Boolean(), Error: Type.String(), RemoteManagers: Type.Union([Type.Array(PeerNode), Type.Null()]), Nodes: Type.Union([Type.Integer(), Type.Null()]), Managers: Type.Union([Type.Integer(), Type.Null()]), Cluster: ClusterInfo }));

export type Commit = Static<typeof Commit>;
export const Commit = Type.Partial(Type.Object({ ID: Type.String(), Expected: Type.String() }));

export type SystemInfo = Static<typeof SystemInfo>;
export const SystemInfo = Type.Partial(Type.Object({ ID: Type.String(), Containers: Type.Integer(), ContainersRunning: Type.Integer(), ContainersPaused: Type.Integer(), ContainersStopped: Type.Integer(), Images: Type.Integer(), Driver: Type.String(), DriverStatus: Type.Array(Type.Array(Type.String())), DockerRootDir: Type.String(), Plugins: PluginsInfo, MemoryLimit: Type.Boolean(), SwapLimit: Type.Boolean(), KernelMemoryTCP: Type.Boolean(), CpuCfsPeriod: Type.Boolean(), CpuCfsQuota: Type.Boolean(), CPUShares: Type.Boolean(), CPUSet: Type.Boolean(), PidsLimit: Type.Boolean(), OomKillDisable: Type.Boolean(), IPv4Forwarding: Type.Boolean(), BridgeNfIptables: Type.Boolean(), BridgeNfIp6tables: Type.Boolean(), Debug: Type.Boolean(), NFd: Type.Integer(), NGoroutines: Type.Integer(), SystemTime: Type.String(), LoggingDriver: Type.String(), CgroupDriver: Type.Union([Type.Literal("cgroupfs"), Type.Literal("systemd"), Type.Literal("none")]), CgroupVersion: Type.Union([Type.Literal("1"), Type.Literal("2")]), NEventsListener: Type.Integer(), KernelVersion: Type.String(), OperatingSystem: Type.String(), OSVersion: Type.String(), OSType: Type.String(), Architecture: Type.String(), NCPU: Type.Integer(), MemTotal: Type.Integer(), IndexServerAddress: Type.String(), RegistryConfig: RegistryServiceConfig, GenericResources: GenericResources, HttpProxy: Type.String(), HttpsProxy: Type.String(), NoProxy: Type.String(), Name: Type.String(), Labels: Type.Array(Type.String()), ExperimentalBuild: Type.Boolean(), ServerVersion: Type.String(), Runtimes: Type.Record(Type.String(), Runtime), DefaultRuntime: Type.String(), Swarm: SwarmInfo, LiveRestoreEnabled: Type.Boolean(), Isolation: Type.Union([Type.Literal("default"), Type.Literal("hyperv"), Type.Literal("process")]), InitBinary: Type.String(), ContainerdCommit: Commit, RuncCommit: Commit, InitCommit: Commit, SecurityOptions: Type.Array(Type.String()), ProductLicense: Type.String(), DefaultAddressPools: Type.Array(Type.Partial(Type.Object({ Base: Type.String(), Size: Type.Integer() }))), Warnings: Type.Array(Type.String()) }));

export type EventActor = Static<typeof EventActor>;
export const EventActor = Type.Partial(Type.Object({ ID: Type.String(), Attributes: Type.Record(Type.String(), Type.String()) }));

export type EventMessage = Static<typeof EventMessage>;
export const EventMessage = Type.Partial(Type.Object({ Type: Type.Union([Type.Literal("builder"), Type.Literal("config"), Type.Literal("container"), Type.Literal("daemon"), Type.Literal("image"), Type.Literal("network"), Type.Literal("node"), Type.Literal("plugin"), Type.Literal("secret"), Type.Literal("service"), Type.Literal("volume")]), Action: Type.String(), Actor: EventActor, scope: Type.Union([Type.Literal("local"), Type.Literal("swarm")]), time: Type.Integer(), timeNano: Type.Integer() }));

export type OCIDescriptor = Static<typeof OCIDescriptor>;
export const OCIDescriptor = Type.Partial(Type.Object({ mediaType: Type.String(), digest: Type.String(), size: Type.Integer() }));

export type OCIPlatform = Static<typeof OCIPlatform>;
export const OCIPlatform = Type.Partial(Type.Object({ architecture: Type.String(), os: Type.String(), "os.version": Type.String(), "os.features": Type.Array(Type.String()), variant: Type.String() }));

export type DistributionInspect = Static<typeof DistributionInspect>;
export const DistributionInspect = Type.Object({ Descriptor: OCIDescriptor, Platforms: Type.Array(OCIPlatform) });

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ all: Type.Boolean(), limit: Type.Integer(), size: Type.Boolean(), filters: Type.String() }))) },
  responses: { 200: Type.Array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ name: Type.String({ pattern: "^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$" }), platform: Type.String() }))), body: Type.Intersect([ContainerConfig, Type.Partial(Type.Object({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }))]) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ size: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Partial(Type.Object({ Id: Type.String(), Created: Type.String(), Path: Type.String(), Args: Type.Array(Type.String()), State: ContainerState, Image: Type.String(), ResolvConfPath: Type.String(), HostnamePath: Type.String(), HostsPath: Type.String(), LogPath: Type.String(), Name: Type.String(), RestartCount: Type.Integer(), Driver: Type.String(), Platform: Type.String(), MountLabel: Type.String(), ProcessLabel: Type.String(), AppArmorProfile: Type.String(), ExecIDs: Type.Union([Type.Array(Type.String()), Type.Null()]), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: Type.Integer(), SizeRootFs: Type.Integer(), Mounts: Type.Array(MountPoint), Config: ContainerConfig, NetworkSettings: NetworkSettings })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/top"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ ps_args: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Partial(Type.Object({ Titles: Type.Array(Type.String()), Processes: Type.Array(Type.Array(Type.String())) })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/logs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ follow: Type.Boolean(), stdout: Type.Boolean(), stderr: Type.Boolean(), since: Type.Integer(), until: Type.Integer(), timestamps: Type.Boolean(), tail: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown() },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/changes"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/export"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown() },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/stats"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ stream: Type.Boolean(), "one-shot": Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Record(Type.String(), Type.Unknown()), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/resize"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ h: Type.Integer(), w: Type.Integer() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown() },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/start"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ detachKeys: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 304: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/stop"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ signal: Type.String(), t: Type.Integer() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 304: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/restart"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ signal: Type.String(), t: Type.Integer() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/kill"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ signal: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }), body: Type.Intersect([Resources, Type.Partial(Type.Object({ RestartPolicy: RestartPolicy }))]) },
  responses: { 200: Type.Partial(Type.Object({ Warnings: Type.Array(Type.String()) })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/rename"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ name: Type.String() }), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/pause"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/unpause"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/attach"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ detachKeys: Type.String(), logs: Type.Boolean(), stream: Type.Boolean(), stdin: Type.Boolean(), stdout: Type.Boolean(), stderr: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 101: Type.Unknown(), 200: Type.Unknown(), 400: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown() },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/attach/ws"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ detachKeys: Type.String(), logs: Type.Boolean(), stream: Type.Boolean(), stdin: Type.Boolean(), stdout: Type.Boolean(), stderr: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 101: Type.Unknown(), 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/wait"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ condition: Type.Union([Type.Literal("not-running"), Type.Literal("next-exit"), Type.Literal("removed")]) }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/containers/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ v: Type.Boolean(), force: Type.Boolean(), link: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: Type.Literal("GET"),
  path: Type.Literal("/containers/{id}/archive"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ path: Type.String() }), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 400: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown() },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/containers/{id}/archive"),
  requestFormat: Type.Literal("binary"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ path: Type.String(), noOverwriteDirNonDir: Type.Optional(Type.String()), copyUIDGID: Type.Optional(Type.String()) }), path: Type.Object({ id: Type.String() }), body: Type.Unsafe<Blob>({ type: "string", format: "binary" }) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: Type.Literal("HEAD"),
  path: Type.Literal("/containers/{id}/archive"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ path: Type.String() }), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: Type.Object({ "X-Docker-Container-Path-Stat": Type.String() }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/prune"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Partial(Type.Object({ ContainersDeleted: Type.Array(Type.String()), SpaceReclaimed: Type.Integer() })), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ all: Type.Boolean(), filters: Type.String(), "shared-size": Type.Boolean(), digests: Type.Boolean() }))) },
  responses: { 200: Type.Array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: Type.Literal("POST"),
  path: Type.Literal("/build"),
  requestFormat: Type.Literal("binary"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ dockerfile: Type.String(), t: Type.String(), extrahosts: Type.String(), remote: Type.String(), q: Type.Boolean(), nocache: Type.Boolean(), cachefrom: Type.String(), pull: Type.String(), rm: Type.Boolean(), forcerm: Type.Boolean(), memory: Type.Integer(), memswap: Type.Integer(), cpushares: Type.Integer(), cpusetcpus: Type.String(), cpuperiod: Type.Integer(), cpuquota: Type.Integer(), buildargs: Type.String(), shmsize: Type.Integer(), squash: Type.Boolean(), labels: Type.String(), networkmode: Type.String(), platform: Type.String(), target: Type.String(), outputs: Type.String() }))), header: Type.Optional(Type.Partial(Type.Object({ "Content-type": Type.Literal("application/x-tar"), "X-Registry-Config": Type.String() }))), body: Type.Unsafe<Blob>({ type: "string", format: "binary" }) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: Type.Literal("POST"),
  path: Type.Literal("/build/prune"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ "keep-storage": Type.Integer(), all: Type.Boolean(), filters: Type.String() }))) },
  responses: { 200: Type.Partial(Type.Object({ CachesDeleted: Type.Array(Type.String()), SpaceReclaimed: Type.Integer() })), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/images/create"),
  requestFormat: Type.Literal("text"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ fromImage: Type.String(), fromSrc: Type.String(), repo: Type.String(), tag: Type.String(), message: Type.String(), changes: Type.Array(Type.String()), platform: Type.String() }))), header: Type.Optional(Type.Partial(Type.Object({ "X-Registry-Auth": Type.String() }))), body: Type.String() },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/history"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Array(Type.Object({ Id: Type.String(), Created: Type.Integer(), CreatedBy: Type.String(), Tags: Type.Array(Type.String()), Size: Type.Integer(), Comment: Type.String() })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: Type.Literal("POST"),
  path: Type.Literal("/images/{name}/push"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ tag: Type.String() }))), path: Type.Object({ name: Type.String() }), header: Type.Object({ "X-Registry-Auth": Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: Type.Literal("POST"),
  path: Type.Literal("/images/{name}/tag"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ repo: Type.String(), tag: Type.String() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 201: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/images/{name}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean(), noprune: Type.Boolean() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/search"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ term: Type.String(), limit: Type.Optional(Type.Integer()), filters: Type.Optional(Type.String()) }) },
  responses: { 200: Type.Array(Type.Partial(Type.Object({ description: Type.String(), is_official: Type.Boolean(), is_automated: Type.Boolean(), name: Type.String(), star_count: Type.Integer() }))), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: Type.Literal("POST"),
  path: Type.Literal("/images/prune"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Partial(Type.Object({ ImagesDeleted: Type.Array(ImageDeleteResponseItem), SpaceReclaimed: Type.Integer() })), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: Type.Literal("POST"),
  path: Type.Literal("/auth"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: AuthConfig },
  responses: { 200: Type.Object({ Status: Type.String(), IdentityToken: Type.Optional(Type.String()) }), 204: Type.Unknown(), 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: Type.Literal("GET"),
  path: Type.Literal("/info"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: Type.Literal("GET"),
  path: Type.Literal("/version"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: Type.Literal("GET"),
  path: Type.Literal("/_ping"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: Type.Unknown(), 500: Type.Unknown() },
  responseHeaders: { 200: Type.Object({ Swarm: Type.Union([Type.Literal("inactive"), Type.Literal("pending"), Type.Literal("error"), Type.Literal("locked"), Type.Literal("active/worker"), Type.Literal("active/manager")]), "Docker-Experimental": Type.Boolean(), "Cache-Control": Type.String(), Pragma: Type.String(), "API-Version": Type.String(), "Builder-Version": Type.String() }), 500: Type.Object({ "Cache-Control": Type.String(), Pragma: Type.String() }) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: Type.Literal("HEAD"),
  path: Type.Literal("/_ping"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: Type.Unknown(), 500: Type.Unknown() },
  responseHeaders: { 200: Type.Object({ Swarm: Type.Union([Type.Literal("inactive"), Type.Literal("pending"), Type.Literal("error"), Type.Literal("locked"), Type.Literal("active/worker"), Type.Literal("active/manager")]), "Docker-Experimental": Type.Boolean(), "Cache-Control": Type.String(), Pragma: Type.String(), "API-Version": Type.String(), "Builder-Version": Type.String() }) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: Type.Literal("POST"),
  path: Type.Literal("/commit"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ container: Type.String(), repo: Type.String(), tag: Type.String(), comment: Type.String(), author: Type.String(), pause: Type.Boolean(), changes: Type.String() }))), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: Type.Literal("GET"),
  path: Type.Literal("/events"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ since: Type.String(), until: Type.String(), filters: Type.String() }))) },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: Type.Literal("GET"),
  path: Type.Literal("/system/df"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ type: Type.Array(Type.Union([Type.Literal("container"), Type.Literal("image"), Type.Literal("volume"), Type.Literal("build-cache")])) }))) },
  responses: { 200: Type.Partial(Type.Object({ LayersSize: Type.Integer(), Images: Type.Array(ImageSummary), Containers: Type.Array(ContainerSummary), Volumes: Type.Array(Volume), BuildCache: Type.Array(BuildCache) })), 500: ErrorResponse },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/{name}/get"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Unknown(), 500: Type.Unknown() },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: Type.Literal("GET"),
  path: Type.Literal("/images/get"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ names: Type.Array(Type.String()) }))) },
  responses: { 200: Type.Unknown(), 500: Type.Unknown() },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: Type.Literal("POST"),
  path: Type.Literal("/images/load"),
  requestFormat: Type.Literal("text"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ quiet: Type.Boolean() }))) },
  responses: { 200: Type.Unknown(), 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: Type.Literal("POST"),
  path: Type.Literal("/containers/{id}/exec"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }), body: Type.Optional(Type.Partial(Type.Object({ AttachStdin: Type.Boolean(), AttachStdout: Type.Boolean(), AttachStderr: Type.Boolean(), ConsoleSize: Type.Union([Type.Array(Type.Integer({ minimum: 0 }), { minItems: 2, maxItems: 2 }), Type.Null()]), DetachKeys: Type.String(), Tty: Type.Boolean(), Env: Type.Array(Type.String()), Cmd: Type.Array(Type.String()), Privileged: Type.Boolean(), User: Type.String(), WorkingDir: Type.String() }))) },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: Type.Literal("POST"),
  path: Type.Literal("/exec/{id}/start"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }), body: Type.Optional(Type.Partial(Type.Object({ Detach: Type.Boolean(), Tty: Type.Boolean(), ConsoleSize: Type.Union([Type.Array(Type.Integer({ minimum: 0 }), { minItems: 2, maxItems: 2 }), Type.Null()]) }))) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 409: Type.Unknown() },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: Type.Literal("POST"),
  path: Type.Literal("/exec/{id}/resize"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ h: Type.Integer(), w: Type.Integer() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/exec/{id}/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Partial(Type.Object({ CanRemove: Type.Boolean(), DetachKeys: Type.String(), ID: Type.String(), Running: Type.Boolean(), ExitCode: Type.Integer(), ProcessConfig: ProcessConfig, OpenStdin: Type.Boolean(), OpenStderr: Type.Boolean(), OpenStdout: Type.Boolean(), ContainerID: Type.String(), Pid: Type.Integer() })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/volumes"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String({ format: "json" }) }))) },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/volumes/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/volumes/{name}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/volumes/{name}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer() }), path: Type.Object({ name: Type.String() }), body: Type.Optional(Type.Partial(Type.Object({ Spec: ClusterVolumeSpec }))) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/volumes/{name}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: Type.Literal("POST"),
  path: Type.Literal("/volumes/prune"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Partial(Type.Object({ VolumesDeleted: Type.Array(Type.String()), SpaceReclaimed: Type.Integer() })), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/networks"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/networks/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ verbose: Type.Boolean(), scope: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/networks/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Object({ Name: Type.String(), CheckDuplicate: Type.Optional(Type.Boolean()), Driver: Type.Optional(Type.String()), Internal: Type.Optional(Type.Boolean()), Attachable: Type.Optional(Type.Boolean()), Ingress: Type.Optional(Type.Boolean()), IPAM: Type.Optional(IPAM), EnableIPv6: Type.Optional(Type.Boolean()), Options: Type.Optional(Type.Record(Type.String(), Type.String())), Labels: Type.Optional(Type.Record(Type.String(), Type.String())) }) },
  responses: { 201: Type.Partial(Type.Object({ Id: Type.String(), Warning: Type.String() })), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/{id}/connect"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }), body: Type.Optional(Type.Partial(Type.Object({ Container: Type.String(), EndpointConfig: EndpointSettings }))) },
  responses: { 200: Type.Unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/{id}/disconnect"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }), body: Type.Optional(Type.Partial(Type.Object({ Container: Type.String(), Force: Type.Boolean() }))) },
  responses: { 200: Type.Unknown(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: Type.Literal("POST"),
  path: Type.Literal("/networks/prune"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Partial(Type.Object({ NetworksDeleted: Type.Array(Type.String()) })), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins/privileges"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ remote: Type.String() }) },
  responses: { 200: Type.Array(PluginPrivilege), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/pull"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ remote: Type.String(), name: Type.Optional(Type.String()) }), header: Type.Optional(Type.Partial(Type.Object({ "X-Registry-Auth": Type.String() }))), body: Type.Array(PluginPrivilege) },
  responses: { 204: Type.Unknown(), 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/plugins/{name}/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/plugins/{name}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/enable"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ timeout: Type.Integer() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/disable"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean() }))), path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/upgrade"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ remote: Type.String() }), path: Type.Object({ name: Type.String() }), header: Type.Optional(Type.Partial(Type.Object({ "X-Registry-Auth": Type.String() }))), body: Type.Array(PluginPrivilege) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/create"),
  requestFormat: Type.Literal("text"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ name: Type.String() }) },
  responses: { 204: Type.Unknown(), 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/push"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: Type.Literal("POST"),
  path: Type.Literal("/plugins/{name}/set"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }), body: Type.Array(Type.String()) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/nodes"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Node), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/nodes/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/nodes/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/nodes/{id}/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer() }), path: Type.Object({ id: Type.String() }), body: NodeSpec },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/swarm"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/init"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Optional(Type.Partial(Type.Object({ ListenAddr: Type.String(), AdvertiseAddr: Type.String(), DataPathAddr: Type.String(), DataPathPort: Type.Integer(), DefaultAddrPool: Type.Array(Type.String()), ForceNewCluster: Type.Boolean(), SubnetSize: Type.Integer(), Spec: SwarmSpec }))) },
  responses: { 200: Type.String(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/join"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Optional(Type.Partial(Type.Object({ ListenAddr: Type.String(), AdvertiseAddr: Type.String(), DataPathAddr: Type.String(), RemoteAddrs: Type.Array(Type.String()), JoinToken: Type.String() }))) },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/leave"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ force: Type.Boolean() }))) },
  responses: { 200: Type.Unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer(), rotateWorkerToken: Type.Optional(Type.Boolean()), rotateManagerToken: Type.Optional(Type.Boolean()), rotateManagerUnlockKey: Type.Optional(Type.Boolean()) }), body: SwarmSpec },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: Type.Literal("GET"),
  path: Type.Literal("/swarm/unlockkey"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: Type.Partial(Type.Object({ UnlockKey: Type.String() })), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: Type.Literal("POST"),
  path: Type.Literal("/swarm/unlock"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Optional(Type.Partial(Type.Object({ UnlockKey: Type.String() }))) },
  responses: { 200: Type.Unknown(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/services"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String(), status: Type.Boolean() }))) },
  responses: { 200: Type.Array(Service), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/services/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Optional(Type.Partial(Type.Object({ "X-Registry-Auth": Type.String() }))), body: Type.Intersect([ServiceSpec, Type.Record(Type.String(), Type.Unknown())]) },
  responses: { 201: Type.Partial(Type.Object({ ID: Type.String(), Warning: Type.String() })), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/services/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ insertDefaults: Type.Boolean() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/services/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/services/{id}/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer(), registryAuthFrom: Type.Optional(Type.Union([Type.Literal("spec"), Type.Literal("previous-spec")])), rollback: Type.Optional(Type.String()) }), path: Type.Object({ id: Type.String() }), header: Type.Optional(Type.Partial(Type.Object({ "X-Registry-Auth": Type.String() }))), body: Type.Intersect([ServiceSpec, Type.Record(Type.String(), Type.Unknown())]) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: Type.Literal("GET"),
  path: Type.Literal("/services/{id}/logs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ details: Type.Boolean(), follow: Type.Boolean(), stdout: Type.Boolean(), stderr: Type.Boolean(), since: Type.Integer(), timestamps: Type.Boolean(), tail: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown(), 503: Type.Unknown() },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: Type.Literal("GET"),
  path: Type.Literal("/tasks/{id}/logs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ details: Type.Boolean(), follow: Type.Boolean(), stdout: Type.Boolean(), stderr: Type.Boolean(), since: Type.Integer(), timestamps: Type.Boolean(), tail: Type.String() }))), path: Type.Object({ id: Type.String() }) },
  responses: { 200: Type.Unknown(), 404: Type.Unknown(), 500: Type.Unknown(), 503: Type.Unknown() },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/secrets"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/secrets/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Intersect([SecretSpec, Type.Record(Type.String(), Type.Unknown())]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/secrets/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/secrets/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/secrets/{id}/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer() }), path: Type.Object({ id: Type.String() }), body: SecretSpec },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: Type.Literal("GET"),
  path: Type.Literal("/configs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ filters: Type.String() }))) },
  responses: { 200: Type.Array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/configs/create"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: Type.Intersect([ConfigSpec, Type.Record(Type.String(), Type.Unknown())]) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/configs/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/configs/{id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ id: Type.String() }) },
  responses: { 204: Type.Unknown(), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/configs/{id}/update"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ version: Type.Integer() }), path: Type.Object({ id: Type.String() }), body: ConfigSpec },
  responses: { 200: Type.Unknown(), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: Type.Literal("GET"),
  path: Type.Literal("/distribution/{name}/json"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ name: Type.String() }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: Type.Literal("POST"),
  path: Type.Literal("/session"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 101: Type.Unknown(), 400: Type.Unknown(), 500: Type.Unknown() },
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
"/distribution/{name}/json": get_DistributionInspect
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
"/session": post_Session
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
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

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
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
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

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValueRaw<T> = T extends import("@sinclair/typebox").TSchema ? import("@sinclair/typebox").Static<T> : T extends object ? { [K in keyof T]: InferSchemaValueRaw<T[K]> } : T;
type InferSchemaValue<T> = InferSchemaValueRaw<T>;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never
        : K extends number
          ? K extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<UParams> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

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
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { if (!Value.Check(schema as import("@sinclair/typebox").TSchema, value)) throw new Error("TypeBox validation failed"); return value; })();
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
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    return url
      .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
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
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (contentType.startsWith("text/")) {
      return (await response.text())
    }

    if (contentType === "application/octet-stream") {
      return (await response.arrayBuffer())
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

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
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

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
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

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
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

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
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

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
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (shouldValidateOutput && responseFormat !== "sse" && response.ok && endpointSchema?.responses) {
            const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Promise<any>
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

  